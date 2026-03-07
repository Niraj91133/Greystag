'use client';
import React, { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css';
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function HeroEditor() {
    const { hero, updateHero } = useContent();
    const { showToast } = useToast();
    const [formData, setFormData] = useState(hero);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setFormData(hero);
    }, [hero]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleMediaChange = (url, type) => {
        setFormData(prev => ({
            ...prev,
            mediaUrl: url,
            mediaType: type || prev.mediaType
        }));
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            showToast('Saving changes...', 'info');

            await updateHero(formData);

            // Artificial delay for better UX feedback if updateHero is sync
            setTimeout(() => {
                showToast('Hero section updated successfully', 'success');
                setIsSaving(false);
            }, 500);
        } catch (error) {
            console.error('Save error:', error);
            showToast('Failed to save changes', 'error');
            setIsSaving(false);
        }
    };

    return (<div className={styles.container}>
        <div className={styles.title}>Hero Section Editor</div>

        <div className={styles.grid}>
            <div className={styles.formGroup}>
                <label>Title</label>
                <textarea
                    className={styles.input}
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    rows={2}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Subtitle</label>
                <textarea
                    className={styles.input}
                    value={formData.subtitle}
                    onChange={(e) => handleChange('subtitle', e.target.value)}
                    rows={2}
                />
            </div>

            <div className={styles.formGroup}>
                <label>CTA Text</label>
                <input
                    className={styles.input}
                    value={formData.ctaText}
                    onChange={(e) => handleChange('ctaText', e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label>CTA Link</label>
                <input
                    className={styles.input}
                    value={formData.ctaLink}
                    onChange={(e) => handleChange('ctaLink', e.target.value)}
                    placeholder="/category/all"
                />
            </div>
        </div>

        <div className={styles.mediaSection}>
            <MediaUploader
                label="Hero Media (Video/Image)"
                value={formData.mediaUrl}
                onChange={handleMediaChange}
                folder="hero"
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

        {/* Live Preview Block */}
        <div className={styles.preview}>
            <h3>Live Preview</h3>
            <div className={styles.previewFrame}>
                {formData.mediaUrl ? (
                    formData.mediaType === 'video' || formData.mediaUrl.match(/\.(mp4|webm|mov)$/) ? (
                        <video src={formData.mediaUrl} muted loop autoPlay playsInline style={{ opacity: 0.7 }} />
                    ) : (
                        <img src={formData.mediaUrl} alt="Preview" style={{ opacity: 0.7 }} />
                    )
                ) : (
                    <div style={{ background: '#111', width: '100%', height: '100%' }} />
                )}

                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    textAlign: 'center', width: '80%'
                }}>
                    <h1 style={{
                        fontSize: '2rem', fontFamily: 'var(--font-serif)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)', whiteSpace: 'pre-line'
                    }}>
                        {formData.title}
                    </h1>
                    <p style={{ fontSize: '0.9rem', marginTop: '10px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {formData.subtitle}
                    </p>
                </div>
            </div>
        </div>
    </div>);
}
