'use client';
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PLPGrid from '@/components/Shop/ProductGrid';
import { useWishlist } from '@/context/WishlistContext';
import Link from 'next/link';

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    const formattedProducts = wishlist.map(item => ({
        ...item.product,
        price: item.product.price,
        image: (item.product.images && item.product.images.length > 0) ? item.product.images[0] : 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'
    }));

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
            <Header variant="plp" />

            <div className="global-page-container" style={{ flex: 1, padding: '120px 24px 60px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#fff', marginBottom: '16px' }}>My Favorites</h1>
                    <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>A curated collection of your most-coveted items from The Grey Stag.</p>
                </div>

                {formattedProducts.length > 0 ? (
                    <div className="fade-in">
                        <PLPGrid products={formattedProducts} />
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '100px 0' }} className="fade-in">
                        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1">
                                <rect x="7" y="9" width="10" height="11" rx="2" strokeLinejoin="round" />
                                <rect x="10" y="4" width="4" height="5" rx="1" strokeLinejoin="round" />
                                <circle cx="12" cy="14" r="1.5" />
                            </svg>
                        </div>
                        <h2 style={{ color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Your wishlist is empty</h2>
                        <p style={{ color: '#666', marginBottom: '32px' }}>Explore our collection and save your favorite pieces.</p>
                        <Link href="/category/all" className="btn-primary" style={{ display: 'inline-block', padding: '16px 40px', textDecoration: 'none' }}>
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
