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
    const [isViewerOpen, setIsViewerOpen] = useState(false);

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

    // Viewer Navigation
    const nextImage = (e) => {
        e.stopPropagation();
        setActiveImage((prev) => (prev + 1) % galleryImages.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        <div className="pdp-main" style={{ overflowX: 'hidden' }}>
            <Header variant="pdp" backLink="/category/all" />

            {/* FULL SCREEN VIEWER */}
            {isViewerOpen && (
                <div
                    className="pdp-viewer-overlay"
                    onClick={() => setIsViewerOpen(false)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: '#000', zIndex: 3000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    <img
                        src={galleryImages[activeImage]}
                        alt="Product fullscreen"
                        style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
                    />

                    {/* Controls at Bottom Center */}
                    <div
                        style={{
                            position: 'absolute', bottom: '40px', left: '50%',
                            transform: 'translateX(-50%)', display: 'flex', gap: '32px',
                            background: 'rgba(255,255,255,0.05)', padding: '12px 32px',
                            borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <button onClick={prevImage} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button onClick={() => setIsViewerOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <button onClick={nextImage} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

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
                    <div className="pdp-main-image" onClick={() => setIsViewerOpen(true)} style={{ cursor: 'zoom-in' }}>
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

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px', flexWrap: 'nowrap' }}>
                        <h1 className="pdp-title-luxury" style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'calc(1.4rem + 0.6vw)',
                            lineHeight: '1.2',
                            color: '#fff',
                            margin: 0,
                            letterSpacing: '0.01em'
                        }}>{product.name}</h1>
                        <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`btn-favorite-pdp ${isInWishlist(product.id) ? 'active' : ''}`}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: isInWishlist(product.id) ? '#ff4b4b' : '#555',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '4px',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                transform: 'translateY(2px)'
                            }}
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill={isInWishlist(product.id) ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>The Grey Stag</div>

                    <div className="pdp-price-final" style={{ fontSize: '1.4rem', fontWeight: '400', color: '#fff', marginBottom: '4px' }}>{product.price}</div>
                    <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '32px' }}>MRP incl. of all taxes</div>

                    {/* Color Selector */}
                    <div className="variant-section" style={{ marginBottom: '32px' }}>
                        <div className="section-label" style={{ marginBottom: '12px', fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em' }}>
                            <strong style={{ color: '#fff' }}>COLOR:</strong> <span style={{ color: '#fff', fontWeight: '300' }}>{selectedColor}</span>
                        </div>
                        <div className="color-grid" style={{ display: 'flex', gap: '10px' }}>
                            {(contextProduct?.colors || ['Midnight Black', 'Deep Navy', 'Charcoal', 'Beige', 'White']).map((color) => {
                                const hexMap = { 'Midnight Black': '#1a1a1a', 'Deep Navy': '#1e293b', 'Charcoal': '#3f3f46', 'White': '#f0f0f0', 'Beige': '#d2b48c', 'Olive': '#556b2f' };
                                const colorName = typeof color === 'string' ? color : color.name || color;
                                const bg = hexMap[colorName] || '#000';
                                const isSelected = selectedColor === colorName;

                                return (
                                    <button
                                        key={colorName}
                                        onClick={() => setSelectedColor(colorName)}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            backgroundColor: bg,
                                            border: isSelected ? '1px solid #fff' : '1px solid #333',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            padding: isSelected ? '2px' : '0',
                                            transition: 'all 0.2s ease',
                                            transform: isSelected ? 'scale(1.1)' : 'none'
                                        }}
                                    >
                                        {isSelected && <div style={{ width: '100%', height: '100%', border: '1px solid #000', borderRadius: '2px' }} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Size Selection Section */}
                    <div className="variant-section" style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div className="section-label" style={{ fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em' }}>
                                <strong style={{ color: '#fff' }}>SELECT SIZE:</strong>
                            </div>

                            <div onClick={() => setShowFitModal(true)} style={{ color: '#d4af37', fontSize: '0.75rem', letterSpacing: '0.05em', cursor: 'pointer', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '2px' }}>
                                {savedFitProfile ? 'EDIT FIT PROFILE' : 'FIND YOUR SIZE'}
                            </div>
                        </div>

                        {product.size && (
                            <div className="size-grid" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {product.size.map(size => {
                                    const isSelected = selectedSize === size;
                                    return (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setSelectedSize(size);
                                                setSizeError(false);
                                            }}
                                            style={{
                                                minWidth: '54px',
                                                height: '42px',
                                                background: isSelected ? '#fff' : 'transparent',
                                                border: isSelected ? '1px solid #fff' : '1px solid #333',
                                                borderRadius: '4px',
                                                color: isSelected ? '#000' : '#888',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem',
                                                fontWeight: isSelected ? '600' : '400',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        {sizeError && (<div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '12px' }}>Please select a size to continue</div>)}
                    </div>

                    {/* ACTIONS */}
                    <div className="action-box" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                        <button className="btn-primary" onClick={handleAddToCart} style={{
                            height: '54px',
                            background: '#f4f2ee',
                            color: '#0f0f0f',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Add to Bag
                        </button>
                        <button onClick={handleBuyNow} style={{
                            height: '54px',
                            background: 'transparent',
                            color: '#d4af37',
                            border: '1px solid #d4af37',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}>
                            Buy it Now
                        </button>
                    </div>

                    <div className="trust-microcopy" style={{ color: '#555', marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
                        <span>Free 15-day returns</span> • <span>Ships in 2 business days</span>
                    </div>

                    {/* DETAILS ACCORDION */}
                    <div className="accordion-wrapper" style={{ marginTop: '40px' }}>
                        {[
                            { id: 'description', label: 'Description', content: contextProduct?.description || "Combined with minimal aesthetics and maximum comfort, this piece defines the new standard of luxury." },
                            { id: 'fabric', label: 'Fabric & Care', content: contextProduct?.fabric || `${fabricText} <br/> <br/> ${careText}` },
                            { id: 'shipping', label: 'Delivery & Returns', content: "Free shipping on all prepaid orders. Returns accepted within 15 days of delivery." }
                        ].map((item) => (<div key={item.id} className="accordion-item">
                            <button className={`accordion-header ${openAccordion === item.id ? 'open' : ''}`} onClick={() => toggleAccordion(item.id)} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: '500' }}>{item.label}</span>
                                <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                    <path d="M6 1V11M1 6H11" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                            </button>
                            <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`} style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#aaa' }} dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>))}
                    </div>
                </div>

            </div>

            {/* STICKY BUY BAR */}
            <div className={`sticky-buy-bar ${showBuyBar ? 'visible' : ''}`} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: '#000' }}>
                <div className="sbb-info">
                    <div className="sbb-title" style={{ fontSize: '0.85rem', fontWeight: '500' }}>{product.name}</div>
                    <div className="sbb-price" style={{ fontSize: '0.75rem' }}>{product.price}</div>
                </div>
                <button className="sbb-btn" onClick={handleAddToCart} style={{ background: '#f4f2ee', color: '#000', fontWeight: '600' }}>
                    Add
                </button>
            </div>

            {/* SUGGESTIONS SECTION */}
            <div className="pdp-suggestions" style={{ background: '#050505' }}>
                <h2 className="suggestions-title" style={{ fontSize: '1.8rem', textAlign: 'center' }}>Tailored For You</h2>
                <div className="suggestions-grid">
                    {(products || []).filter(p => (p.id?.toString() !== product.id?.toString() && p._id?.toString() !== product.id?.toString())).slice(0, 4).map((item) => (
                        <Link href={`/products/${item.id || item._id}`} key={item.id || item._id} className="suggestion-link">
                            <article className="suggestion-card">
                                <div className="suggestion-image-wrap">
                                    <img src={(item.images && item.images.length > 0 && item.images[0] !== "[]") ? item.images[0] : (item.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000')} alt={item.name} loading="lazy" />
                                </div>
                                <div className="suggestion-info" style={{ textAlign: 'center', marginTop: '12px' }}>
                                    <h3 className="suggestion-name" style={{ fontSize: '0.9rem' }}>{item.name}</h3>
                                    <span className="suggestion-price" style={{ color: '#d4af37' }}>₹{item.price}</span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .btn-favorite-pdp:active {
                    transform: scale(0.8);
                }
                .btn-favorite-pdp.active {
                    animation: heartPulse 0.4s ease-out;
                }
                @keyframes heartPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div >);
}
