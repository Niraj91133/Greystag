'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useAuth } from './AuthContext';
import { useToast } from './ToastContext';

const WishlistContext = createContext(undefined);

export function WishlistProvider({ children }) {
    const { user, openLogin } = useAuth();
    const { showToast } = useToast();
    const [wishlist, setWishlist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const openWishlist = () => setIsOpen(true);
    const closeWishlist = () => setIsOpen(false);

    const fetchWishlist = async () => {
        try {
            const json = await api.get('/wishlist');
            setWishlist(json.data || []);
        } catch (error) {
            console.error('Failed to fetch wishlist:', error);
        } finally {
            setIsLoaded(true);
        }
    };

    useEffect(() => {
        if (user) {
            fetchWishlist();
        } else {
            setWishlist([]);
            setIsLoaded(true);
        }
    }, [user]);

    const toggleWishlist = async (productId) => {
        if (!user) {
            openLogin();
            return false;
        }

        try {
            const json = await api.post(`/wishlist/toggle`, { productId });
            const newList = json.data || [];

            // If the item was added (list length increased or length same but content changed)
            // Or specifically if it's now in the list
            const isNowIn = newList.some(item => (item.productId === productId || item.product?.id === productId));

            if (isNowIn) {
                openWishlist();
            }

            setWishlist(newList);
            showToast(isNowIn ? 'Added to favorites' : 'Removed from favorites', 'success');
            return true;
        } catch (error) {
            console.error('Failed to toggle wishlist:', error);
            showToast('Failed to update favorites', 'error');
            return false;
        }
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => (item.productId === productId || item.product?.id === productId));
    };

    return (
        <WishlistContext.Provider value={{
            wishlist, toggleWishlist, isInWishlist, isLoaded,
            isOpen, openWishlist, closeWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
