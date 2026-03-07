'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // UI States
    const [showLogin, setShowLogin] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [userMenuView, setUserMenuView] = useState('home');

    const { showToast } = useToast();
    const router = useRouter();

    // Verify session on app mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const json = await api.get('/auth/me');
                if (json.success) {
                    setUser(json.data);
                }
            } catch (err) {
                console.log("No active session");
            } finally {
                setIsLoaded(true);
            }
        };
        checkAuth();
    }, []);

    const sendOTP = async (email) => {
        try {
            await api.post('/auth/send-otp', { email });
            showToast('OTP sent to your email', 'success');
            return true;
        } catch (err) {
            showToast(err.message || 'Failed to send OTP', 'error');
            return false;
        }
    };

    const verifyOTP = async (email, otp) => {
        try {
            const json = await api.post('/auth/verify-otp', { email, otp });

            if (!json.success || !json.data) {
                showToast(json.message || 'Verification failed', 'error');
                return { success: false };
            }

            const userData = json.data.user;

            // Add safety arrays
            userData.addresses = userData.addresses || [];
            userData.orders = userData.orders || [];
            userData.payments = userData.payments || [];

            setUser(userData);
            return { success: true, needsProfileUpdate: json.data.needsProfileUpdate };
        } catch (err) {
            showToast(err.message || 'Invalid OTP', 'error');
            return { success: false };
        }
    };

    const completeProfile = async (phone, name) => {
        try {
            const json = await api.post('/auth/complete-profile', { phone, name });
            setUser(json.data);
            showToast('Profile updated!', 'success');
            setShowLogin(false);
            return true;
        } catch (err) {
            showToast(err.message || 'Update failed', 'error');
            return false;
        }
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
            setUser(null);
            setShowUserMenu(false);
            showToast('Logged out successfully', 'info');

            // Dispatch custom event for other contexts to clear state
            window.dispatchEvent(new CustomEvent('auth:logout'));

            router.push('/');
        } catch (err) {
            showToast('Logout failed', 'error');
        }
    };

    // --- Address Management ---
    const addAddress = async (addressData) => {
        try {
            // Address data usually has label and detail (formatted string)
            // Backend expects structured fields. We'll try to map or adjust context.
            // For now, let's map 'detail' into 'line1' if it's a string.
            const payload = {
                label: addressData.label,
                line1: addressData.detail || addressData.address,
                city: addressData.city || 'Unknown',
                state: addressData.state || 'Unknown',
                pincode: addressData.pincode || '000000',
                isDefault: addressData.default || false
            };

            const json = await api.post('/addresses', payload);
            setUser(prev => ({
                ...prev,
                addresses: [...(prev.addresses || []), json.data]
            }));
            showToast('Address added', 'success');
            return true;
        } catch (err) {
            showToast('Failed to add address', 'error');
            return false;
        }
    };

    const removeAddress = async (id) => {
        try {
            await api.delete(`/addresses/${id}`);
            setUser(prev => ({
                ...prev,
                addresses: prev.addresses.filter(a => a.id !== id)
            }));
            showToast('Address removed', 'success');
            return true;
        } catch (err) {
            showToast('Failed to remove address', 'error');
            return false;
        }
    };

    const saveMeasurements = async (measurements) => {
        try {
            console.log('[CRM] Saving measurements...', measurements);
            const json = await api.post('/auth/measurements', measurements);
            console.log('[CRM] Save result:', json);
            setUser(json.data);
            showToast('Tailoring profile updated!', 'success');
            return true;
        } catch (err) {
            console.error('[CRM] Save failed:', err);
            showToast(err.message || 'Failed to save measurements', 'error');
            return false;
        }
    };

    // --- Placeholder/Mock for UI Completeness ---
    const addPayment = async (cardData) => {
        showToast('Payment methods are currently managed during checkout', 'info');
    };

    const deactivateAccount = async () => {
        showToast('Please contact support to deactivate your account', 'info');
    };

    const openLogin = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);
    const openUserMenu = (view = 'home') => {
        setUserMenuView(view);
        setShowUserMenu(true);
    };
    const closeUserMenu = () => setShowUserMenu(false);

    return (
        <AuthContext.Provider value={{
            user, isLoaded, sendOTP, verifyOTP, completeProfile, logout,
            addAddress, removeAddress, addPayment, deactivateAccount,
            saveMeasurements,
            showLogin, openLogin, closeLogin, showUserMenu, openUserMenu, closeUserMenu,
            userMenuView, setUserMenuView
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
