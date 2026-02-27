'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { useProduct } from '@/context/ProductContext';
import styles from './HeroEditor.module.css'; // Reuse styles
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

export default function HandpickedEditor() {
    const { handpickedItems, updateHandpickedItem } = useContent();
    const { products, updateProduct } = useProduct();
    const { showToast } = useToast();
    const [openItemId, setOpenItemId] = useState(null);
    // Filter products by Tag
    const getTagForItem = (item) => {
        const slug = item.slug;
        const map = {
            'meetings': 'Meeting',
            'office-essentials': 'Office',
            'students': 'Student',
            'events': 'Event'
        };
        return map[slug] || item.title;
    };
    const toggleProductTag = (productId, tag) => {
        const product = products.find(p => p.id === productId || p._id === productId);
        if (!product)
            return;
        const currentTags = product.occasions || []; // Map to 'occasions' field in Product
        let newTags;
        if (currentTags.includes(tag)) {
            newTags = currentTags.filter(t => t !== tag);
        }
        else {
            newTags = [...currentTags, tag];
        }
        updateProduct(productId, { occasions: newTags });
    };
    const handleImageUpload = async (id, e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const uploadFormData = new FormData();
                uploadFormData.append('images', file);
                showToast('Uploading...', 'info');

                const json = await api.post('/products/upload', uploadFormData);
                const imageUrl = Array.isArray(json.data) ? json.data[0] : json.data;

                updateHandpickedItem(id, { imageUrl });
                showToast('Card image updated', 'success');
            }
            catch (error) {
                console.error('Upload failed:', error);
                showToast('Failed to upload image', 'error');
            }
        }
    };

    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Handpicked Section Editor</div>

        <div className={styles.grid}>
            {handpickedItems.map((item) => {
                const tag = getTagForItem(item);
                return (<div key={item.id} className={styles.formGroup} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <input value={item.title} onChange={(e) => updateHandpickedItem(item.id, { title: e.target.value })} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }} />
                        <span style={{ fontSize: '0.8rem', color: '#666' }}>Tag: {tag}</span>
                    </div>

                    {/* Image Editor */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ marginBottom: '8px' }}>Card Image:</div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <img src={item.imageUrl} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                            <label className="btn-secondary" style={{ cursor: 'pointer', padding: '8px 12px', fontSize: '0.8rem' }}>
                                Change Image
                                <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload(item.id, e)} />
                            </label>
                        </div>
                    </div>

                    {/* Product Selector Toggle */}
                    <button className="btn-outline-gold" style={{ width: '100%', fontSize: '0.9rem' }} onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}>
                        {openItemId === item.id ? 'Done Selecting Products' : 'Select Displayed Products'}
                    </button>

                    {/* Product Selection List */}
                    {openItemId === item.id && (<div style={{
                        marginTop: '12px',
                        maxHeight: '300px',
                        overflowY: 'auto',
                        background: '#111',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #333'
                    }}>
                        <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>
                            Check products to appear in "{item.title}" section:
                        </div>
                        {products.map(p => {
                            const isChecked = p.occasions?.includes(tag);
                            return (<div key={p.id || p._id} onClick={() => toggleProductTag(p.id || p._id, tag)} style={{
                                display: 'flex', alignItems: 'center', gap: '8px', padding: '6px',
                                cursor: 'pointer', background: isChecked ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                            }}>
                                <input type="checkbox" checked={isChecked || false} readOnly />
                                <span style={{ fontSize: '0.9rem', color: isChecked ? '#fff' : '#aaa' }}>{p.name}</span>
                            </div>);
                        })}
                    </div>)}
                </div>);
            })}
        </div>
    </div>);
}
