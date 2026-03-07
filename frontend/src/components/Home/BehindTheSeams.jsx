'use client';
import React from 'react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import './BehindTheSeams.css';

export default function BehindTheSeams() {
    const { behindSeams } = useContent();

    if (!behindSeams || !behindSeams.isEnabled) return null;

    const { title, description, mediaType, mediaUrl, ctaText, ctaLink } = behindSeams;

    return (
        <section className="behind-seams-section">
            <div className="container">
                <div className="behind-seams-grid">
                    {/* Left Side: Media */}
                    <div className="behind-seams-media">
                        {mediaType === 'video' ? (
                            <video
                                src={mediaUrl || 'https://v.ftcdn.net/05/60/05/65/700_F_560056525_N3Q3c3c3c3c3c3c3c3c3c3c3c3c3c3c3.mp4'}
                                muted
                                loop
                                autoPlay
                                playsInline
                            />
                        ) : (
                            <img
                                src={mediaUrl || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop'}
                                alt={title}
                            />
                        )}
                        <div className="media-overlay"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="behind-seams-content">
                        <span className="section-tag">Our Story</span>
                        <h2 className="section-title serif">{title}</h2>
                        <p className="section-description">
                            {description}
                        </p>
                        <Link href={ctaLink || '#'} className="btn-primary">
                            {ctaText}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
