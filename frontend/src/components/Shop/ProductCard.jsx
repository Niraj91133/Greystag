'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isFavorited = isInWishlist(product.id);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);

    // Get all images (either from images array or the single image fallback)
    const images = (product.images && product.images.length > 0)
        ? product.images
        : [product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'];

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product.id);
    };

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) { // Threshold for swipe
            if (diff > 0) {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        }
        touchStartX.current = null;
    };

    return (
        <Link href={`/products/${product.id}`} className="plp-product-card">
            <div
                className="product-image-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Image Track */}
                <div
                    className="card-carousel"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="carousel-slide">
                            <img
                                src={img}
                                alt={`${product.name} - ${idx + 1}`}
                                className="product-main-img"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Arrows */}
                {images.length > 1 && (
                    <div className="carousel-arrows">
                        <button className="carousel-arrow" onClick={prevImage} aria-label="Previous image">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button className="carousel-arrow" onClick={nextImage} aria-label="Next image">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                )}

                {/* Mobile Pagination Line */}
                {images.length > 1 && (
                    <div className="pagination-container">
                        <div
                            className="pagination-progress"
                            style={{
                                width: `${((currentIndex + 1) / images.length) * 100}%`
                            }}
                        ></div>
                    </div>
                )}

                {/* Wishlist Heart */}
                <button
                    onClick={handleWishlistToggle}
                    className={`wishlist-heart-btn ${isFavorited ? 'active' : ''}`}
                    aria-label="Add to wishlist"
                >
                    <svg
                        width="22"
                        height="22"
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
