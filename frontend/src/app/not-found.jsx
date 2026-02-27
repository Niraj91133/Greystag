import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'serif',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '5rem', margin: 0, color: '#d4af37' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'normal' }}>Page Not Found</h2>
            <p style={{ maxWidth: '400px', marginBottom: '2.5rem', opacity: 0.6, fontSize: '0.9rem' }}>
                The exquisite piece you are looking for does not exist or has been moved to a new collection.
            </p>
            <Link
                href="/"
                style={{
                    padding: '14px 32px',
                    backgroundColor: '#d4af37',
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}
            >
                Return to Atelier
            </Link>
        </div>
    );
}
