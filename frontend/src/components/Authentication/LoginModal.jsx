'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

export default function LoginDrawer() {
    const { showLogin, closeLogin, sendOTP, verifyOTP, completeProfile } = useAuth();
    const { showToast } = useToast();

    const [step, setStep] = useState('email'); // email, otp, profile
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // Reset state when modal opens
    React.useEffect(() => {
        if (showLogin) {
            setStep('email');
            setEmail('');
            setOtp('');
            setPhone('');
            setName('');
        }
    }, [showLogin]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            showToast('Enter a valid email', 'error');
            return;
        }
        setLoading(true);
        const success = await sendOTP(email);
        setLoading(false);
        if (success) setStep('otp');
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            showToast('Enter 6-digit OTP', 'error');
            return;
        }
        setLoading(true);
        const result = await verifyOTP(email, otp);
        setLoading(false);

        if (result.success) {
            if (result.needsProfileUpdate) {
                setStep('profile');
            } else {
                closeLogin();
            }
        }
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        if (phone.length < 10 || !name) {
            showToast('Please fill all details correctly', 'error');
            return;
        }
        setLoading(true);
        const success = await completeProfile(phone, name);
        setLoading(false);
        if (success) closeLogin();
    };

    const handleClose = () => {
        closeLogin();
        setTimeout(() => {
            setStep('email');
            setEmail('');
            setOtp('');
            setPhone('');
            setName('');
        }, 400);
    };

    return (
        <>
            <div onClick={handleClose} style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                zIndex: 9998, opacity: showLogin ? 1 : 0,
                pointerEvents: showLogin ? 'auto' : 'none', transition: 'opacity 0.3s'
            }} />

            <div style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%',
                maxWidth: '400px', backgroundColor: '#0f0f0f', zIndex: 9999,
                transform: showLogin ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', color: '#f4f2ee', margin: 0 }}>
                        {step === 'email' ? 'Welcome' : step === 'otp' ? 'Verify' : 'Setup Profile'}
                    </h2>
                    <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
                </div>

                <div style={{ padding: '32px 24px' }}>
                    {step === 'email' && (
                        <form onSubmit={handleEmailSubmit}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Enter your email to receive a login code.</p>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" style={inputStyle} required />
                            <button type="submit" disabled={loading} style={btnStyle}>
                                {loading ? 'Sending...' : 'Get OTP'}
                            </button>
                        </form>
                    )}

                    {step === 'otp' && (
                        <form onSubmit={handleOtpSubmit}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Code sent to {email}</p>
                            <input type="text" maxLength={6} value={otp} onChange={e => setOtp(e.target.value)} placeholder="000000" style={{ ...inputStyle, textAlign: 'center', letterSpacing: '8px', fontSize: '1.5rem' }} required />
                            <button type="submit" disabled={loading} style={btnStyle}>
                                {loading ? 'Verifying...' : 'Verify & Continue'}
                            </button>
                            <button type="button" onClick={() => setStep('email')} style={{
                                width: '100%', marginTop: '16px', background: 'none', border: 'none',
                                color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', cursor: 'pointer',
                                textDecoration: 'underline'
                            }}>
                                ← Change Email
                            </button>
                        </form>
                    )}

                    {step === 'profile' && (
                        <form onSubmit={handleProfileSubmit}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Complete your luxury profile.</p>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" style={inputStyle} required />
                            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" style={inputStyle} required />
                            <button type="submit" disabled={loading} style={btnStyle}>
                                {loading ? 'Saving...' : 'Complete Setup'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

const inputStyle = {
    width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', color: '#fff', marginBottom: '20px', outline: 'none'
};

const btnStyle = {
    width: '100%', padding: '16px', background: '#f4f2ee', color: '#0f0f0f',
    border: 'none', fontWeight: '600', cursor: 'pointer', textTransform: 'uppercase'
};
