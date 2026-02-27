'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Using next/navigation for router in app directory
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import './Header.css';
export default function Header({ variant = 'home', backLink, hideBack = false }) {
    const { cartCount, openCart } = useCart();
    const { user, openLogin, openUserMenu } = useAuth();
    const router = useRouter();
    const handleBack = () => {
        if (backLink) {
            router.push(backLink);
        }
        else {
            router.back();
        }
    };
    // ... rest of render ...
    return (<header className="unified-header">
        {/* ... Left and Center ... */}
        {/* LEFT: Back Button or Spacer */}
        <div className="header-action left">
            {((variant === 'pdp' || variant === 'plp') && !hideBack) && (<button onClick={handleBack} className="header-back-btn" aria-label="Go Back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>)}
        </div>

        {/* CENTER: Logo */}
        <div style={{ flex: 2, textAlign: 'center' }}>
            <Link href="/" className="header-brand">
                THE GREY STAG
            </Link>
        </div>

        {/* RIGHT: User, Wishlist & Cart */}
        <div className="header-action right" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button onClick={user ? openUserMenu : openLogin} className="header-cart-btn" aria-label="User Account">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </button>

            {/* Wishlist Button - Perfume Style Icon */}
            <button onClick={() => user ? router.push('/wishlist') : openLogin()} className="header-cart-btn" aria-label="Favorites">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="7" y="9" width="10" height="11" rx="2" strokeLinejoin="round" />
                    <rect x="10" y="4" width="4" height="5" rx="1" strokeLinejoin="round" />
                    <circle cx="12" cy="14" r="1.5" />
                </svg>
            </button>

            <button onClick={openCart} className="header-cart-btn" aria-label="Open Cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" />
                    <path d="M3 6H21" />
                    <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10" />
                </svg>
                {cartCount > 0 && (<span className="cart-badge">
                    {cartCount}
                </span>)}
            </button>
        </div>

    </header>);
}
