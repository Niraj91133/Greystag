import React from 'react';
import { useContent } from '@/context/ContentContext';

export default function CategoryTabs({ activeCategory, onSelect }) {
    const { categories } = useContent();
    const categoriesFromContext = categories.map(c => c.name);

    // As per design prompts: Shirt, Polo, Jackets, Pants, Meetings, Events, Students, Office
    const CATEGORIES = ["All", "Shirt", "Polo", "Jackets", "Pants", "Meetings", "Events", "Students", "Office"];

    return (
        <div className="category-nav-bar">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    className={`nav-tab-btn ${activeCategory.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
