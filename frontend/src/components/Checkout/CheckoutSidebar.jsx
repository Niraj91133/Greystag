'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import * as gtag from '@/lib/gtag';
import { useRouter } from 'next/navigation';

export default function CheckoutDrawer() {
    const router = useRouter();
    const { isCheckoutOpen, closeCheckout, cartItems, cartTotal, clearCart } = useCart();
    const { showToast } = useToast();
    const { user, addAddress, openUserMenu } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [savedAddressId, setSavedAddressId] = useState('');

    useEffect(() => {
        if (user && isCheckoutOpen) {
            setFormData(prev => ({
                ...prev,
                name: prev.name || user.name || '',
                phone: prev.phone || user.phone || ''
            }));

            // Auto-select default address if available and no address is currently selected
            if (!savedAddressId) {
                const defaultAddr = user.addresses?.find(a => a.isDefault);
                if (defaultAddr) {
                    setSavedAddressId(defaultAddr.id || defaultAddr._id);
                    setFormData(prev => ({
                        ...prev,
                        address: defaultAddr.line1 || defaultAddr.detail || '',
                        city: defaultAddr.city || '',
                        state: defaultAddr.state || '',
                        pincode: defaultAddr.pincode || ''
                    }));
                }
            }
        }
    }, [user, isCheckoutOpen]);

    const validateForm = () => {
        const newErrors = {};

        // Sanitize phone for validation (strip non-digits)
        const cleanPhone = formData.phone.replace(/\D/g, '');

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (cleanPhone.length < 10) newErrors.phone = 'Enter valid 10-digit number';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = '6-digit pincode required';
        if (!formData.city.trim()) newErrors.city = 'City required';
        if (!formData.state.trim()) newErrors.state = 'State required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSaveAddress = async () => {
        if (!validateForm()) {
            showToast('Please fill all details to save', 'error');
            return;
        }
        const label = `${formData.city} Address`;
        const detail = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
        await addAddress({
            label,
            detail,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            default: false
        });
    };

    const handleSelectAddress = (e) => {
        const addrId = e.target.value;
        setSavedAddressId(addrId);

        if (!addrId) {
            // "New Address" selected - clear form
            setFormData(prev => ({
                ...prev,
                address: '',
                pincode: '',
                city: '',
                state: ''
            }));
            return;
        }

        if (user) {
            const selected = user.addresses.find(a => a.id === addrId || a._id === addrId);
            if (selected) {
                setFormData(prev => ({
                    ...prev,
                    address: selected.line1 || selected.detail || '',
                    city: selected.city || '',
                    state: selected.state || '',
                    pincode: selected.pincode || ''
                }));
                setErrors({}); // Clear errors when a valid address is selected
            }
        }
    };

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            showToast('Please fix errors in the form', 'error');
            return;
        }

        setIsLoading(true);

        try {
            const isRPayLoaded = await loadRazorpay();
            if (!isRPayLoaded) {
                showToast('Failed to load payment gateway', 'error');
                setIsLoading(false);
                return;
            }

            const orderItems = cartItems.map(item => ({
                productId: item.id || item._id,
                quantity: item.quantity,
                size: item.size,
                color: item.color,
                customization: item.customization
            }));

            const orderJson = await api.post('/orders', {
                items: orderItems,
                shippingAddressId: savedAddressId || null
            });

            const paymentJson = await api.post('/payments/create-order', {
                orderId: orderJson.data.id || orderJson.data._id
            });

            const options = {
                key: paymentJson.data.key,
                amount: paymentJson.data.amount,
                currency: paymentJson.data.currency,
                name: "The Grey Stag",
                description: `Order #${orderJson.data.id.substring(0, 8)}`,
                image: "/assets/logo.png", // Replace with actual logo URL
                order_id: paymentJson.data.id,
                prefill: {
                    name: formData.name,
                    contact: formData.phone,
                    email: user?.email || ""
                },
                handler: async function (response) {
                    setIsLoading(true);
                    try {
                        const verifyJson = await api.post('/payments/verify-payment', {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            orderId: orderJson.data.id || orderJson.data._id
                        });

                        if (verifyJson.success) {
                            gtag.purchase({
                                id: orderJson.data.id,
                                total: orderJson.data.total,
                                orderItems: orderItems
                            });
                            clearCart();
                            showToast('Order Placed Successfully!', 'success');
                            closeCheckout();
                            openUserMenu('orders');
                        }
                    } catch (err) {
                        showToast('Payment verification failed', 'error');
                    } finally {
                        setIsLoading(false);
                    }
                },
                modal: {
                    ondismiss: () => setIsLoading(false)
                },
                theme: { color: "#d4af37" }
            };


            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            showToast(error.message || 'Payment failed', 'error');
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        closeCheckout();
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', address: '', pincode: '', city: '', state: '' });
        }, 500);
    };

    const inputStyle = (hasError) => ({
        width: '100%',
        padding: '12px 16px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: `1px solid ${hasError ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '4px',
        color: '#fff',
        fontSize: '0.95rem',
        outline: 'none',
        marginBottom: hasError ? '4px' : '16px'
    });

    if (!isCheckoutOpen) return null;

    return (
        <>
            <div onClick={handleClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1001 }} />
            <div style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '500px',
                backgroundColor: '#0f0f0f', zIndex: 1002, display: 'flex', flexDirection: 'column',
                borderLeft: '1px solid rgba(255,255,255,0.1)', color: '#f4f2ee'
            }}>
                <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{isSuccess ? 'Confirmed' : 'Checkout'}</h2>
                    <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {isSuccess ? (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '20px' }}>✓</div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Thank You</h2>
                            <p>Your order has been placed.</p>
                            <button onClick={handleClose} className="btn-primary" style={{ marginTop: '30px' }}>Continue</button>
                        </div>
                    ) : (
                        <>
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7 }}>Shipping</h3>
                                    {user?.addresses?.length > 0 && (
                                        <select
                                            value={savedAddressId}
                                            onChange={handleSelectAddress}
                                            style={{ background: '#222', color: '#d4af37', border: '1px solid #333', borderRadius: '4px', fontSize: '0.8rem', padding: '4px 8px' }}
                                        >
                                            <option value="">+ Use a New Address</option>
                                            {user.addresses.map(a => <option key={a.id || a._id} value={a.id || a._id}>Deliver to: {a.label}</option>)}
                                        </select>
                                    )}
                                </div>
                                <input placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle(!!errors.name)} />
                                {errors.name && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.name}</div>}

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{ flex: 1 }}>
                                        <input placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle(!!errors.phone)} />
                                        {errors.phone && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.phone}</div>}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <input placeholder="Pincode" value={formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })} style={inputStyle(!!errors.pincode)} />
                                        {errors.pincode && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.pincode}</div>}
                                    </div>
                                </div>

                                <textarea placeholder="Address" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} rows={3} style={{ ...inputStyle(!!errors.address), height: 'auto' }} />
                                {errors.address && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.address}</div>}

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{ flex: 1 }}>
                                        <input placeholder="City" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} style={inputStyle(!!errors.city)} />
                                        {errors.city && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.city}</div>}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <input placeholder="State" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} style={inputStyle(!!errors.state)} />
                                        {errors.state && <div style={{ color: '#ef4444', fontSize: '0.7rem', marginBottom: '8px', marginTop: '-12px' }}>{errors.state}</div>}
                                    </div>
                                </div>
                                {user && <button onClick={handleSaveAddress} style={{ background: 'none', border: '1px solid #d4af37', color: '#d4af37', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>Save Address</button>}
                            </div>

                            <div style={{ borderTop: '1px solid #222', paddingTop: '20px' }}>
                                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7, marginBottom: '15px' }}>Summary</h3>
                                {cartItems.map(item => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                                        <span>{item.quantity}x {item.name}</span>
                                        <span>₹{item.price}</span>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', color: '#d4af37', fontWeight: 'bold' }}>
                                    <span>Total</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {!isSuccess && (
                    <div style={{ padding: '24px', borderTop: '1px solid #222' }}>
                        <button onClick={handlePlaceOrder} disabled={isLoading} style={{
                            width: '100%', padding: '16px', backgroundColor: '#d4af37', color: '#000', border: 'none',
                            fontWeight: 'bold', textTransform: 'uppercase', cursor: isLoading ? 'not-allowed' : 'pointer'
                        }}>
                            {isLoading ? 'Processing...' : `Pay ₹${cartTotal.toFixed(2)}`}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
