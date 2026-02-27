'use client';
import React from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css'; // Reusing same styles for consistency
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

export default function CategoryEditor() {
    const { categories, updateCategory, addCategory, deleteCategory } = useContent();
    const { showToast } = useToast();
    const [newCatName, setNewCatName] = React.useState('');

    const handleAdd = () => {
        if (!newCatName.trim()) return;
        addCategory(newCatName.trim());
        setNewCatName('');
        showToast('Category added', 'success');
    };

    const handleImageUpload = async (id, file) => {
        try {
            const formData = new FormData();
            formData.append('images', file); // API expects 'images' field
            showToast('Uploading...', 'info');

            const json = await api.post('/products/upload', formData);
            const imageUrl = Array.isArray(json.data) ? json.data[0] : json.data;

            updateCategory(id, { imageUrl });
            showToast('Category image updated', 'success');
        }
        catch (error) {
            console.error('Upload failed:', error);
            showToast('Failed to upload image', 'error');
        }
    };


    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Category Mosaic Editor</div>

        {/* ADD CATEGORY */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px' }}>
            <input
                value={newCatName}
                onChange={e => setNewCatName(e.target.value)}
                placeholder="New Category Name (e.g. Blazers)"
                style={{ flex: 1, padding: '12px', background: '#222', color: '#fff', border: '1px solid #333', borderRadius: '4px' }}
            />
            <button onClick={handleAdd} className="btn-primary" style={{ padding: '0 24px' }}>Add Category</button>
        </div>

        <div className={styles.grid}>
            {categories.map((cat) => (<div key={cat.id} className={styles.preview} style={{ marginTop: 0, padding: '16px', position: 'relative' }}>
                {/* Delete Button */}
                <button onClick={() => {
                    if (confirm(`Delete ${cat.name}?`)) deleteCategory(cat.id);
                }} style={{
                    position: 'absolute', top: '10px', right: '10px',
                    background: 'rgba(0,0,0,0.5)', border: 'none', color: '#ff4444',
                    width: '24px', height: '24px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
                }}>×</button>

                <h3 style={{ color: '#fff', marginBottom: '8px' }}>{cat.name}</h3>

                {/* Preview */}
                <div className={styles.previewFrame} style={{ aspectRatio: '3/4', marginBottom: '16px' }}>
                    <img src={cat.imageUrl} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Upload Button */}
                <label className="btn-secondary" style={{
                    display: 'block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '10px',
                    color: '#d4af37',
                    border: '1px solid #d4af37',
                    background: 'transparent',
                    fontSize: '0.9rem'
                }}>
                    Change Image
                    <input type="file" accept="image/*" hidden onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file)
                            handleImageUpload(cat.id, file);
                    }} />
                </label>
            </div>))}
        </div>
    </div>);
}
