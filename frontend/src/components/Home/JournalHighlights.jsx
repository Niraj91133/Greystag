'use client';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
export default function Journal() {
    const { journal } = useContent();
    const publishedPosts = journal.filter(post => post.status === 'published');
    if (publishedPosts.length === 0)
        return null;
    return (<section className="journal-section fade-in-up">
            <h2 className="section-title">The Journal</h2>
            <div className="journal-grid">
                {publishedPosts.map(post => (<Link key={post.id} href={`/journal/${post.id}`} className="journal-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <article>
                            <img src={post.imageUrl} alt={post.title}/>
                            <div className="journal-info">
                                <span className="journal-cat">Editorial • {post.author || 'Editor'}</span>
                                <h3>{post.title}</h3>
                            </div>
                        </article>
                    </Link>))}
            </div>
        </section>);
}
