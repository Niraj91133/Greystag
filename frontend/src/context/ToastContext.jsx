'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
const ToastContext = createContext(undefined);
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const showToast = useCallback((message, type = 'success') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    }, []);
    return (<ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container */}
            <div style={{
            position: 'fixed',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            // Responsive positioning (Bottom on mobile, Top-Right on desktop)
            right: '24px',
            // Default to top-right (desktop) - Media query injected via style tag or inline conditional check
            // For simplicity, I'll use a simple approach: Fixed Bottom-Center for Mobile, Top-Right for Desktop
            // Or just Bottom-Center universally for "calm" feedack? 
            // User asked: "Bottom (mobile) / Top-right (desktop)"
            // I'll stick to bottom-center generally or use a media query class.
            // Using inline styles for simplicity with media query is tricky.
            // I'll assume mobile-first bottom logic or just check window width? No, SSR issues.
            // I'll use CSS classes if possible, but user asked for Vanilla CSS.
            // Let's create a small internal style or just accept Bottom-Center as it's safe and visible.
            // Re-reading: "Position: Bottom (mobile), Top-right (desktop)"
            // I'll use a style block to handle this.
        }} className="toast-container">
                <style dangerouslySetInnerHTML={{
            __html: `
                    .toast-container {
                        bottom: 24px;
                        left: 50%;
                        transform: translateX(-50%);
                        align-items: center;
                    }
                    @media (min-width: 768px) {
                        .toast-container {
                            top: 24px;
                            bottom: auto;
                            left: auto;
                            right: 24px;
                            transform: none;
                            align-items: flex-end;
                        }
                    }
                    .toast-enter {
                        animation: slideIn 0.3s ease-out forwards;
                    }
                    @keyframes slideIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `
        }}/>

                {toasts.map(toast => (<div key={toast.id} className="toast-enter" style={{
                backgroundColor: toast.type === 'error' ? '#ef4444' : '#1a1a1a',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.5px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}>
                        {toast.type === 'success' && <span style={{ color: '#d4af37' }}>✓</span>}
                        {toast.type === 'error' && <span>!</span>}
                        {toast.message}
                    </div>))}
            </div>
        </ToastContext.Provider>);
}
export function useToast() {
    const context = useContext(ToastContext);
    if (!context)
        throw new Error('useToast must be used within ToastProvider');
    return context;
}
