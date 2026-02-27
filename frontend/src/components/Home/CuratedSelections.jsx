'use client';
import React from 'react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
// Helper to get slug from title if not explicitly defined, but explicit is safer
const HANDPICKED_ITEMS = [
    { title: "Meetings", image: "/assets/product_1.png", slug: "meetings" },
    { title: "Office Essentials", image: "/assets/product_2.png", slug: "office-essentials" },
    { title: "Students", image: "/assets/journal_1.png", slug: "students" },
    { title: "Events", image: "/assets/journal_2.png", slug: "events" },
];
export default function Handpicked() {
    const { handpickedItems } = useContent();
    return (<section className="handpicked-section animate-on-scroll">
            <h2 className="section-title">Handpicked For</h2>

            <div className="handpicked-grid">
                {handpickedItems.map((item) => (<Link href={`/category/${item.slug}`} key={item.id} className="handpicked-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="handpicked-image">
                            <img src={item.imageUrl} alt={item.title}/>
                        </div>
                        <div className="handpicked-overlay">
                            <h3>{item.title}</h3>
                        </div>
                    </Link>))}
            </div>
        </section>);
}
