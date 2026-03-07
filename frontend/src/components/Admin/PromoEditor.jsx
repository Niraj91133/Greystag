'use client';
import React, { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css'; // Reusing styles
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function PromoEditor() {
    const { videoSection, updateVideoSection } = useContent();
    const { showToast } = useToast();
    const [formData, setFormData] = useState(videoSection);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setFormData(videoSection);
    }, [videoSection]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleMediaChange = (url) => {
        setFormData(prev => ({ ...prev, content: url }));
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            showToast('Saving promo section...', 'info');

            await updateVideoSection(formData);

            setTimeout(() => {
                showToast('Promo section updated successfully', 'success');
                setIsSaving(false);
            }, 500);
        } catch (error) {
            console.error('Save error:', error);
            showToast('Failed to save promo section', 'error');
            setIsSaving(false);
        }
    };

    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Promo / Video Section Editor</div>

        <div className={styles.grid}>
            <div className={styles.formGroup}>
                <label>Title</label>
                <input
                    className={styles.input}
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                />
            </div>
        </div>

        <div className={styles.mediaSection}>
            <MediaUploader
                label="Promo Media (Video/Image)"
                value={formData.content}
                onChange={handleMediaChange}
                folder="promo"
            />
        </div>

        <button
            className="btn-primary"
            onClick={handleSave}
            disabled={isSaving}
            style={{ marginTop: '20px', width: '200px' }}
        >
            {isSaving ? 'Saving...' : 'Save Changes'}
        </button>

        {/* Preview */}
        <div className={styles.preview}>
            <h3>Live Preview</h3>
            <div className={styles.previewFrame}>
                {formData.content?.match(/\.(mp4|webm|mov)$/) || formData.content?.includes('video') ? (
                    <video src={formData.content} muted loop autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                ) : (
                    <img src={formData.content} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                )}
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
