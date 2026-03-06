import { env } from "../src/config/env.js";
import prisma from "../src/config/db.js";
import { sendEmail } from "../src/utils/email.js";

/**
 * Vercel Cron Job Handler
 * This replaces the node-cron logic which is incompatible with serverless.
 * Configured in vercel.json to run every 30 minutes.
 */
export default async function handler(req, res) {
    // Basic security check to ensure only Vercel Crons can call this
    // In production, you'd use CRON_SECRET header

    console.log("🕒 Running measurement follow-up cron job via Vercel...");

    try {
        const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);

        const measurements = await prisma.measurement.findMany({
            where: {
                updatedAt: { lte: threeHoursAgo }
            },
            include: {
                user: {
                    include: {
                        orders: {
                            where: {
                                status: 'PAID'
                            }
                        }
                    }
                }
            }
        });

        let alertsSent = 0;

        for (const m of measurements) {
            if (m.notificationSentAt && m.notificationSentAt >= m.updatedAt) continue;

            const hasPaidAfter = m.user.orders.some(order => order.createdAt >= m.updatedAt);

            if (!hasPaidAfter) {
                await sendEmail({
                    to: env.EMAIL_USER,
                    subject: `🚨 Alert: Unpaid Measurements - ${m.user.name || m.user.email}`,
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd;">
                            <h2 style="color: #000;">The Grey Stag - Follow up</h2>
                            <p>A user updated measurements but hasn't completed payment in 3 hours.</p>
                            <ul>
                                <li><strong>User:</strong> ${m.user.name || 'N/A'} (${m.user.email})</li>
                                <li><strong>Last Update:</strong> ${m.updatedAt.toLocaleString()}</li>
                            </ul>
                            <p>Check user details in admin panel.</p>
                        </div>
                    `
                });

                await prisma.measurement.update({
                    where: { id: m.id },
                    data: { notificationSentAt: new Date() }
                });

                alertsSent++;
            }
        }

        return res.status(200).json({
            success: true,
            message: `Cron completed. Alerts sent: ${alertsSent}`
        });

    } catch (error) {
        console.error("❌ Cron job failed:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
