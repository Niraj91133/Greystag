import React from 'react';
const CATEGORIES = ["All", "Shirts", "Trousers", "Chinos", "Blazers", "Accessories"];
export default function CategoryTabs({ activeCategory, onSelect }) {
    return (<div className="category-nav-container">
            <nav className="category-nav">
                {CATEGORIES.map((cat) => (<a key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => onSelect(cat)}>
                        {cat}
                    </a>))}
            </nav>
        </div>);
}
