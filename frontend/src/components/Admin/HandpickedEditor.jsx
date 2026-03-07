'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { useProduct } from '@/context/ProductContext';
import styles from './CategoryEditor.module.css'; // Use compact category styles
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function HandpickedEditor() {
    const { handpickedItems, updateHandpickedItem } = useContent();
    const { products, updateProduct } = useProduct();
    const { showToast } = useToast();
    const [openItemId, setOpenItemId] = useState(null);

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
        if (!product) return;
        const currentTags = product.occasions || [];
        let newTags;
        if (currentTags.includes(tag)) {
            newTags = currentTags.filter(t => t !== tag);
        } else {
            newTags = [...currentTags, tag];
        }
        updateProduct(productId, { occasions: newTags });
    };

    const handleMediaChange = (id, url) => {
        updateHandpickedItem(id, { imageUrl: url });
        showToast('Card image updated', 'success');
    };

    return (<div className={styles.container}>
        <div className={styles.title}>Handpicked Dashboard</div>

        <div className={styles.grid}>
            {handpickedItems.map((item) => {
                const tag = getTagForItem(item);
                return (<div key={item.id} className={styles.card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                        <input
                            value={item.title}
                            onChange={(e) => updateHandpickedItem(item.id, { title: e.target.value })}
                            className={styles.input}
                            style={{ border: 'none', background: 'transparent', width: 'auto', fontWeight: 'bold', fontSize: '1rem' }}
                        />
                        <span style={{ fontSize: '0.75rem', color: '#666', background: 'rgba(212, 175, 55, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>Tag: {tag}</span>
                    </div>

                    {/* Image Editor with MediaUploader */}
                    <MediaUploader
                        label="Card Cover Image"
                        value={item.imageUrl}
                        onChange={(url) => handleMediaChange(item.id, url)}
                        accept="image/*"
                        folder="handpicked"
                    />

                    {/* Product Selector Toggle */}
                    <button
                        className={styles.button}
                        style={{ width: '100%', background: openItemId === item.id ? '#333' : '#d4af37', color: openItemId === item.id ? '#fff' : '#000' }}
                        onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                    >
                        {openItemId === item.id ? 'Close Product Selection' : 'Manage Products'}
                    </button>

                    {/* Product Selection List */}
                    {openItemId === item.id && (<div style={{
                        marginTop: '12px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        background: '#111',
                        padding: '12px',
                        borderRadius: '4px',
                        border: '1px solid #333'
                    }}>
                        <div style={{ fontSize: '0.7rem', color: '#888', marginBottom: '12px', textTransform: 'uppercase' }}>
                            Linked Products:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {products.map(p => {
                                const isChecked = p.occasions?.includes(tag);
                                return (<div key={p.id || p._id} onClick={() => toggleProductTag(p.id || p._id, tag)} style={{
                                    display: 'flex', alignItems: 'center', gap: '8px', padding: '8px',
                                    cursor: 'pointer', borderRadius: '4px',
                                    background: isChecked ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                                    border: isChecked ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent'
                                }}>
                                    <input type="checkbox" checked={isChecked || false} readOnly style={{ accentColor: '#d4af37' }} />
                                    <span style={{ fontSize: '0.85rem', color: isChecked ? '#fff' : '#888' }}>{p.name}</span>
                                </div>);
                            })}
                        </div>
                    </div>)}
                </div>);
            })}
        </div>
    </div>);
}
