'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { uploadFile } from '@/utils/supabase';
import { useToast } from '@/context/ToastContext';

export default function AdminHeroEditor() {
    const { hero, updateHero } = useContent();
    const { showToast } = useToast();
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        showToast("Uploading media...", "info");

        try {
            const url = await uploadFile(file, "hero-section");

            if (url) {
                // Determine media type
                const mediaType = file.type.startsWith('video/') ? 'video' : 'image';

                updateHero({
                    mediaUrl: url,
                    mediaType: mediaType
                });

                showToast("Hero media updated successfully!", "success");
            } else {
                showToast("Upload failed. Verify Supabase bucket 'website-media' exists.", "error");
            }
        } catch (error) {
            console.error(error);
            showToast("An unexpected error occurred", "error");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginTop: '20px'
        }}>
            <h3 style={{ color: '#C2A46D', marginBottom: '16px' }}>Hero Section Media</h3>

            <div style={{ marginBottom: '20px' }}>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '8px' }}>Current Media:</p>
                {hero.mediaType === 'video' ? (
                    <video src={hero.mediaUrl} muted style={{ width: '200px', borderRadius: '8px' }} />
                ) : (
                    <img src={hero.mediaUrl} alt="Hero" style={{ width: '200px', borderRadius: '8px' }} />
                )}
            </div>

            <div style={{ position: 'relative' }}>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                    disabled={uploading}
                    id="hero-file-upload"
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                />
                <button
                    className="btn-primary"
                    style={{
                        width: '100%',
                        opacity: uploading ? 0.6 : 1,
                        pointerEvents: uploading ? 'none' : 'auto'
                    }}
                >
                    {uploading ? 'Processing...' : 'Upload New Image/Video'}
                </button>
            </div>

            <p style={{ fontSize: '0.75rem', marginTop: '12px', opacity: 0.5 }}>
                * Max file size 50MB. High resolution vertical media recommended.
            </p>
        </div>
    );
}
