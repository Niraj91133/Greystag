'use client';
import Link from 'next/link';
import '@/components/Navigation/nav.css';
import { useCart } from '@/context/CartContext';
export default function NavBar() {
    const { cartCount, openCart } = useCart();
    return (<nav className="top-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Spacer to balance Cart on right, ensuring Logo is perfectly centered */}
            <div style={{ flex: 1 }}></div>

            <div className="brand-logo" style={{ flex: 2, textAlign: 'center' }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>THE GREY STAG</Link>
            </div>

            <div className="cart-icon" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={openCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="#F4F2EE"/>
                        <path d="M3 6H21" stroke="#F4F2EE"/>
                        <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10" stroke="#F4F2EE"/>
                    </svg>
                    {cartCount > 0 && (<span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#C5A059',
                color: '#000',
                fontSize: '10px',
                fontWeight: 'bold',
                height: '16px',
                width: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                            {cartCount}
                        </span>)}
                </button>
            </div>
        </nav>);
}
