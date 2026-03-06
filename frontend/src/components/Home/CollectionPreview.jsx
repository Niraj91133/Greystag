'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { useProduct } from '@/context/ProductContext';
import { useContent } from '@/context/ContentContext';
import { useAuth } from '@/context/AuthContext';
export default function Collection() {
    const router = useRouter();
    const { openCart, addToCart, openCheckout } = useCart();
    const { showToast } = useToast();
    const { products } = useProduct();
    const { categories, essentialsConfig } = useContent();
    const { user, openLogin } = useAuth();
    // 1. Filter Check: Is Module Enabled?
    if (!essentialsConfig.isEnabled)
        return null;
    // 2. Base Filter: Get products marked for "Essential Collection"
    const essentialProducts = useMemo(() => {
        let filtered = products.filter(p => p.displayLocations?.includes('Essential Collection') && p.isActive);
        // 3. Sort Logic
        if (essentialsConfig.sortOrder === 'newest') {
            filtered = [...filtered].reverse();
        }
        else if (essentialsConfig.sortOrder === 'manual' && essentialsConfig.orderedProductIds) {
            filtered.sort((a, b) => {
                const indexA = essentialsConfig.orderedProductIds.indexOf(a.id);
                const indexB = essentialsConfig.orderedProductIds.indexOf(b.id);
                // If not in manual list, push to end (or keep relative order? Let's push to end)
                if (indexA === -1)
                    return 1;
                if (indexB === -1)
                    return -1;
                return indexA - indexB;
            });
        }
        // 4. Count Limit - Temporarily removed to ensure all added products show
        // return filtered.slice(0, essentialsConfig.count);
        return filtered;
    }, [products, essentialsConfig]);
    // 5. Tab Categories: "All" + Categories extracted from the Essential Products (or all categories)
    // Using filtered products to determine available categories for this collection makes sense, 
    // but sometimes you want all categories visible even if empty. Let's stick to ContentContext categories.
    const categoryTabs = ["All", ...categories.map(c => c.name)];
    const [activeFilter, setActiveFilter] = useState("All");
    // 6. View Filter: Filter the displayed essentials by selected tab
    const displayedProducts = useMemo(() => {
        if (activeFilter === "All") return essentialProducts;
        return essentialProducts.filter(p => {
            const categoryName = typeof p.category === 'object' ? p.category?.name : p.category;
            return categoryName === activeFilter;
        });
    }, [activeFilter, essentialProducts]);
    // if (essentialProducts.length === 0) return null; // Don't show empty section
    return (<section className="featured-section">
        <style dangerouslySetInnerHTML={{
            __html: `
                .cta-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    padding: 16px;
                    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }
                .product-image:hover .cta-overlay {
                    opacity: 1;
                    pointer-events: auto;
                }
                .product-image {
                    position: relative; /* Ensure relative positioning for absolute overlay */
                }
            `
        }} />
        <h2 className="section-title">Essential Collection</h2>

        <div className="filter-tabs" style={{ marginBottom: 24, overflowX: 'auto', display: 'flex', gap: 16 }}>
            {categoryTabs.map(cat => (<button key={cat} className={`filter-btn btn-outline-gold ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)}>
                {cat}
            </button>))}
        </div>

        {/* Marquee Wrapper */}
        <div className="trust-marquee-container">
            <div className="trust-marquee-content">
                {/* Original Set */}
                <span>✦ Premium Fabric</span>
                <span>✦ Tailored Fit</span>
                <span>✦ Made in India</span>
                <span>✦ Sustainable Sourcing</span>
                <span>✦ Hand-finished Details</span>
                <span>✦ Breathable Material</span>

                {/* Duplicate Set for Infinite Scroll */}
                <span>✦ Premium Fabric</span>
                <span>✦ Tailored Fit</span>
                <span>✦ Made in India</span>
                <span>✦ Sustainable Sourcing</span>
                <span>✦ Hand-finished Details</span>
                <span>✦ Breathable Material</span>
            </div>
        </div>

        <div className="product-grid" id="collection-grid">
            {displayedProducts.length === 0 && (<div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', opacity: 0.6 }}>
                No products found in this collection. Add products via Admin Dashboard and check "Essential Collection".
            </div>)}
            {displayedProducts.map(product => {
                const categoryName = typeof product.category === 'object' ? product.category?.name : product.category;
                return (<article key={product._id || product.id} className="product-card" data-category={categoryName}>
                    <div className="product-image">
                        <Link href={`/products/${product._id || product.id}`} className="img-link-wrapper">
                            <img src={(product.images && product.images.length > 0) ? product.images[0] : ('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000')} alt={product.name} />
                        </Link>
                        <div className="cta-overlay" onClick={() => router.push(`/products/${product._id || product.id}`)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', width: '100%', gap: '12px' }}>
                                <button className="btn-card-cta" style={{ flex: 1, fontSize: '0.85rem', padding: '12px 0', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.8)', color: '#fff' }} onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // Quick Add Logic (Default 'M' or first size)
                                    const defaultSize = product.sizes?.includes('M') ? 'M' : product.sizes?.[0];
                                    addToCart({
                                        id: product._id || product.id,
                                        name: product.name,
                                        price: product.price.toString(),
                                        image: (product.images && product.images.length > 0) ? product.images[0] : (product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'),
                                        size: defaultSize,
                                        color: product.colors?.[0] || 'Midnight Black'
                                    });
                                    showToast("Added to Bag");
                                    openCart();
                                }}>
                                    Add
                                </button>
                                <button className="btn-card-cta" style={{ flex: 1, fontSize: '0.85rem', padding: '12px 0', borderRadius: '2px', backgroundColor: '#fff', color: '#000', border: '1px solid #fff' }} onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // "Buy It Now" implies Checkout. Using PDP pattern: Don't add default item, just open checkout.
                                    if (user) {
                                        openCheckout();
                                    }
                                    else {
                                        openLogin();
                                    }
                                }}>
                                    Buy It Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <Link href={`/products/${product._id || product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="product-header">
                                <h3 className="serif">{product.name}</h3>
                                <span className="price">{product.price.toString().startsWith('₹') ? product.price : `₹${product.price}`}</span>
                            </div>
                        </Link>
                    </div>
                </article>);
            })}
        </div>

        <div className="view-all-wrap">
            <Link href={activeFilter === 'All' ? '/category/all' : `/category/${activeFilter.toLowerCase()}`} className="link-arrow">
                View All {activeFilter === 'All' ? 'Products' : activeFilter} &rarr;
            </Link>
        </div>
    </section>);
}
