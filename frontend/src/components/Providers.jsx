'use client';
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/context/ToastContext';
import { ContentProvider } from '@/context/ContentContext';
import { ProductProvider } from '@/context/ProductContext';
import { WishlistProvider } from '@/context/WishlistContext';
import CartDrawer from './Cart/CartSidebar';
import CheckoutDrawer from './Checkout/CheckoutSidebar';
import LoginDrawer from './Authentication/LoginModal';
import UserDrawer from './Authentication/UserSidebar';
import WishlistDrawer from './Layout/WishlistSidebar';
export default function Providers({ children }) {
    return (<ToastProvider>
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    <ContentProvider>
                        <ProductProvider>
                            {children}
                            <CartDrawer />
                            <CheckoutDrawer />
                            <LoginDrawer />
                            <UserDrawer />
                            <WishlistDrawer />
                        </ProductProvider>
                    </ContentProvider>
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    </ToastProvider>);
}
