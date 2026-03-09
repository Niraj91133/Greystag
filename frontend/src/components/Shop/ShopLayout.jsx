'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import Header from '@/components/Layout/Header';
import PLPGrid from "@/components/Shop/ProductGrid";
import Footer from "@/components/Layout/Footer";
import CategoryTabs from "@/components/Shop/CategoryTabs";
import CategoryBanner from "@/components/Shop/CategoryBanner";
import '@/css/pages/plp.css';
import { useCart } from '@/context/CartContext';
import { useProduct } from '@/context/ProductContext';

export default function CategoryLayoutClient({ initialCategory, pageTitle }) {
    const { products: contextProducts } = useProduct();
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const contentRef = useRef(null);

    // Initial scroll reset on change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeCategory]);

    const mappedProducts = useMemo(() => {
        return contextProducts.map(p => ({
            id: p.id || p._id,
            name: p.name,
            brand: "The Grey Stag",
            price: p.price,
            images: p.images || [],
            image: (p.images && p.images.length > 0) ? p.images[0] : 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
            category: typeof p.category === 'object' ? p.category?.name : p.category,
            tags: (p.occasions || p.tags || []).map(t => t.toLowerCase()),
        }));
    }, [contextProducts]);

    const filteredProducts = useMemo(() => {
        // Base filtering if pageTitle is an occasion
        let base = [...mappedProducts];

        const occasionMap = {
            'meetings': 'meeting',
            'events': 'event',
            'students': 'student',
            'office': 'office',
            'office essentials': 'office'
        };

        // If the whole page is dedicated to an occasion (via URL slug)
        const pageOccasionTag = occasionMap[pageTitle?.toLowerCase()];
        if (pageOccasionTag) {
            base = base.filter(p => p.tags.includes(pageOccasionTag));
        }

        // Active Tab Filtering
        const currentTab = activeCategory.toLowerCase();
        if (currentTab === 'all') return base;

        // If active tab is an occasion
        const tabOccasionTag = occasionMap[currentTab];
        if (tabOccasionTag) {
            return base.filter(p => p.tags.includes(tabOccasionTag));
        }

        // Otherwise filter by category name
        // Map some UI names to DB names if needed
        const categoryMapping = {
            'shirt': 'shirts',
            'pants': 'trousers',
            'jackets': 'blazers',
            'polo': 'shirts' // Assuming polos are in shirts or have a specific tag
        };

        const dbCategoryName = categoryMapping[currentTab] || currentTab;
        return base.filter(p => p.category?.toLowerCase() === dbCategoryName);
    }, [mappedProducts, activeCategory, pageTitle]);

    const handleCategoryChange = (category) => {
        if (category === activeCategory) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCategory(category);
            setIsTransitioning(false);
            const slug = category === 'All' ? 'all' : category.toLowerCase();
            window.history.pushState(null, '', `/category/${slug}`);
        }, 120);
    };

    return (
        <div className="plp-page-root">
            {/* 1. HEADER (Handled in Header component) */}
            <Header variant="plp" />

            {/* 2. CATEGORY NAVIGATION BAR */}
            <div className="plp-nav-wrapper">
                <CategoryTabs activeCategory={activeCategory} onSelect={handleCategoryChange} />
            </div>

            {/* 3. CATEGORY HERO BANNER */}
            <CategoryBanner title={activeCategory === 'All' ? (pageTitle || "Collection") : activeCategory} />

            {/* 4. PRODUCT GRID */}
            <main
                className={`plp-content-main ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            >
                <div className="plp-grid-container">
                    <PLPGrid products={filteredProducts} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
