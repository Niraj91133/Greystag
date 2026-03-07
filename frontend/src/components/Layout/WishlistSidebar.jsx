'use client';
import React, { useEffect } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function WishlistDrawer() {
    const { isOpen, closeWishlist, wishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    // Prevent body scroll when wishlist is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleMoveToCart = (item) => {
        const product = item.product;
        if (!product) return;

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || product.image,
            size: product.sizes?.[0] || 'M',
            color: product.colors?.[0] || 'Original'
        });
        // Optionally remove from wishlist after moving to cart
        // toggleWishlist(product.id);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={closeWishlist}
                style={{
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
                }}
            />

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
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#f4f2ee', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#d4af37' }}>❤️</span> Your Favorites ({wishlist.length})
                    </div>
                    <button onClick={closeWishlist} style={{
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
                    {wishlist.length === 0 ? (
                        <div style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.6,
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤍</div>
                            <h3 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.5rem',
                                marginBottom: '16px',
                                fontWeight: 400
                            }}>No favorites yet</h3>
                            <p style={{ fontSize: '0.9rem' }}>Save items you love to find them later.</p>
                            <button onClick={closeWishlist} style={{
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
                                Discover Styles
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {wishlist.map((item) => {
                                const product = item.product || {};
                                return (
                                    <div key={item.id} style={{
                                        display: 'flex',
                                        gap: '16px',
                                        paddingBottom: '24px',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                                    }}>
                                        {/* Image */}
                                        <div style={{ width: '100px', aspectRatio: '3/4', position: 'relative', flexShrink: 0 }}>
                                            <img
                                                src={product.images?.[0] || product.image || '/images/placeholder.jpg'}
                                                alt={product.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                                            />
                                        </div>

                                        {/* Info */}
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                    <h4 style={{ fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-serif)', margin: 0 }}>{product.name}</h4>
                                                    <button
                                                        onClick={() => toggleWishlist(product.id)}
                                                        style={{ background: 'none', border: 'none', color: '#ff4b4b', cursor: 'pointer', padding: 0 }}
                                                        title="Remove"
                                                    >
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div style={{ color: '#d4af37', fontSize: '1.1rem', marginTop: '8px' }}>
                                                    ₹{product.price}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                                                <button
                                                    onClick={() => handleMoveToCart(item)}
                                                    style={{
                                                        flex: 1,
                                                        padding: '10px',
                                                        backgroundColor: '#f4f2ee',
                                                        color: '#0f0f0f',
                                                        border: 'none',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Move to Bag
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {wishlist.length > 0 && (
                    <div style={{
                        padding: '24px',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        backgroundColor: '#0f0f0f'
                    }}>
                        <Link
                            href="/account/wishlist"
                            onClick={closeWishlist}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '16px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.85rem',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontWeight: 500,
                                cursor: 'pointer'
                            }}
                        >
                            View Full Wishlist
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
