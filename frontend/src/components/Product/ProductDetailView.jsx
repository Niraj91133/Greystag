'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/css/pages/pdp.css';
import { useProduct } from '@/context/ProductContext'; // Import context
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Header from '@/components/Layout/Header';
import CustomizationOverlay from './Customizer/CustomizationOverlay';
import FitConfirmationModal from './Customizer/FitConfirmationModal';
import { useAuth } from '@/context/AuthContext';

export default function ProductDetailClient({ product: initialProduct }) {
    const router = useRouter();
    const { openCart, addToCart, openCheckout } = useCart();
    const { getProduct, products } = useProduct();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { user, openLogin, saveMeasurements } = useAuth();
    const contextProduct = getProduct(initialProduct?.id?.toString() || '');

    // Map Context Product to UI Product if found
    const product = contextProduct ? {
        id: contextProduct.id,
        name: contextProduct.name,
        price: `₹${contextProduct.price}`,
        image: (contextProduct.images && contextProduct.images.length > 0) ? contextProduct.images[0] : '/images/placeholder.jpg',
        images: contextProduct.images || [],
        category: typeof contextProduct.category === 'object' ? contextProduct.category?.name : contextProduct.category,
        size: contextProduct.sizes,
        color: contextProduct.colors?.[0], // Display string (first color)
        tags: contextProduct.occasions,
        fit: 'Regular'
    } : {
        ...initialProduct,
        category: typeof initialProduct?.category === 'object' ? initialProduct?.category?.name : initialProduct?.category
    };

    // Handle case where neither exists (should be handled by page, but safety first)
    if (!product)
        return <div className="pdp-main" style={{ padding: '100px', textAlign: 'center' }}>Product Not Found</div>;

    // STATE
    const [selectedSize, setSelectedSize] = useState(null);
    const [sizeError, setSizeError] = useState(false);
    const [selectedColor, setSelectedColor] = useState('Midnight Black');
    const [activeImage, setActiveImage] = useState(0);
    const [openAccordion, setOpenAccordion] = useState('description');
    const [showBuyBar, setShowBuyBar] = useState(false);
    const [showCustomizer, setShowCustomizer] = useState(false);
    const [showFitModal, setShowFitModal] = useState(false);
    const [pendingAction, setPendingAction] = useState(null);
    const [customizationData, setCustomizationData] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // REFS
    const heroRef = useRef(null);
    const scrollContainerRef = useRef(null);

    // Sync scroll index
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const index = Math.round(scrollContainerRef.current.scrollLeft / scrollContainerRef.current.clientWidth);
            setCurrentImgIndex(index);
        }
    };

    // Keep scroll aligned on mode change or resize
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: currentImgIndex * scrollContainerRef.current.clientWidth,
                behavior: 'auto'
            });
        }
    }, [isLightboxOpen]);
    // EFFECT: Sticky Buy Bar Visibility
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Show bar when hero moves OUT of view (scrolling down)
            setShowBuyBar(!entry.isIntersecting);
        }, { threshold: 0 });
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return () => observer.disconnect();
    }, []);
    // HANDLERS
    const toggleAccordion = (id) => {
        setOpenAccordion(prev => prev === id ? null : id);
    };
    // LOAD SAVED FIT PROFILE (User-Specific)
    const [savedFitProfile, setSavedFitProfile] = useState(null);
    useEffect(() => {
        // Priority 1: Use database measurements if user is logged in
        if (user && user.measurement) {
            setSavedFitProfile({
                ...user.measurement,
                calculatedSize: 'Custom' // Force custom flow if measurements exist
            });
            return;
        }

        // Priority 2: Use local storage (Guest or fallback)
        const storageKey = user ? `menx_fit_profile_${user.phone}` : 'menx_fit_profile_guest';
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                setSavedFitProfile(JSON.parse(saved));
            } catch (e) {
                console.error("Error parsing fit profile", e);
                setSavedFitProfile(null);
            }
        } else {
            setSavedFitProfile(null);
        }
    }, [user, user?.measurement]); // Reload when user or their measurements change
    const galleryImages = (product.images && product.images.length > 0) ? product.images : [product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'];

    const handleAddToCart = () => {
        setPendingAction('CART');
        // If we already have a profile, skip modal and add directly
        if (savedFitProfile) {
            const finalProductData = {
                id: product.id?.toString() || product._id?.toString(),
                name: product.name,
                price: product.price,
                image: galleryImages[0],
                size: savedFitProfile.calculatedSize || selectedSize || 'Custom',
                color: selectedColor || undefined,
                customization: customizationData,
                fitProfile: savedFitProfile
            };
            addToCart(finalProductData);
        }
        else {
            setShowFitModal(true);
        }
    };
    const handleBuyNow = () => {
        if (!user) {
            setPendingAction('BUY_NOW'); // Queue the action
            openLogin();
            return;
        }

        const finalProductData = {
            id: product.id?.toString() || product._id?.toString(),
            name: product.name,
            price: product.price,
            image: galleryImages[0],
            size: savedFitProfile?.calculatedSize || selectedSize || 'Custom',
            color: selectedColor || undefined,
            customization: customizationData,
            fitProfile: savedFitProfile
        };

        setPendingAction('BUY_NOW');
        // If we already have a profile, skip modal and buy directly
        if (savedFitProfile) {
            // Add to cart but don't auto-open the cart sidebar, then go straight to checkout
            addToCart(finalProductData, false);
            openCheckout();
        }
        else {
            setShowFitModal(true);
        }
    };
    // MOCK DATA GENERATION (Enhancing data as per plan)
    const fabricText = "100% Premium Egyptian Cotton. Hand-harvested to ensure length and softness. Breathable weave structure tailored for tropical climates.";
    const careText = "Machine wash cold on gentle cycle. Hang dry in shade. Do not bleach. Steam iron for best finish.";
    return (
        <div className="pdp-main">
            <Header variant="pdp" backLink="/category/all" />

            {showCustomizer && (<CustomizationOverlay productType={product.category || 'Shirt'} productImage={product.image} productName={product.name} productPrice={product.price} onClose={() => setShowCustomizer(false)} onComplete={(data) => {
                setCustomizationData(data);
                setShowCustomizer(false);
                setShowFitModal(true);
                setPendingAction('CART');
            }} />)}

            {showFitModal && (<FitConfirmationModal initialData={savedFitProfile}
                onClose={() => setShowFitModal(false)} onConfirm={async (fitData) => {
                    setShowFitModal(false);

                    // 1. SAVE TO DATABASE if logged in
                    if (user) {
                        const measurements = {
                            chest: fitData.shirtSize || '40',
                            waist: '34',
                            shoulder: '18',
                            neck: '16',
                            sleeve: '25',
                            inseam: '32',
                            height: fitData.height || '',
                            shoulderType: fitData.shoulderType || '',
                            preferredFit: fitData.preferredFit || '',
                            upperBodyShape: fitData.upperBody || '',
                            lowerBodyShape: fitData.lowerBody || ''
                        };
                        await saveMeasurements(measurements);
                    }

                    // 2. SAVE TO LOCAL STORAGE (Synced with useEffect key logic)
                    const storageKey = user ? `menx_fit_profile_${user.phone}` : 'menx_fit_profile_guest';
                    localStorage.setItem(storageKey, JSON.stringify(fitData));
                    setSavedFitProfile(fitData);

                    const finalProductData = {
                        id: product.id?.toString() || product._id?.toString(),
                        name: product.name,
                        price: product.price,
                        image: galleryImages[0],
                        size: fitData.calculatedSize || fitData.shirtSize || selectedSize || 'Custom',
                        color: selectedColor || undefined,
                        customization: customizationData,
                        fitProfile: fitData
                    };

                    if (pendingAction === 'BUY_NOW') {
                        addToCart(finalProductData, false);
                        openCheckout();
                    } else if (pendingAction === 'CART') {
                        addToCart(finalProductData);
                    }
                }} />)}

            <div className="pdp-main-grid">
                {/* 2. HERO GALLERY (Single View + Thumbnails) */}
                <div className="pdp-gallery-outer" ref={heroRef}>
                    <div className="pdp-gallery-wrapper">
                        {/* Image Counter */}
                        <div className="pdp-image-counter">
                            {currentImgIndex + 1} / {galleryImages.length}
                        </div>

                        {/* Lightbox Controls (Only visible when expanded) */}
                        {isLightboxOpen && (
                            <div className="pdp-lightbox-controls-overlay">
                                <button className="lightbox-close-btn" onClick={() => setIsLightboxOpen(false)}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </button>

                                <div className="pdp-lightbox-nav-pill">
                                    <button className="nav-pill-btn" onClick={(e) => {
                                        e.stopPropagation();
                                        scrollContainerRef.current?.scrollBy({ left: -scrollContainerRef.current.clientWidth, behavior: 'smooth' });
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                                    </button>
                                    <span className="nav-pill-counter">{currentImgIndex + 1} / {galleryImages.length}</span>
                                    <button className="nav-pill-btn" onClick={(e) => {
                                        e.stopPropagation();
                                        scrollContainerRef.current?.scrollBy({ left: scrollContainerRef.current.clientWidth, behavior: 'smooth' });
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div
                            className={`pdp-main-image-slider ${isLightboxOpen ? 'pdp-image-expanded' : ''}`}
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                        >
                            {galleryImages.map((img, idx) => (
                                <div key={idx} className="pdp-slide-item">
                                    <img
                                        src={img}
                                        alt={`${product.name} view ${idx + 1}`}
                                        onClick={() => setIsLightboxOpen(!isLightboxOpen)}
                                        loading={idx === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicator Line */}
                    <div className="pdp-gallery-progress-bg">
                        <div
                            className="pdp-gallery-progress-fill"
                            style={{ width: `${((currentImgIndex + 1) / galleryImages.length) * 100}%` }}
                        />
                    </div>

                    {/* Thumbnails - Only for Desktop */}
                    <div className="pdp-thumbnails desktop-only">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`pdp-thumbnail ${currentImgIndex === idx ? 'active' : ''}`}
                                onClick={() => {
                                    scrollContainerRef.current?.scrollTo({ left: idx * scrollContainerRef.current.clientWidth, behavior: 'smooth' });
                                }}
                            >
                                <img src={img} alt={`Thumbnail ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN WRAPPER */}
                <div className="pdp-content-wrapper">

                    <div className="pdp-title-row">
                        <h1 className="serif pdp-product-name">{product.name}</h1>
                        <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`btn-favorite-pdp ${isInWishlist(product.id) ? 'active' : ''}`}
                            style={{
                                color: isInWishlist(product.id) ? '#ff4b4b' : '#fff',
                            }}
                            title={isInWishlist(product.id) ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>    <style jsx>{`
                            .btn-favorite-pdp:active {
                                transform: scale(0.8);
                            }
                            .btn-favorite-pdp.active {
                                animation: heartPulse 0.4s ease-out;
                            }
                            @keyframes heartPulse {
                                0% { transform: scale(1); }
                                50% { transform: scale(1.4); }
                                100% { transform: scale(1); }
                            }
                        `}</style>
                    <div className="pdp-brand-name">The Grey Stag</div>

                    <div className="pdp-price-final">{product.price}</div>
                    <div className="pdp-mrp-label">MRP incl. of all taxes</div>

                    <div className="pdp-trending-label desktop-only">
                        TRENDING
                    </div>

                    {/* 5. VARIANTS: COLOR & SIZE (Reference Style) */}

                    {/* Color Selector */}
                    <div className="variant-section" style={{ marginBottom: '32px' }}>
                        <div className="section-label" style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#bbb' }}>
                            <strong style={{ color: '#fff' }}>COLOR:</strong> <span style={{ color: '#fff' }}>{selectedColor}</span>
                        </div>
                        <div className="color-grid" style={{ display: 'flex', gap: '12px' }}>
                            {(contextProduct?.colors || ['Midnight Black', 'Deep Navy', 'Charcoal', 'Beige', 'White']).map((color) => {
                                const hexMap = { 'Midnight Black': '#1a1a1a', 'Deep Navy': '#1e293b', 'Charcoal': '#3f3f46', 'White': '#f0f0f0', 'Beige': '#d2b48c', 'Olive': '#556b2f' };
                                const colorName = typeof color === 'string' ? color : color.name || color;
                                const bg = hexMap[colorName] || '#000';
                                const isSelected = selectedColor === colorName;

                                return (
                                    <button
                                        key={colorName}
                                        onClick={() => setSelectedColor(colorName)}
                                        title={colorName}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: bg,
                                            border: isSelected ? '1px solid #fff' : '1px solid #333',
                                            borderRadius: '4px',
                                            outline: isSelected ? '2px solid #1a1a1a' : 'none', // Mock double border
                                            outlineOffset: isSelected ? '-3px' : '0',
                                            cursor: 'pointer',
                                            boxShadow: isSelected ? '0 0 0 1px #fff' : 'none', // Outer ring
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Shared Fit Selection Section (Always show if possible) */}
                    <div className="variant-section" style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div className="section-label" style={{ fontSize: '0.9rem', color: '#fff' }}>
                                <strong>{product.size ? 'SELECT SIZE:' : 'INDIVIDUAL FIT:'}</strong>
                            </div>

                            {/* Size Chart / Find Fit Link */}
                            <div onClick={() => setShowFitModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#d4af37', fontSize: '0.85rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                                <span style={{ textDecoration: 'underline', fontWeight: '500' }}>{savedFitProfile ? 'Edit Tailoring Fit' : 'Find Your Perfect Fit'}</span>
                            </div>
                        </div>

                        {product.size && (
                            <div className="size-grid" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {product.size.map(size => {
                                    const isSelected = selectedSize === size;
                                    return (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setSelectedSize(size);
                                                setSizeError(false);
                                            }}
                                            className={isSelected ? 'size-btn active' : 'size-btn'}
                                            style={{
                                                minWidth: '60px',
                                                height: '40px',
                                                background: isSelected ? '#fff' : 'transparent',
                                                border: isSelected ? '1px solid #fff' : '1px solid #444',
                                                borderRadius: '4px',
                                                color: isSelected ? '#000' : '#888',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        {sizeError && (<div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '8px' }}>Please select a size to continue</div>)}
                    </div>

                    {/* 7. ACTIONS (Primary CTA) */}
                    <div className="action-box sticky-mobile-cta">
                        <div className="cta-flex-group">
                            <button className="btn-secondary cta-half" onClick={handleBuyNow}>
                                Buy Now
                            </button>
                            <button className="btn-primary cta-half" onClick={handleAddToCart}>
                                Add to Bag
                            </button>
                        </div>
                    </div>

                    <div className="trust-microcopy">
                        <span>Free 15-day returns</span> • <span>Ships in 2 business days</span>
                    </div>

                    {/* 10. DETAILS ACCORDION */}
                    <div className="accordion-wrapper" style={{ marginTop: '32px' }}>
                        {[
                            { id: 'description', label: 'Description', content: contextProduct?.description || "Combined with minimal aesthetics and maximum comfort, this piece defines the new standard of luxury." },
                            { id: 'fabric', label: 'Fabric & Care', content: contextProduct?.fabric || `${fabricText} <br/> <br/> ${careText}` },
                            { id: 'shipping', label: 'Delivery & Returns', content: "Free shipping on all prepaid orders. Returns accepted within 15 days of delivery." }
                        ].map((item) => (
                            <div key={item.id} className="accordion-item">
                                <button className={`accordion-header ${openAccordion === item.id ? 'open' : ''}`} onClick={() => toggleAccordion(item.id)}>
                                    {item.label}
                                    <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                        <path d="M6 1V11M1 6H11" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`} dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 8. STICKY BUY BAR (Mobile) */}
            <div className={`sticky-buy-bar ${showBuyBar ? 'visible' : ''}`}>
                <div className="sbb-info">
                    <div className="sbb-title">{product.name}</div>
                    <div className="sbb-price">{product.price}</div>
                </div>
                <button className="sbb-btn" onClick={handleAddToCart}>
                    Add
                </button>
            </div>

            {/* 11. SUGGESTIONS SECTION (You May Also Like) */}
            <div className="pdp-suggestions">
                <h2 className="suggestions-title">You May Also Like</h2>
                <div className="suggestions-grid">
                    {(products || []).filter(p => (p.id?.toString() !== product.id?.toString() && p._id?.toString() !== product.id?.toString())).slice(0, 4).map((item) => (
                        <Link href={`/products/${item.id || item._id}`} key={item.id || item._id} className="suggestion-link">
                            <article className="suggestion-card">
                                <div className="suggestion-image-wrap">
                                    <img src={(item.images && item.images.length > 0 && item.images[0] !== "[]") ? item.images[0] : (item.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000')} alt={item.name} loading="lazy" />
                                </div>
                                <div className="suggestion-info">
                                    <h3 className="suggestion-name">{item.name}</h3>
                                    <span className="suggestion-price">₹{item.price}</span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
