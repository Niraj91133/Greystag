'use client';
import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isFavorited = isInWishlist(product.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product.id);
    };

    return (
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <article className="plp-card">
                <div className="plp-image-wrap">
                    <img
                        src={(product.images && product.images.length > 0 && product.images[0] !== "[]") ? product.images[0] : (product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000')}
                        alt={product.name}
                        loading="lazy"
                    />

                    {/* Favorite Icon */}
                    <button
                        onClick={handleFavoriteClick}
                        className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(8px)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isFavorited ? "#ff4b4b" : "none"}
                            stroke={isFavorited ? "#ff4b4b" : "#fff"}
                            strokeWidth="2"
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>

                    {isFavorited && (
                        <div className="favorited-badge">Favorited</div>
                    )}
                </div>
                <div className="plp-info">
                    <h3 className="plp-name">{product.name}</h3>
                    <span className="plp-price">{product.price.toString().startsWith('₹') ? product.price : `₹${product.price}`}</span>
                </div>
            </article>

            <style jsx>{`
                .favorite-btn:active {
                    transform: scale(0.85);
                }
                .favorite-btn.favorited {
                    animation: heartBeat 0.4s ease-out;
                }
                @keyframes heartBeat {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                    100% { transform: scale(1); }
                }
                .favorited-badge {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    background: #d4af37;
                    color: #000;
                    font-size: 0.65rem;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 2px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>
        </Link>
    );
}
