'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { useProduct } from '@/context/ProductContext';
import styles from './CategoryEditor.module.css'; // Use compact category styles
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

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

    const handleMediaChange = (url) => {
        setNewVideoUrl(url);
    };

    return (<div className={styles.container}>
        <div className={styles.title}>Shop-able Video Editor</div>

        {/* ADD NEW */}
        <div className={styles.addSection} style={{ flexDirection: 'column', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
            <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Add New Video Reel</h4>

            <div style={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'flex-start' }}>
                {/* 1. Upload Video */}
                <div style={{ flex: 1 }}>
                    <MediaUploader
                        label="Upload Reel (Portrait Video)"
                        value={newVideoUrl}
                        onChange={handleMediaChange}
                        accept="video/*"
                        folder="reels"
                    />
                </div>

                {/* 2. Select Product */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase' }}>Link Product</label>
                    <select
                        className={styles.input}
                        style={{ width: '100%', maxWidth: '100%' }}
                        value={linkedProductId}
                        onChange={(e) => setLinkedProductId(e.target.value)}
                    >
                        <option value="">-- Select a Product --</option>
                        {products.map(p => (<option key={p.id || p._id} value={p.id || p._id}>
                            {p.name} (₹{p.price})
                        </option>))}
                    </select>
                </div>
            </div>

            <button onClick={handleAdd} className={styles.button} style={{ marginTop: '16px', width: '200px' }}>
                Add to Video Reel
            </button>
        </div>

        {/* LIST EXISTING */}
        <div className={styles.grid}>
            {videoScrollItems.map((item) => {
                const product = products.find(p => (p.id || p._id).toString() === item.linkedProductId);
                return (<div key={item.id} className={styles.card} style={{ maxWidth: '300px' }}>
                    {/* Delete Button */}
                    <button onClick={() => deleteVideoScrollItem(item.id)} className={styles.deleteBtn}>
                        ×
                    </button>

                    {/* Video Preview */}
                    <div className={styles.imagePreview} style={{ aspectRatio: '9/16', height: 'auto' }}>
                        <video src={item.videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Linked Product Info */}
                    <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>Linked Product:</div>
                        <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9rem' }}>{product ? product.name : 'Unknown Product'}</div>
                        <div style={{ fontSize: '0.9rem', color: '#d4af37' }}>{product ? `₹${product.price}` : ''}</div>
                    </div>
                </div>);
            })}
            {videoScrollItems.length === 0 && (<div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666', padding: '40px' }}>
                No videos added yet. Add one above!
            </div>)}
        </div>
    </div>);
}
