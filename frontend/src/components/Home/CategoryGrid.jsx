'use client';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import './CategoryGrid.css';
export default function CategoryMosaic() {
    const { categories } = useContent();
    const enabledCategories = categories; // Show all to ensure visibility
    if (enabledCategories.length === 0)
        return null;
    return (<section className="category-mosaic">
        {enabledCategories.map(cat => (<Link key={cat.id} href={`/category/${cat.name.toLowerCase()}`} className="mosaic-item">
            <img src={cat.imageUrl || "/assets/product_1.png"} className="mosaic-img" alt={cat.name} />
            <div className="mosaic-overlay">
                <h3 className="mosaic-title">{cat.name}</h3>
            </div>
        </Link>))}
    </section>);
}
