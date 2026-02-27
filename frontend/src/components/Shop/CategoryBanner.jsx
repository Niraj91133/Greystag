import React from 'react';
const DEFAULT_PHILOSOPHIES = {
    "Shirts": "Refined essentials for everyday confidence.",
    "Trousers": "Precision tailoring meets modern comfort.",
    "Chinos": "Versatile classics for the effortless man.",
    "Blazers": "Structured elegance for commanding presence.",
    "Accessories": "The finishing touches of a curated life.",
    "Default": "Timeless quality for the modern wardrobe."
};
import Link from 'next/link';
export default function CategoryHero({ title }) {
    return (<section className="plp-hero">
            <div className="plp-hero-content">
                <div className="plp-breadcrumb-title">
                    <Link href="/" className="back-link">
                        <span className="arrow">←</span>
                        <span className="home-text">Home</span>
                    </Link>
                    <span className="divider">/</span>
                    <h1 className="plp-curr-title">{title}</h1>
                </div>
            </div>
            {/* Optional Background Overlay Logic */}
            <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(15,15,15,1) 0%, rgba(15,15,15,0.4) 100%)',
            zIndex: 1
        }}></div>
        </section>);
}
