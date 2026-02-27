'use client';
import React, { useMemo } from 'react';

const KPI = ({ label, value, trend, icon, color }) => (
    <div className="kpi-card" style={{
        background: 'var(--admin-card)',
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid var(--admin-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ padding: '8px', borderRadius: '10px', background: `${color}15`, color: color, display: 'flex' }}>
                {icon}
            </div>
            {trend && (
                <span style={{ fontSize: '0.75rem', color: trend.startsWith('+') ? '#4ade80' : '#ef4444', fontWeight: 'bold', padding: '4px 8px', borderRadius: '20px', background: trend.startsWith('+') ? '#4ade8015' : '#ef444415' }}>
                    {trend}
                </span>
            )}
        </div>
        <div>
            <div style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--admin-text-main)' }}>{value}</div>
        </div>
    </div>
);

export default function DashboardOverview({ orders = [] }) {
    // Basic Analysis
    const analytics = useMemo(() => {
        const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'CANCELLED' ? Number(o.total) : 0), 0);
        const totalOrders = orders.length;
        const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders) : 0;
        const pendingCount = orders.filter(o => o.status === 'PENDING').length;

        return { totalRevenue, totalOrders, avgOrderValue, pendingCount };
    }, [orders]);

    return (
        <div className="fade-in">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
                <KPI
                    label="Total Revenue"
                    value={`₹${analytics.totalRevenue.toLocaleString()}`}
                    trend="+12.5%"
                    icon={<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    color="#4ade80"
                />
                <KPI
                    label="Active Orders"
                    value={analytics.totalOrders}
                    trend="+8%"
                    icon={<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                    color="#60a5fa"
                />
                <KPI
                    label="Pending Tasks"
                    value={analytics.pendingCount}
                    icon={<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    color="#fbbf24"
                />
                <KPI
                    label="Conversion Rate"
                    value="4.2%"
                    trend="-1.2%"
                    icon={<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                    color="#d4af37"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '20px' }}>
                {/* Revenue Overview Chart placeholder */}
                <div style={{ background: 'var(--admin-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--admin-border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Revenue Trends</h3>
                    <div style={{ height: '300px', width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '15px', paddingBottom: '30px' }}>
                        {/* Fake animated bars/line */}
                        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #d4af3744, #d4af37)`, height: `${h}%`, borderRadius: '6px 6px 4px 4px', transition: 'height 1s ease', position: 'relative' }}>
                                <div style={{ position: 'absolute', bottom: '-25px', width: '100%', textAlign: 'center', fontSize: '0.7rem', color: 'var(--admin-text-muted)' }}>Day {i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div style={{ background: 'var(--admin-card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--admin-border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Store Activity</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {orders.slice(0, 5).map((order, i) => (
                            <div key={order.id} style={{ display: 'flex', gap: '15px' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '20px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {order.user?.name?.charAt(0) || 'U'}
                                </div>
                                <div style={{ borderBottom: i < 4 ? '1px solid var(--admin-border)' : 'none', paddingBottom: '12px', flex: 1 }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>{order.user?.name || 'Customer'} placed a new order</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>#{order.id.substring(0, 8)} • {new Date(order.createdAt).toLocaleTimeString()}</div>
                                </div>
                            </div>
                        ))}
                        {orders.length === 0 && <div style={{ color: '#666', textAlign: 'center', padding: '20px' }}>No recent activity</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
