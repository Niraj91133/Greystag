'use client';
import React, { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css'; // Reusing styles
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

export default function PromoEditor() {
    const { videoSection, updateVideoSection } = useContent();
    const { showToast } = useToast();
    const [formData, setFormData] = useState(videoSection);

    useEffect(() => {
        setFormData(videoSection);
    }, [videoSection]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        updateVideoSection(formData);
        showToast('Promo section updated', 'success');
    };

    const handleMediaUpload = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const uploadFormData = new FormData();
                uploadFormData.append('images', file);
                showToast('Uploading...', 'info');

                const json = await api.post('/products/upload', uploadFormData);
                const url = Array.isArray(json.data) ? json.data[0] : json.data;

                // Update content (which is the media URL)
                setFormData(prev => ({ ...prev, content: url }));
                showToast('File uploaded successfully', 'success');
            }
            catch (error) {
                console.error('Upload failed:', error);
                showToast('Failed to upload file', 'error');
            }
        }
    }

    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Promo / Video Section Editor</div>

        <div className={styles.grid}>
            <div className={styles.formGroup}>
                <label>Title</label>
                <input value={formData.title} onChange={(e) => handleChange('title', e.target.value)} />
            </div>

            <div className={styles.formGroup}>
                <label>Content Source (Video/Image)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label className="btn-secondary" style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        cursor: 'pointer',
                        padding: '12px',
                        color: '#d4af37',
                        border: '1px solid #d4af37',
                        background: 'transparent'
                    }}>
                        Choose from Device
                        <input type="file" accept="image/*,video/*" hidden onChange={handleMediaUpload} />
                    </label>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                        Current: {formData.content?.substring(0, 30) + '...'}
                    </div>
                </div>
            </div>
        </div>

        <button className="btn-primary" onClick={handleSave} style={{ marginTop: '20px' }}>
            Save Promo Section
        </button>

        {/* Preview */}
        <div className={styles.preview}>
            <h3>Live Preview</h3>
            <div className={styles.previewFrame}>
                {formData.content?.endsWith('.mp4') || formData.content?.includes('video') ? (<video src={formData.content} muted loop autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />) : (<img src={formData.content} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />)}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    textAlign: 'center', width: '80%'
                }}>
                    <h2 className="serif" style={{ fontSize: '2rem', color: '#fff' }}>{formData.title}</h2>
                </div>
            </div>
        </div>
    </div>);
}
