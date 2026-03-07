'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

export default function UserDrawer() {
    const {
        user, showUserMenu, closeUserMenu, logout,
        addAddress, removeAddress, addPayment, deactivateAccount,
        userMenuView: view, setUserMenuView: setView,
        openUserMenu
    } = useAuth();

    const router = useRouter();

    // Local state for forms
    const [newAddr, setNewAddr] = useState({
        label: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });
    const [isAddingAddr, setIsAddingAddr] = useState(false);
    const [newCard, setNewCard] = useState({ number: '', expiry: '' });
    const [isAddingCard, setIsAddingCard] = useState(false);

    // Helpers
    const inputStyle = {
        width: '100%',
        padding: '12px',
        background: 'rgba(255,255,255,0.05)',
        border: 'none',
        color: '#fff',
        marginBottom: '12px',
        fontSize: '0.9rem',
        borderRadius: '4px'
    };

    if (!user) return null;

    const handleClose = () => {
        closeUserMenu();
        setTimeout(() => setView('home'), 400); // Reset after animation
    };

    const handlePincodeChange = async (val) => {
        setNewAddr(prev => ({ ...prev, pincode: val }));
        if (val.length === 6) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${val}`);
                const data = await response.json();
                if (data && data[0].Status === 'Success') {
                    const postOffice = data[0].PostOffice[0];
                    setNewAddr(prev => ({
                        ...prev,
                        city: postOffice.District,
                        state: postOffice.State
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch location", error);
            }
        }
    };

    const handleAddAddress = async (e) => {
        e.preventDefault();
        const success = await addAddress({
            label: newAddr.label,
            address: newAddr.address,
            city: newAddr.city,
            state: newAddr.state,
            pincode: newAddr.pincode,
            isDefault: (user.addresses || []).length === 0
        });
        if (success) {
            setNewAddr({ label: '', address: '', pincode: '', city: '', state: '' });
            setIsAddingAddr(false);
        }
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        addPayment({
            type: 'Visa', // Mock
            last4: newCard.number.slice(-4) || '0000',
            expiry: newCard.expiry,
            default: (user.payments || []).length === 0
        });
        setNewCard({ number: '', expiry: '' });
        setIsAddingCard(false);
    };

    const ViewHeader = ({ title, showBack = true }) => (
        <div style={{
            padding: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        }}>
            {showBack && (
                <button onClick={() => setView('home')} style={{
                    background: 'none', border: 'none', color: '#f4f2ee', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
            )}
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#f4f2ee', margin: 0 }}>
                {title}
            </h2>
            <div style={{ marginLeft: 'auto' }}>
                <button onClick={handleClose} style={{
                    background: 'none', border: 'none', color: '#f4f2ee', padding: '4px', cursor: 'pointer', opacity: 0.7
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Backdrop */}
            <div onClick={handleClose} style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                zIndex: 9998, opacity: showUserMenu ? 1 : 0,
                pointerEvents: showUserMenu ? 'auto' : 'none', transition: 'opacity 0.3s ease'
            }} />

            {/* Drawer Panel */}
            <div style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '400px',
                backgroundColor: '#0f0f0f', zIndex: 9999,
                transform: showUserMenu ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
            }}>

                {/* --- HOME VIEW --- */}
                {view === 'home' && (
                    <>
                        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '0.85rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1px' }}>Welcome Back</div>
                                <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#f4f2ee', padding: '4px', cursor: 'pointer', opacity: 0.7, transform: 'translate(8px, -8px)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#f4f2ee', margin: '8px 0 0 0' }}>
                                {user.name}
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '4px' }}>{user.phone}</p>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ marginTop: '12px' }}>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#555', marginBottom: '12px', letterSpacing: '2px', fontWeight: '800' }}>MY ACTIVITY</h3>
                                    <button onClick={() => setView('orders')} style={{
                                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 20px',
                                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(0,0,0,0) 100%)',
                                        borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.15)', color: '#f4f2ee', cursor: 'pointer', textAlign: 'left', marginBottom: '24px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ fontSize: '1.5rem' }}>📦</div>
                                            <div>
                                                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>My Orders</div>
                                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Track your tailored pieces</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontSize: '0.8rem', background: '#d4af37', color: '#000', padding: '2px 10px', borderRadius: '100px', fontWeight: 'bold' }}>{user.orders?.length || 0}</span>
                                            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>›</span>
                                        </div>
                                    </button>
                                </div>

                                <div style={{ marginTop: '24px' }}>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#666', marginBottom: '8px', letterSpacing: '1px' }}>Settings</h3>
                                    {user.role === 'ADMIN' && (
                                        <button onClick={() => { router.push('/admin'); closeUserMenu(); }} style={{
                                            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 12px',
                                            background: 'rgba(212, 175, 55, 0.1)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)',
                                            color: '#d4af37', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderRadius: '4px', marginBottom: '12px'
                                        }}>
                                            <span>👑 Admin Dashboard</span>
                                            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>›</span>
                                        </button>
                                    )}
                                    {[
                                        { label: 'My Addresses', view: 'addresses' },
                                        { label: 'Payment Methods', view: 'payments' },
                                        { label: 'Privacy & Security', view: 'privacy' }
                                    ].map((item) => (
                                        <button key={item.label} onClick={() => setView(item.view)} style={{
                                            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0',
                                            background: 'transparent', border: 'none', color: '#ccc', fontSize: '1rem', cursor: 'pointer', textAlign: 'left'
                                        }}>
                                            {item.label}
                                            <span style={{ fontSize: '1.2rem', opacity: 0.3 }}>›</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0f0f0f' }}>
                            <button onClick={logout} style={{ width: '100%', padding: '16px', background: '#f4f2ee', color: '#0f0f0f', border: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, cursor: 'pointer' }}>
                                Logout
                            </button>
                        </div>
                    </>
                )}

                {/* --- ORDERS VIEW --- */}
                {view === 'orders' && (
                    <>
                        <ViewHeader title="My Orders" />
                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {user.orders?.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {user.orders.map(order => (
                                        <div key={order.id || order._id} style={{
                                            background: '#121212', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                                            overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                        }}>
                                            <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
                                                <div>
                                                    <div style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Order ID</div>
                                                    <div style={{ fontSize: '0.9rem', color: '#f4f2ee', fontWeight: 'bold', fontFamily: 'monospace' }}>#{String(order.id || order._id).substring(0, 8).toUpperCase()}</div>
                                                </div>
                                                <span style={{
                                                    fontSize: '0.7rem', padding: '4px 10px', borderRadius: '100px', fontWeight: '600',
                                                    background: order.status === 'DELIVERED' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(212, 175, 55, 0.1)',
                                                    color: order.status === 'DELIVERED' ? '#81c784' : '#d4af37',
                                                    border: order.status === 'DELIVERED' ? '1px solid rgba(76, 175, 80, 0.2)' : '1px solid rgba(212, 175, 55, 0.2)'
                                                }}>
                                                    {order.status}
                                                </span>
                                            </div>

                                            <div style={{ padding: '16px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                    {order.orderItems?.map((item, idx) => (
                                                        <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                            <div style={{ width: '50px', height: '60px', borderRadius: '4px', overflow: 'hidden', background: '#1a1a1a' }}>
                                                                <img src={item.product?.images?.[0] || item.product?.image || '/placeholder.jpg'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.product?.name} />
                                                            </div>
                                                            <div style={{ flex: 1 }}>
                                                                <div style={{ fontSize: '0.85rem', color: '#fff' }}>{item.product?.name}</div>
                                                                <div style={{ fontSize: '0.7rem', color: '#666' }}>Size: {item.size} | Qty: {item.quantity}</div>
                                                            </div>
                                                            <div style={{ fontSize: '0.85rem', color: '#d4af37' }}>₹{Number(item.price).toLocaleString()}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {(order.productionStage || order.trackingId) && (
                                                    <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px', border: '1px dashed rgba(212, 175, 55, 0.2)' }}>
                                                        {order.productionStage && (
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                                <span style={{ fontSize: '0.7rem', color: '#888' }}>Current Stage:</span>
                                                                <span style={{ fontSize: '0.7rem', color: '#d4af37', fontWeight: 'bold' }}>{order.productionStage}</span>
                                                            </div>
                                                        )}
                                                        {order.trackingId && (
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <span style={{ fontSize: '0.7rem', color: '#888' }}>Tracking:</span>
                                                                <span style={{ fontSize: '0.7rem', color: '#fff' }}>{order.courierPartner}: {order.trackingId}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                <div style={{ marginTop: '16px', fontSize: '0.75rem', color: '#888', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span>Date</span>
                                                        <span style={{ color: '#fff' }}>{new Date(order.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                    {order.shippingAddress && (
                                                        <div style={{ marginTop: '8px', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                                            <div style={{ color: '#666', marginBottom: '4px', fontSize: '0.6rem', textTransform: 'uppercase' }}>Shipping To</div>
                                                            <div style={{ color: '#bbb', lineHeight: '1.4' }}>
                                                                {order.shippingAddress.line1}<br />
                                                                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <div style={{ fontSize: '0.8rem', color: '#888' }}>Total Amount Paid</div>
                                                    <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 'bold' }}>₹{Number(order.total).toLocaleString()}</div>
                                                </div>

                                                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                                                    <button
                                                        onClick={() => {
                                                            const msg = encodeURIComponent(`Hello The Grey Stag, I would like to inquire about my Order #${String(order.id || order._id).substring(0, 8).toUpperCase()}.`);
                                                            window.open(`https://wa.me/918115555198?text=${msg}`, '_blank');
                                                        }}
                                                        style={{
                                                            flex: 1, padding: '12px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                                                        }}
                                                    >
                                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                                                        CHAT FOR SUPPORT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (<p style={{ color: '#aaa', textAlign: 'center', marginTop: '40px' }}>No orders yet.</p>)}
                        </div>
                    </>
                )}

                {/* --- ADDRESSES VIEW --- */}
                {view === 'addresses' && (
                    <>
                        <ViewHeader title="Addresses" />
                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {(user.addresses && user.addresses.length > 0) ? user.addresses.map(addr => (
                                <div key={addr.id} style={{ padding: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px', position: 'relative' }}>
                                    {addr.isDefault && <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.7rem', color: '#d4af37', border: '1px solid #d4af37', padding: '2px 6px' }}>DEFAULT</span>}
                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#fff' }}>{addr.label}</h4>
                                    <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem', lineHeight: '1.4' }}>{addr.detail || addr.line1}</p>
                                    <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                                        <button onClick={() => removeAddress(addr.id)} style={{ background: 'none', border: 'none', color: '#e57373', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}>Delete</button>
                                    </div>
                                </div>
                            )) : (!isAddingAddr && <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '24px' }}>No addresses saved.</p>)}

                            {isAddingAddr ? (
                                <form onSubmit={handleAddAddress} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <input type="text" placeholder="Label (e.g. Home, Work)" value={newAddr.label} onChange={e => setNewAddr({ ...newAddr, label: e.target.value })} style={inputStyle} required />
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <input type="text" placeholder="Pincode" value={newAddr.pincode} maxLength={6} onChange={e => handlePincodeChange(e.target.value)} style={{ ...inputStyle, flex: 1 }} required />
                                        <input type="text" placeholder="City" value={newAddr.city} onChange={e => setNewAddr({ ...newAddr, city: e.target.value })} style={{ ...inputStyle, flex: 1.5 }} required />
                                    </div>
                                    <input type="text" placeholder="State" value={newAddr.state} onChange={e => setNewAddr({ ...newAddr, state: e.target.value })} style={inputStyle} required />
                                    <textarea placeholder="Address Details" value={newAddr.address} onChange={e => setNewAddr({ ...newAddr, address: e.target.value })} style={{ ...inputStyle, minHeight: '80px', resize: 'none' }} required />
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                        <button type="submit" style={{ flex: 1, padding: '12px', background: '#f4f2ee', color: '#0f0f0f', border: 'none', fontWeight: 600 }}>Save Address</button>
                                        <button type="button" onClick={() => setIsAddingAddr(false)} style={{ flex: 1, padding: '12px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Cancel</button>
                                    </div>
                                </form>
                            ) : (
                                <button onClick={() => setIsAddingAddr(true)} style={{ width: '100%', padding: '16px', border: '1px dashed rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer', marginTop: '8px' }}>
                                    + Add New Address
                                </button>
                            )}
                        </div>
                    </>
                )}

                {/* --- PAYMENTS VIEW --- */}
                {view === 'payments' && (
                    <>
                        <ViewHeader title="Payment Methods" />
                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {(user.payments && user.payments.length > 0) ? user.payments.map(card => (
                                <div key={card.id} style={{ padding: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ color: '#fff', fontWeight: 600 }}>{card.type} •••• {card.last4}</div>
                                        <div style={{ color: '#aaa', fontSize: '0.85rem', marginTop: '4px' }}>Expires {card.expiry}</div>
                                    </div>
                                    {card.default && <span style={{ fontSize: '1.2rem', color: '#81c784' }}>✓</span>}
                                </div>
                            )) : (!isAddingCard && <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '24px' }}>No payment methods saved.</p>)}
                            <button onClick={() => setIsAddingCard(true)} style={{ width: '100%', padding: '16px', border: '1px dashed rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer', marginTop: '8px' }}>
                                + Add New Card
                            </button>
                        </div>
                    </>
                )}

                {/* --- PRIVACY VIEW --- */}
                {view === 'privacy' && (
                    <>
                        <ViewHeader title="Privacy & Security" />
                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            <div style={{ marginBottom: '32px' }}>
                                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px' }}>Data Permissions</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ color: '#ccc', fontSize: '0.9rem' }}>Marketing Emails</span>
                                    <input type="checkbox" defaultChecked />
                                </div>
                            </div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                                <h4 style={{ color: '#e57373', fontSize: '1rem', marginBottom: '16px' }}>Danger Zone</h4>
                                <button onClick={deactivateAccount} style={{ background: 'rgba(244, 67, 54, 0.1)', border: '1px solid rgba(244, 67, 54, 0.3)', color: '#e57373', padding: '16px', width: '100%', cursor: 'pointer', fontWeight: 600 }}>
                                    Deactivate Account
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
