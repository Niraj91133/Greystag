'use client';
import React, { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css';
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

console.log("HeroEditor loaded. API configured for:", process.env.NEXT_PUBLIC_API_URL);

export default function HeroEditor() {
    const { hero, updateHero } = useContent();
    const { showToast } = useToast();
    // Local state to manage form inputs before saving (or partial real-time)
    // Actually, context updates are fast enough for "local preview" typically, 
    // but specific "Save" button is better for UX.
    const [formData, setFormData] = useState(hero);
    // Sync if external hero changes (e.g. initial load)
    useEffect(() => {
        setFormData(hero);
    }, [hero]);
    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleSave = () => {
        updateHero(formData);
        showToast('Hero section updated successfully', 'success');
    };
    return (<div className={styles.container}>
        <div className={styles.title}>Hero Section Editor</div>

        {/* Hero Toggle Removed: Always Enabled */}
        <input type="hidden" value="true" />

        <div className={styles.grid}>
            <div className={styles.formGroup}>
                <label>Title</label>
                <textarea value={formData.title} onChange={(e) => handleChange('title', e.target.value)} rows={2} />
            </div>

            <div className={styles.formGroup}>
                <label>Subtitle</label>
                <textarea value={formData.subtitle} onChange={(e) => handleChange('subtitle', e.target.value)} rows={2} />
            </div>

            <div className={styles.formGroup}>
                <label>Media Type</label>
                <select value={formData.mediaType} onChange={(e) => handleChange('mediaType', e.target.value)}>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Media Source</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Option 2: Upload Only */}
                    <label className="btn-secondary" style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        cursor: 'pointer',
                        padding: '12px',
                        color: '#d4af37', // Gold text
                        border: '1px solid #d4af37',
                        background: 'transparent'
                    }}>
                        Choose from Device
                        <input type="file" accept="image/*,video/*" hidden onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                try {
                                    const uploadFormData = new FormData();
                                    uploadFormData.append('images', file);
                                    showToast('Uploading...', 'info');

                                    const json = await api.post('/products/upload', uploadFormData);
                                    const url = Array.isArray(json.data) ? json.data[0] : json.data;
                                    const type = file.type.startsWith('video') ? 'video' : 'image';
                                    setFormData(prev => ({ ...prev, mediaUrl: url, mediaType: type }));
                                    showToast('File uploaded successfully', 'success');
                                }
                                catch (error) {
                                    console.error('Upload error:', error);
                                    showToast('Failed to upload file', 'error');
                                }

                            }
                        }} />

                    </label>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                        Selected: {formData.mediaUrl ? (formData.mediaUrl.startsWith('blob:') ? 'Local File' : 'Current Asset') : 'None'}
                    </div>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>CTA Text</label>
                <input value={formData.ctaText} onChange={(e) => handleChange('ctaText', e.target.value)} />
            </div>

            <div className={styles.formGroup}>
                <label>CTA Link</label>
                <input value={formData.ctaLink} onChange={(e) => handleChange('ctaLink', e.target.value)} placeholder="/category/all" />
            </div>
        </div>

        <button className="btn-primary" onClick={handleSave} style={{ marginTop: '20px' }}>
            Save Changes
        </button>

        {/* Live Preview Block */}
        <div className={styles.preview}>
            <h3>Live Preview</h3>
            <div className={styles.previewFrame}>
                {formData.mediaType === 'video' ? (<video src={formData.mediaUrl} muted loop autoPlay playsInline style={{ opacity: 0.7 }} />) : (<img src={formData.mediaUrl} alt="Preview" style={{ opacity: 0.7 }} />)}
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
