'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
// import '@/components/Journal/journal.css';
import { useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useContent } from '@/context/ContentContext';
export default function JournalPage() {
    const params = useParams();
    const { openCart } = useCart();
    const { user, openLogin, openUserMenu } = useAuth();
    const { journal } = useContent();
    const id = params?.id;
    const post = journal.find(p => p.id === id);
    if (!post) {
        return (<div style={{ padding: '100px', textAlign: 'center', background: '#0F0F0F', color: '#fff', minHeight: '100vh' }}>
                <h2>Loading Journal Entry...</h2>
                <Link href="/" style={{ color: '#d4af37' }}>Return Home</Link>
            </div>);
    }
    return (<div style={{
            backgroundColor: '#0f0f0f',
            minHeight: '100vh',
            color: '#f4f2ee',
            fontFamily: 'var(--font-sans)',
        }}>
            {/* Header */}
            {/* Header */}
            <header style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            background: 'rgba(15,15,15,0.95)',
            backdropFilter: 'blur(8px)',
            zIndex: 100
        }}>
                {/* Left: Back */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                    <Link href="/" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </Link>
                </div>

                {/* Center: Logo */}
                <div style={{ flex: 2, textAlign: 'center' }}>
                    <Link href="/" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '2px', color: '#d4af37', textDecoration: 'none', fontWeight: 600 }}>THE GREY STAG</Link>
                </div>

                {/* Right: Cart & User */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
                    <button onClick={user ? openUserMenu : openLogin} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                    <button onClick={openCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Article Content */}
            <article style={{ maxWidth: '100%', margin: '0 auto', padding: '64px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span style={{
            display: 'inline-block',
            marginBottom: '16px',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#d4af37',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '4px 12px',
            borderRadius: '100px'
        }}>
                        {post.category}
                    </span>
                    <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            lineHeight: '1.2',
            marginBottom: '24px'
        }}>
                        {post.title}
                    </h1>
                </div>

                <div style={{
            width: '100%',
            aspectRatio: '16/9',
            marginBottom: '48px',
            overflow: 'hidden',
            borderRadius: '2px'
        }}>
                    <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>

                <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            opacity: 0.9,
            fontFamily: 'serif', // Using serif for body text for editorial feel
            color: '#e0e0e0'
        }} dangerouslySetInnerHTML={{ __html: post.content }}/>

                <div style={{ marginTop: '64px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', textAlign: 'center' }}>
                    <Link href="/" style={{
            textDecoration: 'none',
            color: '#d4af37',
            fontSize: '0.9rem',
            letterSpacing: '0.05em'
        }}>
                        &larr; BACK TO JOURNAL
                    </Link>
                </div>
            </article>

            {/* More Suggestions Section */}
            <section className="journal-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 className="section-title" style={{
            fontFamily: 'var(--font-serif)',
            color: '#f4f2ee',
            fontSize: '2rem',
            marginBottom: '32px',
            textAlign: 'left'
        }}>
                    More Suggestions
                </h2>
                <div className="journal-grid">
                    <div className="journal-grid">
                        {journal
            .filter(p => p.id !== params.id && p.status === 'published')
            .slice(0, 3)
            .map((post) => (<Link key={post.id} href={`/journal/${post.id}`} className="journal-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <article>
                                        <img src={post.imageUrl} alt={post.title}/>
                                        <div className="journal-info">
                                            <span className="journal-cat" style={{ color: '#d4af37' }}>{post.category}</span>
                                            <h3 style={{ color: '#f4f2ee' }}>{post.title}</h3>
                                        </div>
                                    </article>
                                </Link>))}
                    </div>
                </div>
            </section>
        </div>);
}
