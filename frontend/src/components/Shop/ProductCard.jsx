'use client';
import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isFavorited = isInWishlist(product.id);

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product.id);
    };

    return (
        <Link href={`/products/${product.id}`} className="plp-product-card">
            <div className="product-image-container">
                <img
                    src={product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'}
                    alt={product.name}
                    className="product-main-img"
                    loading="lazy"
                />

                <button
                    onClick={handleWishlistToggle}
                    className={`wishlist-heart-btn ${isFavorited ? 'active' : ''}`}
                    aria-label="Add to wishlist"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={isFavorited ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            <div className="product-card-details">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-brand">{product.brand || "The Grey Stag"}</p>
                <p className="product-card-price">
                    {typeof product.price === 'string' && product.price.startsWith('₹')
                        ? product.price
                        : `₹ ${Number(product.price).toLocaleString('en-IN')}`}
                </p>
            </div>
        </Link>
    );
}
