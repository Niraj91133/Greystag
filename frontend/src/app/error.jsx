'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Captured by Global Error Boundary:', error);
    }, [error]);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'sans-serif',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#d4af37' }}>Something went wrong</h2>
            <p style={{ maxWidth: '500px', marginBottom: '2rem', opacity: 0.8 }}>
                We encountered an unexpected error. Please try refreshing or return home.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
                <button
                    onClick={() => reset()}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#d4af37',
                        color: '#000',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Try Again
                </button>
                <a
                    href="/"
                    style={{
                        padding: '12px 24px',
                        border: '1px solid #d4af37',
                        color: '#d4af37',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}
