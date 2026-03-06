import axios from "axios";
import prisma from "../config/db.js";
import { env } from "../config/env.js";

/**
 * Generic function to send email via MailBluster API
 * Bypasses SMTP port blocks and is compatible with Vercel serverless.
 */
export const sendEmail = async ({ to, subject, html, text }) => {
    try {
        if (!env.MAILBLUSTER_API_KEY) {
            console.log("\n--- [EMAIL SKIPPED] MailBluster API Key is missing from ENV ---\nTo:", to, "\nSubject:", subject, "\n------------------------------------------\n");
            return { messageId: 'local-test-mode' };
        }

        const fromEmail = env.MAILBLUSTER_FROM_EMAIL || env.EMAIL_USER;
        console.log(`📡 Attempting MailBluster send to ${to} from ${fromEmail}...`);

        const response = await axios.post(
            "https://api.mailbluster.com/api/send-email",
            {
                to,
                subject,
                html_body: html || text,
                from: env.MAILBLUSTER_FROM_EMAIL || env.EMAIL_USER
            },
            {
                headers: {
                    Authorization: env.MAILBLUSTER_API_KEY,
                    "Content-Type": "application/json"
                },
                timeout: 5000 // 5s timeout
            }
        );

        console.log("✅ MailBluster API Success:", response.data.message);
        return response.data;
    } catch (error) {
        const errorData = error.response?.data;
        console.error("❌ MailBluster DETAIL ERROR:", JSON.stringify(errorData, null, 2));
        console.error("❌ Stats Message:", errorData?.message || error.message);
        return null;
    }
};

/**
 * Specifically send payment confirmation email
 */
export const sendPaymentConfirmationEmail = async (orderId) => {
    try {
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: {
                user: { select: { email: true, name: true } },
                orderItems: {
                    include: { product: { select: { name: true } } }
                }
            }
        });

        if (!order) return;

        const date = new Date(order.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const itemsHtml = order.orderItems.map(item => `
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.product.name} ${item.size ? `(${item.size})` : ''}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">₹${Number(item.price).toLocaleString()}</td>
            </tr>
        `).join("");

        const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
        <div style="text-align: center; margin-bottom: 30px;">
           <h1 style="color: #000; letter-spacing: 2px; text-transform: uppercase;">The Grey Stag</h1>
           <p style="color: #999; font-size: 12px;">PREMIUM WEARS LUXURY</p>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
            <div>
                <h2 style="font-size: 18px; margin: 0;">Order Confirmed</h2>
                <p style="color: #666; font-size: 14px; margin: 5px 0;">Order ID: #${order.id.slice(0, 8).toUpperCase()}</p>
                <p style="color: #666; font-size: 14px; margin: 5px 0;">Date: ${date}</p>
            </div>
            <div style="text-align: right;">
                <h3 style="font-size: 14px; color: #C2A46D; margin: 0;">TAX INVOICE</h3>
            </div>
        </div>

        <p>Dear ${order.user.name},</p>
        <p>Your order has been confirmed and is being processed. Thank you for shopping with us.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <thead>
            <tr style="background: #f8f8f8;">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #eee;">Product</th>
                <th style="padding: 12px; text-align: center; border-bottom: 2px solid #eee;">Qty</th>
                <th style="padding: 12px; text-align: right; border-bottom: 2px solid #eee;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
                <td colspan="2" style="padding: 12px; text-align: right; font-weight: bold;">Grand Total</td>
                <td style="padding: 12px; text-align: right; font-weight: bold; color: #C2A46D;">₹${Number(order.total).toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>

        <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #999; text-align: center;">
            <p>This is a computer-generated invoice and doesn't require a signature.</p>
            <p>&copy; 2026 THE GREY STAG. All rights reserved.</p>
        </div>
      </div>
    `;

        await sendEmail({
            to: order.user.email,
            subject: `Order Confirmed: #${order.id.slice(0, 8)}`,
            html: emailHtml
        });

        // ALSO SEND TO ADMIN
        await sendEmail({
            to: env.MAILBLUSTER_FROM_EMAIL || env.EMAIL_USER,
            subject: `🚨 NEW ORDER RECEIVED: #${order.id.slice(0, 8)}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2>New Paid Order Received!</h2>
                    <p><strong>Customer:</strong> ${order.user.name}</p>
                    <p><strong>Email:</strong> ${order.user.email}</p>
                    <p><strong>Total Amount:</strong> ₹${Number(order.total).toLocaleString()}</p>
                    <p><strong>Items:</strong> ${order.orderItems.length}</p>
                    <hr/>
                    <p>Check the admin dashboard for technical measurements and shipping details.</p>
                </div>
            `
        });
    } catch (error) {
        console.error("Error generating/sending confirmation email:", error);
    }
};
