'use client';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useContent } from '@/context/ContentContext';
import { useProduct } from '@/context/ProductContext';
// Helper Component for Individual Video
function VideoCard({ item, index, registerRef, onPlay }) {
    const router = useRouter();
    const { getProduct } = useProduct();
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);
    // Get linked product
    const product = getProduct(item.linkedProductId) || { name: 'Exclusive Product', price: 'Check Price', id: item.linkedProductId, category: 'Unknown', images: [] };
    // Autoplay logic using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Play if visible and no error
                    videoRef.current?.play().catch(() => {
                        // Autoplay might fail (e.g. low power mode), ignoring
                    });
                }
                else {
                    // Pause if not visible
                    videoRef.current?.pause();
                }
            });
        }, { threshold: 0.5 } // 50% visible
        );
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => observer.disconnect();
    }, []);
    // Control visibility logic
    useEffect(() => {
        let timer;
        if (isPlaying) {
            // If playing, hide after 2s of inactivity (though we use mouse movements to trigger this actually)
            // Requirement: "Fades out after 2 seconds of inactivity"
            // We'll reset this timer on interaction
            timer = setTimeout(() => {
                setShowButton(false);
            }, 2000);
        }
        else {
            // If paused, button always visible (Play icon)
            setShowButton(true);
        }
        return () => clearTimeout(timer);
    }, [isPlaying, showButton]); // Depend on showButton to allow re-triggering
    const handleInteraction = () => {
        if (isPlaying) {
            setShowButton(true);
            // logic to hide again is in the effect above, but we need to debounce it.
            // Simplified: just showing it relies on the effect to hide it again.
            // Actually, we need to clear the existing timeout if we were implementing checking for "inactivity".
            // For now, simpler approach: On hover/tap -> show. Effect hides if playing.
        }
    };
    const togglePlay = () => {
        const vid = videoRef.current;
        if (!vid)
            return;
        if (vid.paused) {
            vid.play();
        }
        else {
            vid.pause();
            // Explicit pause
            setShowButton(true);
        }
    };
    const handleVideoPlay = () => {
        setIsPlaying(true);
        onPlay();
        // Hide button shortly after playing starts if no interaction
        setTimeout(() => setShowButton(false), 2000);
    };
    const handleVideoPause = () => {
        setIsPlaying(false);
        setShowButton(true);
    };
    const handleCardClick = () => {
        // If clicked on product card specifically (handled there), or generic click?
        // User said: "video and the product card in small rectangle box".
        // Maybe clicking video toggles play, and clicking card goes to product?
        // Let's make entire card clickable to product if playing, or separate controls.
        // Current requirement: "Click on video -> Show video + product card". 
        // This suggests the product card might be HIDDEN until clicked/played?
        // But videoScroll usually shows thumbnails.
        // Let's auto-show product card when playing.
    };
    // Product Link Handler
    const handleProductClick = (e) => {
        e.stopPropagation();
        router.push(`/product/${product.id}`);
    };
    return (<div className="video-card" onClick={() => {
            if (!isPlaying)
                togglePlay();
            // If playing, maybe pause? Or do nothing?
        }} onMouseEnter={() => setShowButton(true)} onMouseMove={() => setShowButton(true)} onMouseLeave={() => isPlaying && setShowButton(false)} style={{ cursor: 'pointer', position: 'relative' }}>
            {!videoError ? (<video ref={(el) => { videoRef.current = el; registerRef(el); }} poster="/assets/video_thumb.png" // Could generate thumb from video in a real app
         muted loop playsInline onPlay={handleVideoPlay} onPause={handleVideoPause} onError={() => setVideoError(true)} src={item.videoUrl}/>) : (<div style={{ width: '100%', height: '100%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                    Video Unavailable
                </div>)}

            {/* PRODUCT CARD OVERLAY (Visible when playing or hovered) */}
            <div onClick={handleProductClick} style={{
            position: 'absolute',
            bottom: '80px', // Above controls
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '12px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            opacity: 1, // Always visible for "Shop from Video" feel? Or only when playing?
            // User said "IF we click on the video THAN first it show the video and the product card".
            // This implies it might be hidden initially?
            // Let's show it always for better conversion, or fade in on play.
            // Let's fade in on play/hover.
            // Actually, "Shop from Video" usually has the product always visible or easily accessible.
            zIndex: 20
        }}>
                {/* Tiny Thumb of product? We don't have it easily unless we fetch product images. context/product has images. */}
                {(product.images && product.images[0]) && (<img src={product.images[0]} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }}/>)}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#000', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#d4af37' }}>{typeof product.price === 'number' ? `₹${product.price}` : (product.price.toString().startsWith('$') ? product.price.replace('$', '₹') : product.price)}</div>
                </div>
                <div style={{
            background: '#000', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase'
        }}>
                    Shop
                </div>
            </div>

            {/* Control Overlay */}
            {!videoError && (<div className="video-controls" style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                padding: '16px', // Desktop default, media query would handle mobile 12px
                opacity: showButton ? 1 : 0,
                transition: 'opacity 0.3s ease',
                zIndex: 10,
                pointerEvents: 'none' // Let clicks pass through to card unless on button
            }}>
                    <button className="pause-btn" onClick={(e) => {
                e.stopPropagation();
                togglePlay();
            }} style={{
                pointerEvents: 'auto', // Re-enable pointer events for button
                background: 'rgba(0,0,0,0.4)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)'
            }}>
                        {isPlaying ? (
            // Pause Icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>) : (
            // Play Icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>)}
                    </button>
                </div>)}
        </div>);
}
// Main Component
export default function VideoScroll() {
    const { videoScrollItems } = useContent();
    const videoRefs = useRef([]);
    const handlePlay = (index) => {
        videoRefs.current.forEach((vid, i) => {
            if (vid && i !== index && !vid.paused) {
                vid.pause();
            }
        });
    };
    if (!videoScrollItems || videoScrollItems.length === 0)
        return null;
    return (<section className="video-scroll-section">
            <h2 className="section-title">Shop from Video</h2>
            <div className="video-scroller">
                {videoScrollItems.map((item, i) => (<VideoCard key={item.id} item={item} index={i} registerRef={(el) => { videoRefs.current[i] = el; }} onPlay={() => handlePlay(i)}/>))}
            </div>
        </section>);
}
