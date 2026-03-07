'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function OrderSuccessPage() {
    const { id } = useParams();
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await api.get(`/orders/${id}`);
                setOrder(response.data);
            } catch (err) {
                console.error("Order fetch failed", err);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchOrder();
    }, [id]);

    const handleWhatsApp = () => {
        const message = `Hi The Grey Stag! I just placed an order #${id?.substring(0, 8)}. I'd like to discuss the tailoring details.`;
        const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`; // Replace with actual number
        window.open(url, '_blank');
    };

    if (loading) return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f0f', color: '#fff' }}>
            <div className="loader">Loading your order details...</div>
        </div>
    );

    if (!order) return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f0f', color: '#fff' }}>
            <h2>Order Not Found</h2>
            <Link href="/" style={{ color: '#d4af37', marginTop: '20px' }}>Return Home</Link>
        </div>
    );

    const steps = [
        { label: 'Order Placed', status: 'completed', date: order.createdAt },
        { label: 'Payment Confirmed', status: 'completed', date: order.createdAt },
        { label: 'Tailoring in Progress', status: order.status === 'TAILORING' || order.status === 'QUALITY_CHECK' || order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'completed' : 'pending' },
        { label: 'Quality Check', status: order.status === 'QUALITY_CHECK' || order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'completed' : 'pending' },
        { label: 'Shipped', status: order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'completed' : 'pending' },
        { label: 'Delivered', status: order.status === 'DELIVERED' ? 'completed' : 'pending' }
    ];

    return (
        <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff' }}>
            <Header />

            <main style={{ maxWidth: '800px', margin: '120px auto 80px', padding: '0 24px' }}>
                {/* Success Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                        border: '1px solid #d4af37'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '12px' }}>Order Confirmed</h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Order ID: <span style={{ color: '#fff' }}>#{order.id?.substring(0, 8)}</span></p>
                    <p style={{ color: '#aaa', marginTop: '8px' }}>A confirmation email has been sent to your inbox.</p>
                </div>

                {/* Tracking Visualization */}
                <section style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '32px' }}>Track Your Status</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{
                            position: 'absolute', left: '15px', top: '20px', bottom: '20px', width: '2px',
                            backgroundColor: 'rgba(255,255,255,0.1)', zIndex: 0
                        }} />

                        {steps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', zIndex: 1, opacity: step.status === 'pending' ? 0.4 : 1 }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    backgroundColor: step.status === 'completed' ? '#d4af37' : '#1a1a1a',
                                    border: `2px solid ${step.status === 'completed' ? '#d4af37' : 'rgba(255,255,255,0.2)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {step.status === 'completed' && (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: step.status === 'completed' ? '#fff' : '#888' }}>{step.label}</h4>
                                    {step.date && <p style={{ fontSize: '0.85rem', color: '#666' }}>{new Date(step.date).toLocaleDateString()} {new Date(step.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Order Summary & Support */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {/* Items */}
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', opacity: 0.6 }}>Order Details</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {order.orderItems?.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontSize: '1rem', fontWeight: 500 }}>{item.product?.name}</p>
                                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Size: {item.size} | Color: {item.color}</p>
                                    </div>
                                    <span style={{ color: '#d4af37' }}>₹{item.price}</span>
                                </div>
                            ))}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: 600 }}>Total Paid</span>
                                <span style={{ fontWeight: 600, color: '#d4af37', fontSize: '1.2rem' }}>₹{order.total}</span>
                            </div>
                        </div>
                    </div>

                    {/* Support */}
                    <div style={{ backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '8px', border: '1px solid #d4af3744', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🧵</div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '12px' }}>Tailoring Update</h3>
                        <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '24px' }}>Need to share specific measurements or request a custom tweak? Connect with our master tailor directly.</p>
                        <button
                            onClick={handleWhatsApp}
                            style={{
                                width: '100%', padding: '14px', backgroundColor: '#25D366', color: '#fff',
                                border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Connect on WhatsApp
                        </button>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <button
                        onClick={() => router.push('/')}
                        style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        Back to Homepage
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
