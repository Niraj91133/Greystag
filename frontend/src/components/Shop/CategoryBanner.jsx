import React from 'react';

export default function CategoryBanner({ title }) {
    // Generate an image based on title or use a default luxury background
    const bgImage = "https://images.unsplash.com/photo-1490312278390-ab6414f81c81?q=80&w=2000&auto=format&fit=crop";

    return (
        <section className="category-hero-banner">
            <div className="hero-image-container">
                <img src={bgImage} alt={title} className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-text-container">
                <h1 className="hero-title-outline">{title.toUpperCase()}</h1>
            </div>
        </section>
    );
}
