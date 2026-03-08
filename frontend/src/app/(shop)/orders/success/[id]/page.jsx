'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { api } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function OrderSuccessPage() {
    const { id } = useParams();
    const { openUserMenu } = useAuth();
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
        <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px' }}>
                <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px',
                        border: '1px solid #4CAF50'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>

                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '16px' }}>Order Confirmed</h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px' }}>
                        Your order <strong>#{order.orderNumber || order.id?.substring(0, 8)}</strong> has been placed successfully. <br />
                        You can track your order status and tailoring progress from your profile.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <button
                            onClick={() => {
                                router.push('/');
                                setTimeout(() => openUserMenu(), 500);
                            }}
                            style={{
                                padding: '16px 32px', background: '#f4f2ee', color: '#0f0f0f',
                                border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer',
                                textTransform: 'uppercase', letterSpacing: '1px'
                            }}
                        >
                            Go to My Orders
                        </button>

                        <button
                            onClick={() => window.open(`https://wa.me/919113326023?text=${encodeURIComponent(`Hi The Grey Stag! I just placed an order #${order.orderNumber || order.id?.substring(0, 8)}. I'd like to discuss the tailoring details.`)}`, '_blank')}
                            style={{
                                padding: '16px 32px', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366',
                                border: '1px solid #25D366', borderRadius: '4px', fontWeight: '700', cursor: 'pointer',
                                textTransform: 'uppercase', letterSpacing: '1px'
                            }}
                        >
                            Discuss on WhatsApp
                        </button>

                        <button
                            onClick={() => router.push('/')}
                            style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Return to Shopping
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
