import React from 'react';
import Link from 'next/link';
import { useProduct } from '@/context/ProductContext';
export default function PLPGrid({ products: propProducts }) {
    // We should ONLY use propProducts if provided, as the parent (ShopLayout) 
    // handles the filtering, sorting, and mapping.
    const displayProducts = propProducts || [];

    // Function to render grid with injected trust strips
    const renderContent = () => {
        const items = [];
        let productChunk = [];
        displayProducts.forEach((product, index) => {
            const productId = product.id || product._id;
            productChunk.push(<Link href={`/products/${productId}`} key={productId} style={{ textDecoration: 'none', display: 'block' }}>

                <article className="plp-card">
                    <div className="plp-image-wrap">
                        <img src={(product.images && product.images.length > 0 && product.images[0] !== "[]") ? product.images[0] : (product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000')} alt={product.name} loading="lazy" />
                    </div>
                    <div className="plp-info">
                        <h3 className="plp-name">{product.name}</h3>
                        <span className="plp-price">{product.price.toString().startsWith('₹') ? product.price : `₹${product.price}`}</span>
                    </div>
                </article>
            </Link>);
            // Inject Trust Strip after every 4 items
            if ((index + 1) % 4 === 0 && index !== displayProducts.length - 1) {
                items.push(...productChunk);
                items.push(<div key={`trust-${index}`} className="micro-trust-strip">
                    <span className="trust-text">Premium Fabric • Tailored Fit • Made in India</span>
                </div>);
                productChunk = [];
            }
        });
        // Push remaining
        if (productChunk.length > 0) {
            items.push(...productChunk);
        }
        return items;
    };
    return (<div className="plp-container">
        <div className="plp-grid">
            {renderContent()}
        </div>
    </div>);
}
