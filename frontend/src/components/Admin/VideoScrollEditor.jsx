'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { useProduct } from '@/context/ProductContext';
import styles from './HeroEditor.module.css'; // Reuse styles
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

export default function VideoScrollEditor() {
    const { videoScrollItems, addVideoScrollItem, deleteVideoScrollItem } = useContent();
    const { products } = useProduct();
    const { showToast } = useToast();
    // New Item State
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [linkedProductId, setLinkedProductId] = useState('');

    const handleAdd = () => {
        if (!newVideoUrl || !linkedProductId) {
            showToast('Please upload a video and select a product', 'error');
            return;
        }
        addVideoScrollItem({
            videoUrl: newVideoUrl,
            linkedProductId: linkedProductId
        });
        showToast('Video Reel added successfully', 'success');
        setNewVideoUrl('');
        setLinkedProductId('');
    };

    const handleVideoUpload = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('images', file); // Backend expects 'images' field generically
                showToast('Uploading...', 'info');

                const json = await api.post('/products/upload', formData);
                const url = Array.isArray(json.data) ? json.data[0] : json.data;

                setNewVideoUrl(url);
                showToast('Video uploaded', 'success');
            }
            catch (error) {
                console.error('Upload failed:', error);
                showToast('Failed to upload video', 'error');
            }
        }
    };

    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Shop-able Video Editor</div>

        {/* ADD NEW */}
        <div className={styles.grid} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
            <div className={styles.fullWidth}>
                <h4 style={{ color: '#fff', marginBottom: '16px' }}>Add New Video Reel</h4>
            </div>

            {/* 1. Upload Video */}
            <div className={styles.formGroup}>
                <label>Upload Reel (Portrait Video)</label>
                <label className="btn-secondary" style={{
                    display: 'block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '12px',
                    color: '#d4af37',
                    border: '1px solid #d4af37',
                    background: 'transparent'
                }}>
                    {newVideoUrl ? 'Change Video' : 'Choose Video from Device'}
                    <input type="file" accept="video/*" hidden onChange={handleVideoUpload} />
                </label>
                {newVideoUrl && <span style={{ fontSize: '0.8rem', color: '#4ade80', marginTop: '8px', display: 'block' }}>Video Selected</span>}
            </div>

            {/* 2. Select Product */}
            <div className={styles.formGroup}>
                <label>Link Product (Search/Select)</label>
                <select style={{ width: '100%', padding: '12px', background: '#222', color: '#fff', border: '1px solid #333', borderRadius: '4px' }} value={linkedProductId} onChange={(e) => setLinkedProductId(e.target.value)}>
                    <option value="">-- Select a Product --</option>
                    {products.map(p => (<option key={p.id || p._id} value={p.id || p._id}>
                        {p.name} ({p.price})
                    </option>))}
                </select>
            </div>

            <div className={styles.fullWidth}>
                <button onClick={handleAdd} className="btn-primary" style={{ width: '100%' }}>
                    Add to Video Reel
                </button>
            </div>
        </div>

        {/* LIST EXISTING */}
        <div className={styles.grid}>
            {videoScrollItems.map((item) => {
                const product = products.find(p => (p.id || p._id).toString() === item.linkedProductId);
                return (<div key={item.id} className={styles.preview} style={{ marginTop: 0, position: 'relative' }}>
                    {/* Delete Button */}
                    <button onClick={() => deleteVideoScrollItem(item.id)} style={{
                        position: 'absolute', top: '10px', right: '10px',
                        background: 'rgba(0,0,0,0.6)', border: 'none', color: '#ff4444',
                        width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
                    }}>
                        ×
                    </button>

                    {/* Video Preview */}
                    <div className={styles.previewFrame} style={{ aspectRatio: '9/16' }}>
                        <video src={item.videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Linked Product Info */}
                    <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Linked Product:</div>
                        <div style={{ fontWeight: 'bold', color: '#fff' }}>{product ? product.name : 'Unknown Product'}</div>
                        <div style={{ fontSize: '0.9rem', color: '#d4af37' }}>{product?.price}</div>
                    </div>
                </div>);
            })}
            {videoScrollItems.length === 0 && (<div className={styles.fullWidth} style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
                No videos added yet. Add one above!
            </div>)}
        </div>
    </div>);
}
