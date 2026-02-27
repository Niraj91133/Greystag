import Link from 'next/link';
import '@/css/pages/pdp.css'; // Reusing PDP styles for consistent luxury variables
export default function CartPage() {
    return (<div style={{
            backgroundColor: '#0f0f0f',
            minHeight: '100vh',
            color: '#f4f2ee',
            fontFamily: 'var(--font-sans)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Minimal Header */}
            <div style={{
            padding: '20px 48px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
                <div style={{ fontFamily: 'var(--font-serif)', letterSpacing: '2px', color: '#d4af37' }}>THE GREY STAG</div>
                <Link href="/category/all" style={{ fontSize: '0.8rem', opacity: 0.7 }}>CONTINUE SHOPPING</Link>
            </div>

            {/* Cart Content */}
            <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '64px 16px',
            textAlign: 'center'
        }}>
                <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            marginBottom: '16px',
            fontWeight: 400
        }}>Your Shopping Bag</h1>

                <p style={{
            fontSize: '0.9rem',
            opacity: 0.6,
            maxWidth: '400px',
            lineHeight: '1.6',
            marginBottom: '48px'
        }}>
                    Your selection of premium essentials is ready for review.
                </p>

                {/* Mock Cart Item Confirmation */}
                <div style={{
            padding: '32px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '4px',
            width: '100%',
            maxWidth: '500px',
            backgroundColor: 'rgba(255,255,255,0.02)'
        }}>
                    <div style={{ fontSize: '1rem', marginBottom: '8px' }}>ITEM ADDED SUCCESSFULY</div>
                    <Link href="/checkout" style={{
            display: 'block',
            width: '100%',
            padding: '16px',
            marginTop: '24px',
            backgroundColor: '#f4f2ee',
            color: '#0f0f0f',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.85rem',
            textAlign: 'center'
        }}>
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>);
}
