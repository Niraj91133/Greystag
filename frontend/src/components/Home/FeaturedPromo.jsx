'use client';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
export default function Promo() {
    const { videoSection } = useContent();
    return (<section className="promo-section" id="promo">
        <div className="promo-bg">
            {/* Simple video check or fallback to image */}
            {videoSection.content.endsWith('.mp4') ? (<video src={videoSection.content} muted loop autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />) : (<img src="/assets/atelier.png" alt={videoSection.title} />)}
        </div>

        <div className="promo-content">
            <span className="promo-tag">Featured</span>
            <h2 className="promo-title serif">{videoSection.title}</h2>
            <p className="promo-desc">
                Discover the craftsmanship behind our collection.
            </p>

            {videoSection.content.includes('instagram') ? (<a href={videoSection.content} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
                Watch on Instagram
            </a>) : (<Link href="/category/all" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
                Explore Collection
            </Link>)}
        </div>
    </section>);
}
