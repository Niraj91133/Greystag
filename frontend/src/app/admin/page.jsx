'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductWizard from '@/components/Admin/ProductWizard';
import HeroEditor from '@/components/Admin/HeroEditor';
import CategoryEditor from '@/components/Admin/CategoryEditor';
import PromoEditor from '@/components/Admin/PromoEditor';
import VideoScrollEditor from '@/components/Admin/VideoScrollEditor';
import JournalEditor from '@/components/Admin/JournalEditor';
import HandpickedEditor from '@/components/Admin/HandpickedEditor';
import BehindSeamsEditor from '@/components/Admin/BehindSeamsEditor';
import PLPBannerEditor from '@/components/Admin/PLPBannerEditor'; // Added
import OrdersManager from '@/components/Admin/OrdersManager';
import DashboardOverview from '@/components/Admin/DashboardOverview'; // New
import TailoringCRM from '@/components/Admin/TailoringCRM'; // New
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import './admin.css';

const TABS = [
    { id: 'dashboard', label: 'Overview', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { id: 'orders', label: 'Orders CRM', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },

    { id: 'products', label: 'Product Lab', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
    { id: 'hero', label: 'CMS: Hero', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { id: 'plp-banners', label: 'CMS: PLP Banners', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg> },
    { id: 'categories', label: 'CMS: Categories', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> },
    { id: 'promo', label: 'CMS: Promos', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V20M17 4V20M3 8H21M3 16H21" /></svg> },
    { id: 'reels', label: 'CMS: Reels', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
    { id: 'journal', label: 'CMS: Journal', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { id: 'collections', label: 'CMS: Picks', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg> },
    { id: 'behind-seams', label: 'CMS: Behind The Seams', icon: <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

export default function AdminDashboard() {
    const router = useRouter();
    const { user, isLoaded: authLoaded, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (authLoaded) {
            // Temporarily relaxed for direct access during migration
            fetchInitialData();
        }
    }, [user, authLoaded]);

    const fetchInitialData = async () => {
        try {
            setLoading(true);
            const res = await api.get('/orders');
            setOrders(res.data || []);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    if (!authLoaded) {
        return (
            <div style={{ height: '100vh', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardOverview orders={orders} />;
            case 'products': return <ProductWizard />;
            case 'orders': return <OrdersManager />;

            case 'hero': return <HeroEditor />;
            case 'plp-banners': return <PLPBannerEditor />;
            case 'categories': return <CategoryEditor />;
            case 'promo': return <PromoEditor />;
            case 'reels': return <VideoScrollEditor />;
            case 'journal': return <JournalEditor />;
            case 'collections': return <HandpickedEditor />;
            case 'behind-seams': return <BehindSeamsEditor />;
            default: return <DashboardOverview orders={orders} />;
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--admin-bg)', color: 'var(--admin-text-main)', display: 'flex' }}>

            {/* COLLAPSIBLE SIDEBAR */}
            <aside style={{
                width: isSidebarCollapsed ? '80px' : '280px',
                background: 'var(--admin-sidebar)',
                borderRight: '1px solid var(--admin-border)',
                height: '100vh',
                position: 'fixed',
                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 50
            }}>
                {/* Branding */}
                <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                    <div style={{ minWidth: '32px', height: '32px', background: 'var(--admin-accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>M</div>
                    {!isSidebarCollapsed && <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>MENX <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>Studio</span></h1>}
                </div>

                {/* Nav Items */}
                <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                            title={isSidebarCollapsed ? tab.label : ''}
                            style={{
                                border: 'none', background: 'transparent', cursor: 'pointer',
                                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                                padding: isSidebarCollapsed ? '12px 0' : '10px 16px'
                            }}
                        >
                            {tab.icon}
                            {!isSidebarCollapsed && <span>{tab.label}</span>}
                        </button>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div style={{ padding: '24px 12px', borderTop: '1px solid var(--admin-border)' }}>
                    <button
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--admin-border)', borderRadius: '8px', color: 'var(--admin-text-muted)', cursor: 'pointer' }}
                    >
                        {isSidebarCollapsed ? '→' : 'Collapse Sidebar'}
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <section style={{
                flex: 1,
                marginLeft: isSidebarCollapsed ? '80px' : '280px',
                transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column'
            }}>

                {/* STICKY HEADER */}
                <header style={{
                    height: '72px',
                    background: 'rgba(9, 9, 11, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid var(--admin-border)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 40,
                    padding: '0 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--admin-text-muted)', fontSize: '0.85rem' }}>
                        <span>Admin</span>
                        <span>/</span>
                        <span style={{ color: 'var(--admin-text-main)', fontWeight: '500' }}>
                            {TABS.find(t => t.id === activeTab)?.label}
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {/* Search Bar Placeholder */}
                        <div style={{ position: 'relative' }}>
                            <svg style={{ position: 'absolute', left: '12px', top: '10px', color: '#666' }} width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input
                                placeholder="Search..."
                                style={{ background: '#18181b', border: '1px solid var(--admin-border)', borderRadius: '8px', padding: '8px 12px 8px 36px', color: '#fff', fontSize: '0.85rem', width: '200px' }}
                            />
                        </div>

                        {/* Profile */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '20px', borderLeft: '1px solid var(--admin-border)' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{user?.name || 'Admin'}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)' }}>Super Admin</div>
                            </div>
                            <button
                                onClick={() => { if (confirm('Logout?')) logout(); }}
                                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #b8860b)', border: 'none', cursor: 'pointer', color: '#000', fontWeight: 'bold' }}>
                                {user?.name?.charAt(0) || 'A'}
                            </button>
                        </div>
                    </div>
                </header>

                {/* SCROLLABLE VIEWPORT */}
                <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    {/* PAGE HEADING */}
                    <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                                {TABS.find(t => t.id === activeTab)?.label}
                            </h2>
                            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.95rem' }}>
                                Management console for your luxury brand's {activeTab.toLowerCase()}.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => router.push('/')} style={{ padding: '10px 20px', background: 'transparent', border: '1px solid var(--admin-border)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>View Live Site</button>
                            {activeTab === 'dashboard' && <button onClick={fetchInitialData} style={{ padding: '10px 24px', background: 'var(--admin-accent)', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}>Refresh Sync</button>}
                        </div>
                    </div>

                    {/* DYNAMIC CONTENT */}
                    <div className="fade-in" style={{ position: 'relative', zIndex: 50 }}>
                        {renderContent()}
                    </div>
                </div>
            </section>
        </main>
    );
}
