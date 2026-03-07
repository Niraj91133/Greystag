'use client';
import React, { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css'; // Reusing styles
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function BehindSeamsEditor() {
    const { behindSeams, updateBehindSeams } = useContent();
    const { showToast } = useToast();
    const [formData, setFormData] = useState(behindSeams);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setFormData(behindSeams);
    }, [behindSeams]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            showToast('Saving Behind The Seams section...', 'info');

            await updateBehindSeams(formData);

            setTimeout(() => {
                showToast('Section updated successfully', 'success');
                setIsSaving(false);
            }, 500);
        } catch (error) {
            console.error('Save error:', error);
            showToast('Failed to save section', 'error');
            setIsSaving(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>CMS: Behind The Seams Editor</div>

            <div className={styles.grid}>
                <div className={styles.formGroup}>
                    <label>Section Title</label>
                    <input
                        className={styles.input}
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                        placeholder="Behind The Seams"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea
                        className={styles.input}
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        rows={4}
                        placeholder="Discover the craftsmanship and attention to detail that goes into every piece we create."
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Media Type</label>
                    <select
                        className={styles.input}
                        value={formData.mediaType}
                        onChange={(e) => handleChange('mediaType', e.target.value)}
                    >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>CTA Text</label>
                    <input
                        className={styles.input}
                        value={formData.ctaText}
                        onChange={(e) => handleChange('ctaText', e.target.value)}
                        placeholder="Explore the Story"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>CTA Link</label>
                    <input
                        className={styles.input}
                        value={formData.ctaLink}
                        onChange={(e) => handleChange('ctaLink', e.target.value)}
                        placeholder="/story"
                    />
                </div>

                <div className={styles.formGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                        type="checkbox"
                        checked={formData.isEnabled}
                        onChange={(e) => handleChange('isEnabled', e.target.checked)}
                        id="behind-seams-enabled"
                    />
                    <label htmlFor="behind-seams-enabled" style={{ margin: 0 }}>Section Enabled</label>
                </div>
            </div>

            <div className={styles.mediaSection}>
                <MediaUploader
                    label={`Background ${formData.mediaType === 'video' ? 'Video' : 'Image'}`}
                    value={formData.mediaUrl}
                    onChange={(url) => handleChange('mediaUrl', url)}
                    folder="behind-seams"
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

            {/* Preview Section */}
            <div className={styles.preview}>
                <h3>Live Preview</h3>
                <div className={styles.previewFrame} style={{ minHeight: '300px' }}>
                    <div style={{ display: 'flex', gap: '20px', padding: '20px', background: '#000', height: '100%', alignItems: 'center' }}>
                        <div style={{ flex: 1, height: '200px', background: '#111', borderRadius: '4px', overflow: 'hidden' }}>
                            {formData.mediaUrl ? (
                                formData.mediaType === 'video' ? (
                                    <video src={formData.mediaUrl} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <img src={formData.mediaUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                )
                            ) : (
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>No Media</div>
                            )}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 className="serif" style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{formData.title}</h2>
                            <p style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '15px' }}>{formData.description}</p>
                            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>{formData.ctaText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
