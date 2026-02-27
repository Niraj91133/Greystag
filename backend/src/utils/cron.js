import cron from "node-cron";
import prisma from "../config/db.js";
import { sendEmail } from "./email.js";
import { env } from "../config/env.js";

/**
 * Background job to monitor user measurements and send alerts 
 * if no payment is made within 3 hours after adding measurements.
 */
export const initCronJobs = () => {
    // Run every 30 minutes
    cron.schedule("*/30 * * * *", async () => {
        console.log("🕒 Running measurement follow-up cron job...");

        try {
            const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);

            // 1. Find measurements updated > 3 hours ago 
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

            for (const m of measurements) {
                // Skip if notification already sent for this specific update
                if (m.notificationSentAt && m.notificationSentAt >= m.updatedAt) continue;

                // Check if user has any PAID order after measurements were updated
                const hasPaidAfter = m.user.orders.some(order => order.createdAt >= m.updatedAt);

                if (!hasPaidAfter) {
                    // ALERT ADMIN
                    await sendEmail({
                        to: process.env.EMAIL_USER,
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

                    // Update notification flag
                    await prisma.measurement.update({
                        where: { id: m.id },
                        data: { notificationSentAt: new Date() }
                    });
                }
            }
        } catch (error) {
            console.error("❌ Cron job failed:", error);
        }
    });
};
