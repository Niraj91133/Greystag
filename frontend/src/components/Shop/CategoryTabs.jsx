import React from 'react';
import { useContent } from '@/context/ContentContext';

export default function CategoryTabs({ activeCategory, onSelect }) {
    const { categories } = useContent();
    const CATEGORIES = ["All", ...categories.map(c => c.name)];

    return (<div className="category-nav-container">
        <nav className="category-nav">
            {CATEGORIES.map((cat) => (<a key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => onSelect(cat)}>
                {cat}
            </a>))}
        </nav>
    </div>);
}
