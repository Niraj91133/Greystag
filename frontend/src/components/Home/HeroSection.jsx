'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
export default function Hero() {
    const { hero } = useContent();
    const contentRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('.fade-in-up');
                    elements.forEach((el) => {
                        el.style.animation = 'none';
                        el.offsetHeight; /* trigger reflow */
                        el.style.animation = '';
                        el.classList.add('animate-active');
                    });
                }
            });
        }, { threshold: 0.1 });
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        return () => observer.disconnect();
    }, []);
    // Helper to render newlines in title
    const renderTitle = () => {
        return { __html: hero.title.replace(/\n/g, '<br />') };
    };
    // Force display of Hero, ignoring isEnabled flag
    // if (!hero.isEnabled) return null;
    return (<header className="hero-section">
        <div className="hero-bg">
            {hero.mediaType === 'video' ? (<video src={hero.mediaUrl} muted loop autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />) : (<img src={hero.mediaUrl || "/assets/hero_bg.png"} alt={hero.title} />)}
            <div className="hero-overlay"></div>
        </div>

        <div className="hero-content" ref={contentRef}>
            <h1 className="fade-in-up" dangerouslySetInnerHTML={renderTitle()}></h1>
            <p className="hero-subtext fade-in-up delay-1">
                {hero.subtitle}
            </p>

            <div className="hero-actions fade-in-up delay-2">
                <Link href={hero.ctaLink || "/category/all"} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                    {hero.ctaText}
                </Link>
                <a href="#promo" className="btn-text">Watch the Craft</a>
            </div>
        </div>
    </header>);
}
