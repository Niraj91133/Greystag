'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
export default function UserDrawer() {
    const { user, showUserMenu, closeUserMenu, logout, addAddress, removeAddress, addPayment, deactivateAccount, refreshUser } = useAuth();
    const router = useRouter();
    const [view, setView] = useState('home');

    React.useEffect(() => {
        if (showUserMenu) refreshUser();
    }, [showUserMenu]);
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
    // Safety check
    if (!user)
        return null;
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
            }
            catch (error) {
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
        // Mock card connection
        addPayment({
            type: 'Visa', // Mock
            last4: newCard.number.slice(-4) || '0000',
            expiry: newCard.expiry,
            default: (user.payments || []).length === 0
        });
        setNewCard({ number: '', expiry: '' });
        setIsAddingCard(false);
    };
    const ViewHeader = ({ title, showBack = true }) => (<div style={{
        padding: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    }}>
        {showBack && (<button onClick={() => setView('home')} style={{
            background: 'none',
            border: 'none',
            color: '#f4f2ee',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </button>)}
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#f4f2ee', margin: 0 }}>
            {title}
        </h2>
        <div style={{ marginLeft: 'auto' }}>
            <button onClick={handleClose} style={{
                background: 'none',
                border: 'none',
                color: '#f4f2ee',
                padding: '4px',
                cursor: 'pointer',
                opacity: 0.7
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>);
    return (<>
        {/* Backdrop */}
        <div onClick={handleClose} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998,
            opacity: showUserMenu ? 1 : 0,
            pointerEvents: showUserMenu ? 'auto' : 'none',
            transition: 'opacity 0.3s ease'
        }} />

        {/* Drawer Panel */}
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '90%',
            maxWidth: '420px',
            backgroundColor: '#0f0f0f',
            zIndex: 9999,
            transform: showUserMenu ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
        }}>

            {/* --- HOME VIEW --- */}
            {view === 'home' && (<>
                <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '0.85rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Welcome Back
                        </div>
                        <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#f4f2ee', padding: '4px', cursor: 'pointer', opacity: 0.7, transform: 'translate(8px, -8px)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#f4f2ee', margin: '8px 0 0 0' }}>
                        {user.name || 'User'}
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '4px' }}>{user.phone || user.email}</p>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {/* Orders Section */}
                        <div style={{ marginTop: '12px' }}>
                            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#555', marginBottom: '12px', letterSpacing: '2px', fontWeight: '800' }}>MY ACTIVITY</h3>
                            <button onClick={() => setView('orders')} style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '24px 20px',
                                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(0,0,0,0) 100%)',
                                borderRadius: '16px',
                                border: '1px solid rgba(212, 175, 55, 0.15)',
                                color: '#f4f2ee',
                                cursor: 'pointer',
                                textAlign: 'left',
                                marginBottom: '24px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ fontSize: '1.5rem' }}>📦</div>
                                    <div>
                                        <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>My Orders</div>
                                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Track your tailored pieces</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '0.8rem', background: '#d4af37', color: '#000', padding: '2px 10px', borderRadius: '100px', fontWeight: 'bold' }}>{(user.orders || []).length}</span>
                                    <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>›</span>
                                </div>
                            </button>
                        </div>

                        {/* Settings Navs */}
                        <div style={{ marginTop: '24px' }}>
                            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#666', marginBottom: '8px', letterSpacing: '1px' }}>Settings</h3>
                            {/* Admin link removed per user request */}
                            {[
                                { label: 'My Addresses', view: 'addresses' },
                                { label: 'Payment Methods', view: 'payments' },
                                { label: 'Privacy & Security', view: 'privacy' }
                            ].map((item) => (<button key={item.label} onClick={() => setView(item.view)} style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '16px 0',
                                background: 'transparent',
                                border: 'none',
                                color: '#ccc',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                textAlign: 'left'
                            }}>
                                {item.label}
                                <span style={{ fontSize: '1.2rem', opacity: 0.3 }}>›</span>
                            </button>))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0f0f0f' }}>
                    <button onClick={logout} style={{ width: '100%', padding: '16px', background: '#f4f2ee', color: '#0f0f0f', border: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </>)}

            {/* --- ORDERS VIEW --- */}
            {view === 'orders' && (<>
                <ViewHeader title="My Orders" />
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {user.orders?.length > 0 ? (<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {user.orders.map(order => {
                            const estDelivery = order.estimatedDelivery ? new Date(order.estimatedDelivery).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }) : 'TBD';
                            const waMessage = encodeURIComponent(`Hello THEGREYSTAG team,\n\nOrder ID: ${order.orderNumber || order.id?.substring(0, 8)}\nAmount Paid: ₹${order.total}\nEstimated Delivery: ${estDelivery}\n\nCan you please update me about my order?`);
                            const waLink = `https://wa.me/919113326023?text=${waMessage}`;

                            return (
                                <div key={order.id} style={{
                                    background: '#121212',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px'
                                }}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <div style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>
                                                ORDER #{order.orderNumber || order.id?.substring(0, 8)}
                                            </div>
                                            <div style={{ color: '#666', fontSize: '0.75rem' }}>
                                                Placed on {new Date(order.createdAt || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
                                            </div>
                                        </div>
                                        <div style={{
                                            fontSize: '0.7rem',
                                            padding: '4px 10px',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            color: '#d4af37',
                                            borderRadius: '4px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase'
                                        }}>
                                            {order.productionStage || 'Pending'}
                                        </div>
                                    </div>

                                    {/* Items */}
                                    <div style={{ fontSize: '0.9rem', color: '#eee', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                                        <span style={{ color: '#666', fontSize: '0.8rem' }}>Items:</span> {order.items?.join(', ') || order.orderItems?.map(i => i.product?.name).join(', ')}
                                    </div>

                                    {/* Details Grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                                            <div style={{ color: '#666', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Amount Paid</div>
                                            <div style={{ color: '#fff', fontWeight: '600' }}>₹{order.total}</div>
                                        </div>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                                            <div style={{ color: '#666', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Est. Delivery</div>
                                            <div style={{ color: '#fff', fontWeight: '600' }}>{estDelivery}</div>
                                        </div>
                                    </div>

                                    {/* Progress Timeline (Simplified) */}
                                    <div style={{ display: 'flex', gap: '4px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                        {['Pending', 'Fabric Cutting', 'Tailoring', 'Quality Check', 'Ready to Ship', 'Shipped', 'Delivered'].map((stage, idx, arr) => {
                                            const currentIdx = arr.indexOf(order.productionStage || 'Pending');
                                            const isActive = idx <= currentIdx;
                                            return <div key={stage} style={{ flex: 1, background: isActive ? '#d4af37' : 'transparent', transition: 'background 0.3s' }} />
                                        })}
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                                        <button
                                            onClick={() => window.open(waLink, '_blank')}
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                background: '#25D366',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                fontSize: '0.85rem',
                                                fontWeight: '600'
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            Support
                                        </button>
                                        <button
                                            onClick={() => {
                                                closeUserMenu();
                                                router.push(`/orders/success/${order.id}`);
                                            }}
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: '#fff',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>) : (<p style={{ color: '#aaa', textAlign: 'center', marginTop: '40px' }}>No orders yet.</p>)}
                </div>
            </>)}

            {/* --- ADDRESSES VIEW --- */}
            {view === 'addresses' && (<>
                <ViewHeader title="Addresses" />
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {(user.addresses && user.addresses.length > 0) ? user.addresses.map(addr => (<div key={addr.id} style={{
                        padding: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '16px',
                        position: 'relative'
                    }}>
                        {addr.isDefault && <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.7rem', color: '#d4af37', border: '1px solid #d4af37', padding: '2px 6px' }}>DEFAULT</span>}
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#fff' }}>{addr.label}</h4>
                        <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem', lineHeight: '1.4' }}>{addr.detail}</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                            <button onClick={() => removeAddress(addr.id)} style={{ background: 'none', border: 'none', color: '#e57373', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}>Delete</button>
                        </div>
                    </div>)) : (!isAddingAddr && <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '24px' }}>No addresses saved.</p>)}

                    {isAddingAddr ? (<form onSubmit={handleAddAddress} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>

                        <input type="text" placeholder="Label (e.g. Home, Work)" value={newAddr.label} onChange={e => setNewAddr({ ...newAddr, label: e.target.value })} style={inputStyle} required />

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input type="text" placeholder="Pincode" value={newAddr.pincode} maxLength={6} onChange={e => handlePincodeChange(e.target.value)} style={{ ...inputStyle, flex: 1 }} required />
                            {/* Auto-filled but editable */}
                            <input type="text" placeholder="City" value={newAddr.city} onChange={e => setNewAddr({ ...newAddr, city: e.target.value })} style={{ ...inputStyle, flex: 1.5 }} required />
                        </div>

                        <input type="text" placeholder="State" value={newAddr.state} onChange={e => setNewAddr({ ...newAddr, state: e.target.value })} style={inputStyle} required />

                        <textarea placeholder="Address Details (House No, Street, Landmark)" value={newAddr.address} onChange={e => setNewAddr({ ...newAddr, address: e.target.value })} style={{ ...inputStyle, minHeight: '80px', resize: 'none' }} required />

                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            <button type="submit" style={{ flex: 1, padding: '12px', background: '#f4f2ee', color: '#0f0f0f', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Save Address</button>
                            <button type="button" onClick={() => setIsAddingAddr(false)} style={{ flex: 1, padding: '12px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </form>) : (<button onClick={() => setIsAddingAddr(true)} style={{ width: '100%', padding: '16px', border: '1px dashed rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer', marginTop: '8px' }}>
                        + Add New Address
                    </button>)}
                </div>
            </>)}

            {/* --- PAYMENTS VIEW --- */}
            {view === 'payments' && (<>
                <ViewHeader title="Payment Methods" />
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {(user.payments && user.payments.length > 0) ? user.payments.map(card => (<div key={card.id} style={{
                        padding: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{ color: '#fff', fontWeight: 600 }}>{card.type} •••• {card.last4}</div>
                            <div style={{ color: '#aaa', fontSize: '0.85rem', marginTop: '4px' }}>Expires {card.expiry}</div>
                        </div>
                        {card.default && <span style={{ fontSize: '1.2rem', color: '#81c784' }}>✓</span>}
                    </div>)) : (!isAddingCard && <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '24px' }}>No payment methods saved.</p>)}

                    {isAddingCard ? (<form onSubmit={handleAddCard} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <input type="text" placeholder="Card Number" value={newCard.number} maxLength={19} onChange={e => setNewCard({ ...newCard, number: e.target.value })} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', marginBottom: '8px' }} />
                        <input type="text" placeholder="MM/YY" value={newCard.expiry} maxLength={5} onChange={e => setNewCard({ ...newCard, expiry: e.target.value })} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', marginBottom: '16px' }} />
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button type="submit" style={{ flex: 1, padding: '12px', background: '#f4f2ee', color: '#0f0f0f', border: 'none', fontWeight: 600 }}>Save</button>
                            <button type="button" onClick={() => setIsAddingCard(false)} style={{ flex: 1, padding: '12px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Cancel</button>
                        </div>
                    </form>) : (<button onClick={() => setIsAddingCard(true)} style={{ width: '100%', padding: '16px', border: '1px dashed rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer', marginTop: '8px' }}>
                        + Add New Card
                    </button>)}
                </div>
            </>)}

            {/* --- PRIVACY VIEW --- */}
            {view === 'privacy' && (<>
                <ViewHeader title="Privacy & Security" />
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    <div style={{ marginBottom: '32px' }}>
                        <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px' }}>Data Permissions</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>Marketing Emails</span>
                            <input type="checkbox" defaultChecked />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>Share Analytics</span>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                        <h4 style={{ color: '#e57373', fontSize: '1rem', marginBottom: '16px' }}>Danger Zone</h4>
                        <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '16px', lineHeight: '1.5' }}>
                            Once you deactivate your account, there is no going back. Please be certain.
                        </p>
                        <button onClick={deactivateAccount} style={{
                            background: 'rgba(244, 67, 54, 0.1)',
                            border: '1px solid rgba(244, 67, 54, 0.3)',
                            color: '#e57373',
                            padding: '16px',
                            width: '100%',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 600
                        }}>
                            Deactivate Account
                        </button>
                    </div>
                </div>
            </>)}

        </div>
    </>);
}
