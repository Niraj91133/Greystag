'use client';
import React from 'react';
import { useContent } from '@/context/ContentContext';
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function PLPBannerEditor() {
    const { plpBanners, updatePlpBanner } = useContent();
    const { showToast } = useToast();

    // Map the banner keys to human-readable labels
    const bannerLabels = {
        all: 'All Collections',
        shirt: 'Shirts',
        polo: 'Polo Shirts',
        jackets: 'Jackets',
        pants: 'Pants & Trousers',
        meetings: 'Meetings Occasion',
        events: 'Events Occasion',
        students: 'Students Occasion',
        office: 'Office Occasion'
    };

    return (
        <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginTop: '32px'
        }}>
            <h3 style={{ color: '#C2A46D', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>PLP Hero Banners</h3>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginBottom: '24px' }}>
                Upload unique hero images for each category and special collection.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
            }}>
                {Object.entries(plpBanners).map(([key, url]) => (
                    <div key={key} style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '12px', textTransform: 'capitalize' }}>
                            {bannerLabels[key] || key}
                        </h4>

                        <div style={{
                            width: '100%',
                            height: '120px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            marginBottom: '16px',
                            background: '#1a1a1a'
                        }}>
                            <img
                                src={url}
                                alt={key}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <MediaUploader
                            label={`Upload ${key} banner`}
                            value={url}
                            onChange={(newUrl) => {
                                updatePlpBanner(key, newUrl);
                                showToast(`${key} banner updated`, 'success');
                            }}
                            folder="plp-banners"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
