'use client';
import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
export default function CartDrawer() {
    const { isOpen, closeCart, cartItems, cartTotal, removeFromCart, updateQuantity, openCheckout } = useCart();
    const { user, openLogin } = useAuth();
    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    return (<>
        {/* Backdrop */}
        <div onClick={closeCart} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease'
        }} />

        {/* Drawer Panel */}
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '480px',
            backgroundColor: '#0f0f0f',
            zIndex: 9999,
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
        }}>
            {/* Header */}
            <div style={{
                padding: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#f4f2ee' }}>
                    Your Bag ({cartItems.length})
                </div>
                <button onClick={closeCart} style={{
                    background: 'none',
                    border: 'none',
                    color: '#f4f2ee',
                    padding: '8px',
                    cursor: 'pointer',
                    opacity: 0.7
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Content Area */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '24px',
                color: '#f4f2ee'
            }}>
                {cartItems.length === 0 ? (<div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.6
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        marginBottom: '16px',
                        fontWeight: 400
                    }}>Your bag is empty</h3>
                    <p style={{ fontSize: '0.9rem' }}>Start your collection with our essentials.</p>
                    <button onClick={closeCart} style={{
                        marginTop: '24px',
                        padding: '12px 24px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'transparent',
                        color: '#fff',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        letterSpacing: '1px'
                    }}>
                        Continue Shopping
                    </button>
                </div>) : (<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {cartItems.map((item, index) => (<div key={`${item.id}-${item.size}-${item.color}-${index}`} style={{
                        display: 'flex',
                        gap: '16px',
                        paddingBottom: '24px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                    }}>
                        {/* Image */}
                        <div style={{ width: '80px', aspectRatio: '3/4', position: 'relative', flexShrink: 0 }}>
                            <img
                                src={item.image || '/images/placeholder.jpg'}
                                alt={item.name}
                                onError={(e) => {
                                    if (e.target.src.includes('placeholder.jpg')) return;
                                    e.target.src = '/images/placeholder.jpg';
                                }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', backgroundColor: '#1a1a1a' }}
                            />
                        </div>

                        {/* Info */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 500, fontFamily: 'var(--font-serif)', margin: 0 }}>{item.name}</h4>
                                    <button onClick={() => removeFromCart(item.id, item.size, item.color)} style={{ background: 'none', border: 'none', color: '#fff', opacity: 0.4, cursor: 'pointer', padding: 0 }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                <div style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '4px' }}>
                                    {item.color} {item.size && ` / ${item.size}`}
                                </div>

                                {/* Quantity Controls */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                                        style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
                                    >-</button>
                                    <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                                        style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}
                                    >+</button>
                                </div>
                            </div>

                            <div style={{ color: '#d4af37', fontSize: '1rem' }}>
                                {item.price}
                            </div>
                        </div>
                    </div>))}
                </div>)}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (<div style={{
                padding: '24px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: '#0f0f0f'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                    fontSize: '1rem',
                    color: '#f4f2ee',
                    fontFamily: 'var(--font-serif)'
                }}>
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                </div>

                <button onClick={() => {
                    closeCart();
                    if (user) {
                        openCheckout();
                    }
                    else {
                        openLogin();
                    }
                }} style={{
                    display: 'block',
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#f4f2ee',
                    color: '#0f0f0f',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}>
                    Proceed to Checkout
                </button>
            </div>)}
        </div>
    </>);
}
