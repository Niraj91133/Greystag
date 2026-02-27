'use client';
import React, { useState, useMemo } from 'react';
import Header from '@/components/Layout/Header';
import FilterBar from "@/components/Shop/FilterPanel";
import PLPGrid from "@/components/Shop/ProductGrid";
import Footer from "@/components/Layout/Footer";
import CategoryTabs from "@/components/Shop/CategoryTabs"; // User deleted this but I just recreated it
import '@/css/pages/plp.css'; // Import the user's allowed CSS
import { useCart } from '@/context/CartContext';
import { useProduct } from '@/context/ProductContext'; // Import context
export default function CategoryLayoutClient({ initialCategory, pageTitle }) {
    // State
    const { products: contextProducts } = useProduct(); // Get products from context
    const { openCart } = useCart();
    // Map Context Products to UI Products (fixing type mismatch)
    const mappedProducts = useMemo(() => {
        return contextProducts.map(p => ({
            id: p.id || p._id, // Handle both string IDs
            name: p.name,
            price: `₹${p.price}`,
            image: (p.images && p.images.length > 0) ? p.images[0] : 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
            category: typeof p.category === 'object' ? p.category?.name : p.category,
            size: p.sizes,

            color: p.colors?.[0],
            tags: p.occasions,
            fit: 'Regular' // Default
        }));
    }, [contextProducts]);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeFilters, setActiveFilters] = useState({ Size: [], Color: [], Fit: [] });
    const [sortType, setSortType] = useState('');
    const contentRef = React.useRef(null);
    // Initial scroll reset on mount or category change
    React.useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeCategory]);
    // --- LOGIC: Filter & Sort ---
    const filteredProducts = useMemo(() => {
        // 1. Base Filter determined by Page Title (Intent)
        let baseProducts = mappedProducts;
        // This is a heuristic based on implementation in page.tsx where pageTitle = Occasion Name
        if (pageTitle && pageTitle !== 'All' && !['Shirts', 'Pants', 'Trousers', 'Chinos', 'Blazers', 'Accessories'].includes(pageTitle)) {
            const occasionMap = {
                'Meetings': 'Meeting',
                'Office Essentials': 'Office',
                'Students': 'Student',
                'Events': 'Event'
            };
            const tag = occasionMap[pageTitle] || pageTitle.replace(/s$/, ''); // naive singularize
            // Check tags (mapped from occasions)
            baseProducts = mappedProducts.filter(p => p.tags?.includes(tag));
        }
        // 2. Category Filter (Active Tab)
        let result = activeCategory === 'All'
            ? [...baseProducts]
            : baseProducts.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

        // Filters
        if (activeFilters.Size.length > 0)
            result = result.filter(p => p.size?.some(s => activeFilters.Size.includes(s)));
        if (activeFilters.Color.length > 0)
            result = result.filter(p => p.color && activeFilters.Color.includes(p.color));
        if (activeFilters.Fit.length > 0)
            result = result.filter(p => p.fit && activeFilters.Fit.includes(p.fit));

        // Sort
        if (sortType === 'price_asc') {
            result.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        }
        else if (sortType === 'price_desc') {
            result.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        }
        return result;
    }, [mappedProducts, activeCategory, activeFilters, sortType, pageTitle]);

    // Grouped View for 'All'
    const groupedView = useMemo(() => {
        if (activeCategory !== 'All')
            return null;
        const categories = ["Shirts", "Trousers", "Chinos", "Blazers", "Suits", "Accessories"];
        const groups = {};
        categories.forEach(cat => {
            const catProducts = filteredProducts.filter(p => p.category?.toLowerCase() === cat.toLowerCase());
            if (catProducts.length > 0)
                groups[cat] = catProducts;
        });
        return groups;
    }, [activeCategory, filteredProducts]);

    // Handlers
    const handleCategoryChange = (category) => {
        if (category === activeCategory)
            return;
        // Scroll to top immediately or smoothly preference
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCategory(category);
            setIsTransitioning(false);
            const slug = category === 'All' ? 'all' : category.toLowerCase();
            window.history.pushState(null, '', `/category/${slug}`);
        }, 120);
    };
    const handleFilterChange = (type, value) => {
        setActiveFilters(prev => {
            const current = prev[type];
            return {
                ...prev,
                [type]: current.includes(value) ? current.filter(i => i !== value) : [...current, value]
            };
        });
    };
    const handleSort = (type) => setSortType(type);
    return (<main className="plp-main-frame">
        {/* 1. FIXED HEADER STACK */}
        <div style={{ flexShrink: 0, zIndex: 100, background: '#0f0f0f' }}>
            <Header variant="plp" />

            {/* 2. SUB-HEADER (Tabs & Filters) */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {/* ROW: Back + Tabs */}
                <div className="category-row">
                    {/* Scrollable Tabs */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <CategoryTabs activeCategory={activeCategory} onSelect={handleCategoryChange} />
                    </div>
                </div>

                {/* ROW: Filters */}
                <div className="filter-bar-row">
                    <FilterBar activeFilters={activeFilters} onFilterChange={handleFilterChange} onSort={handleSort} />
                </div>
            </div>
        </div>

        {/* 3. SCROLLABLE CONTENT AREA */}
        <div ref={contentRef} className="plp-scroll-area">
            <div className="plp-container" style={{
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 120ms ease-out',
            }}>
                {groupedView ? (<div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    {Object.entries(groupedView).map(([cat, items]) => (<section key={cat}>
                        <h2 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.5rem',
                            marginBottom: '24px',
                            color: 'rgba(255,255,255,0.8)'
                        }}>{cat}</h2>
                        <PLPGrid products={items} />
                    </section>))}
                </div>) : (<PLPGrid products={filteredProducts} />)}
            </div>
            <Footer />
        </div>
    </main>);
}
