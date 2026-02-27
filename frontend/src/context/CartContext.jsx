'use client';
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import * as gtag from '@/lib/gtag';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('menx_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            }
            catch (error) {
                console.error('Failed to parse cart from localStorage:', error);
            }
        }
    }, []);
    // Save to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('menx_cart', JSON.stringify(cartItems));
    }, [cartItems]);
    // Listen for Logout to clear cart
    useEffect(() => {
        const handleLogout = () => {
            setCartItems([]);
            localStorage.removeItem('menx_cart');
        };
        window.addEventListener('auth:logout', handleLogout);
        return () => window.removeEventListener('auth:logout', handleLogout);
    }, []);
    const openCart = () => {
        setIsCheckoutOpen(false);
        setIsOpen(true);
    };
    const closeCart = () => setIsOpen(false);
    const openCheckout = () => {
        setIsOpen(false);
        setIsCheckoutOpen(true);
    };
    const closeCheckout = () => setIsCheckoutOpen(false);
    const addToCart = (newItem, autoOpenCart = true, skipIfExists = false) => {
        const normalizedItem = {
            ...newItem,
            id: newItem.id || newItem._id // Normalize ID
        };

        // GA Tracking
        gtag.addToCart({
            id: normalizedItem.id,
            name: normalizedItem.name,
            price: typeof normalizedItem.price === 'string'
                ? parseFloat(normalizedItem.price.replace(/[^0-9.]/g, ''))
                : normalizedItem.price
        });

        setCartItems(prev => {
            const existingIndex = prev.findIndex(item =>
                (item.id === normalizedItem.id || item._id === normalizedItem.id) &&
                item.size === normalizedItem.size &&
                item.color === normalizedItem.color);
            if (existingIndex > -1) {
                if (skipIfExists) return prev;
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + 1
                };
                return updated;
            } else {
                return [...prev, { ...normalizedItem, quantity: 1 }];
            }
        });
        if (autoOpenCart) openCart();
    };
    const removeFromCart = (itemId, size, color) => {
        setCartItems(prev => prev.filter(item => !((item.id === itemId || item._id === itemId) && item.size === size && item.color === color)));
    };
    const updateQuantity = (itemId, size, color, delta) => {
        setCartItems(prev => {
            return prev.map(item => {
                if ((item.id === itemId || item._id === itemId) && item.size === size && item.color === color) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            });
        });
    };
    const clearCart = () => {
        setCartItems([]);
    };
    const cartCount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);
    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            if (!item.price)
                return total;
            // Handle if price is already a number
            if (typeof item.price === 'number') {
                return total + (item.price * item.quantity);
            }
            // Basic parsing: remove non-numeric except dot for valid strings
            const priceString = String(item.price);
            const priceValue = parseFloat(priceString.replace(/[^0-9.]/g, '')) || 0;
            return total + (priceValue * item.quantity);
        }, 0);
    }, [cartItems]);
    return (<CartContext.Provider value={{
        isOpen,
        isCheckoutOpen,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartItems,
        cartTotal
    }}>
        {children}
    </CartContext.Provider>);
}
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
