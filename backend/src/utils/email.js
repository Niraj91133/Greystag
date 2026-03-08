import nodemailer from "nodemailer";
import prisma from "../config/db.js";
import { env } from "../config/env.js";

/**
 * Switch back to Nodemailer (Gmail SMTP) as requested.
 * Uses App Passwords for secure authentication.
 */
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
    },
});

// Verify connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Gmail (Nodemailer) Connection Error:", error);
    } else {
        console.log("✅ Gmail (Nodemailer) is ready to send messages");
    }
});

/**
 * Generic function to send email via Gmail
 */
export const sendEmail = async ({ to, subject, html, text }) => {
    try {
        const mailOptions = {
            from: `"The Grey Stag" <${env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("📧 Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("❌ Gmail Email Error:", error.message);
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
                user: {
                    select: {
                        email: true,
                        name: true,
                        phone: true,
                        measurement: true
                    }
                },
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

        const measurements = order.user.measurement;
        let measurementsHtml = '';
        if (measurements) {
            measurementsHtml = `
            <div style="margin-top: 30px; padding: 20px; background: #fdfaf3; border: 1px solid #eedebe; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #8a6d3b; font-size: 16px; border-bottom: 1px solid #eedebe; padding-bottom: 10px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">Tailoring Measurements</h3>
                <table style="width: 100%; font-size: 14px; border-collapse: collapse; line-height: 1.6;">
                    <tr><td style="color: #666; width: 40%;">Height:</td><td style="font-weight: bold; color: #000;">${measurements.height || 'N/A'}</td></tr>
                    <tr><td style="color: #666;">Chest/Shirt:</td><td style="font-weight: bold; color: #000;">${measurements.chest || 'N/A'}"</td></tr>
                    <tr><td style="color: #666;">Shoulder Type:</td><td style="font-weight: bold; color: #000;">${measurements.shoulderType || 'N/A'}</td></tr>
                    <tr><td style="color: #666;">Preferred Fit:</td><td style="font-weight: bold; color: #000;">${measurements.preferredFit || 'N/A'}</td></tr>
                    <tr><td style="color: #666;">Upper Body:</td><td style="font-weight: bold; color: #000;">${measurements.upperBodyShape || 'N/A'}</td></tr>
                    <tr><td style="color: #666;">Lower Body:</td><td style="font-weight: bold; color: #000;">${measurements.lowerBodyShape || 'N/A'}</td></tr>
                    ${measurements.waist ? `<tr><td style="color: #666;">Waist:</td><td style="font-weight: bold; color: #000;">${measurements.waist}"</td></tr>` : ''}
                    ${measurements.shoulder ? `<tr><td style="color: #666;">Shoulder width:</td><td style="font-weight: bold; color: #000;">${measurements.shoulder}"</td></tr>` : ''}
                    ${measurements.neck ? `<tr><td style="color: #666;">Neck:</td><td style="font-weight: bold; color: #000;">${measurements.neck}"</td></tr>` : ''}
                </table>
                <p style="font-size: 11px; color: #999; margin-top: 15px; border-top: 1px solid #f0e6d2; pt: 10px;">
                    *These measurements are saved for your tailored fit. If you wish to change them, please contact us immediately.
                </p>
            </div>
            `;
        }

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

        ${measurementsHtml}

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
            to: env.EMAIL_USER,
            subject: `🚨 NEW ORDER RECEIVED: #${order.id.slice(0, 8)}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #000; border: 1px solid #eee; border-radius: 8px;">
                    <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Paid Order Received!</h2>
                    <p><strong>Customer Name:</strong> ${order.user.name}</p>
                    <p><strong>Customer Email:</strong> ${order.user.email}</p>
                    <p><strong>Customer Phone:</strong> ${order.user.phone || 'N/A'}</p>
                    <p><strong>Order ID:</strong> #${order.id.slice(0, 8).toUpperCase()}</p>
                    <p><strong>Total Paid:</strong> ₹${Number(order.total).toLocaleString()}</p>
                    
                    ${measurementsHtml ? `
                    <div style="background: #fdfaf3; padding: 15px; margin-top: 20px; border: 1px solid #eedebe;">
                        <h3 style="margin-top: 0; font-size: 15px;">Tailoring Data for Production:</h3>
                        ${measurementsHtml}
                    </div>
                    ` : '<p style="color: red;">⚠️ WARNING: No measurements found for this user!</p>'}
                    
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;"/>
                    <p style="font-size: 12px; color: #666;">Visit the <a href="${env.CLIENT_URL}/admin">Admin Dashboard</a> to manage this order.</p>
                </div>
            `
        });
    } catch (error) {
        console.error("Error generating/sending confirmation email:", error);
    }
};
