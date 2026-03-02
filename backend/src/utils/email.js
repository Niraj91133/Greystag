import sgMail from '@sendgrid/mail';
import prisma from "../config/db.js";
import { env } from "../config/env.js";

// Initialize SendGrid
if (env.SENDGRID_API_KEY) {
    sgMail.setApiKey(env.SENDGRID_API_KEY);
    console.log("✅ SendGrid is ready to send messages via API");
} else {
    console.warn("⚠️  SendGrid API Key missing. Falling back to local logging mode.");
}

/**
 * Generic function to send email via SendGrid (Bypasses Render port blocks)
 */
export const sendEmail = async (options) => {
    const msg = {
        to: options.to,
        from: {
            email: env.EMAIL_USER,
            name: "The Grey Stag"
        },
        subject: options.subject,
        text: options.text,
        html: options.html,
    };

    try {
        if (!env.SENDGRID_API_KEY) {
            console.log("\n--- [LOCAL LOGGING MODE] Email not sent ---\nFrom: The Grey Stag\nTo:", options.to, "\nSubject:", options.subject, "\n------------------------------------------\n");
            return { messageId: 'local-test-mode' };
        }

        const [response] = await sgMail.send(msg);
        console.log("✅ Email sent successfully via SendGrid!");
        return { messageId: response.headers['x-message-id'] };

    } catch (error) {
        console.error("❌ SendGrid Email Error:", error.message);
        if (error.response) {
            console.error(JSON.stringify(error.response.body, null, 2));
        }
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
            to: env.EMAIL_USER,
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
