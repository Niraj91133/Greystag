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
    // REFS
    const heroRef = useRef(null);
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
                <div className="pdp-gallery-container" ref={heroRef}>
                    <div className="pdp-main-image">
                        <img src={galleryImages[activeImage]} alt={`${product.name} view ${activeImage + 1}`} />
                    </div>

                    {/* Thumbnails */}
                    <div className="pdp-thumbnails">
                        {galleryImages.map((img, idx) => (<div key={idx} className={`pdp-thumbnail ${activeImage === idx ? 'active' : ''}`} onClick={() => setActiveImage(idx)}>
                            <img src={img} alt={`Thumbnail ${idx + 1}`} />
                        </div>))}
                    </div>
                </div>

                {/* RIGHT COLUMN WRAPPER */}
                <div className="pdp-content-wrapper">

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <h1 className="serif" style={{ fontSize: '2.5rem', lineHeight: '1.1', color: '#fff', margin: 0, flex: 1 }}>{product.name}</h1>
                        <button
                            onClick={() => toggleWishlist(product.id)}
                            className="btn-icon"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: isInWishlist(product.id) ? '#d4af37' : '#fff',
                                cursor: 'pointer',
                                padding: '4px',
                                transition: 'all 0.3s ease'
                            }}
                            title={isInWishlist(product.id) ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                                <rect x="7" y="9" width="10" height="11" rx="2" strokeLinejoin="round" />
                                <rect x="10" y="4" width="4" height="5" rx="1" strokeLinejoin="round" />
                                <circle cx="12" cy="14" r="1.5" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ fontSize: '1rem', color: '#ccc', marginBottom: '16px', letterSpacing: '0.05em' }}>The Grey Stag</div>

                    <div className="pdp-price-final" style={{ fontSize: '1.5rem', fontWeight: '400', color: '#fff', marginBottom: '4px' }}>{product.price}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '24px' }}>MRP incl. of all taxes</div>

                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#fff', marginBottom: '32px', textTransform: 'uppercase' }}>
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
                    <div className="action-box">
                        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                            <button className="btn-primary" onClick={handleAddToCart} style={{
                                flex: 1,
                                height: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                letterSpacing: '0.05em',
                                borderRadius: '0'
                            }}>
                                Add to Bag
                            </button>
                            <button className="btn-secondary" onClick={handleBuyNow} style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                border: '1px solid #d4af37',
                                color: '#d4af37',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                height: '50px',
                                borderRadius: '0'
                            }}>
                                Buy it Now
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
                        ].map((item) => (<div key={item.id} className="accordion-item">
                            <button className={`accordion-header ${openAccordion === item.id ? 'open' : ''}`} onClick={() => toggleAccordion(item.id)}>
                                {item.label}
                                <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                    <path d="M6 1V11M1 6H11" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`} dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>))}
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

        </div >);
}
