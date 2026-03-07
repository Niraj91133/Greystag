'use client';
import React from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './CategoryEditor.module.css';
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2940&auto=format&fit=crop';

export default function CategoryEditor() {
    const { categories, updateCategory, addCategory, deleteCategory } = useContent();
    const { showToast } = useToast();
    const [newCatName, setNewCatName] = React.useState('');

    const handleAdd = () => {
        if (!newCatName.trim()) return;
        addCategory(newCatName.trim());
        setNewCatName('');
        showToast('Category added successfully', 'success');
    };

    const handleMediaChange = (id, url) => {
        updateCategory(id, { imageUrl: url });
        showToast('Category image updated', 'success');
    };

    return (<div className={styles.container}>
        <div className={styles.title}>Category Dashboard</div>

        {/* ADD CATEGORY */}
        <div className={styles.addSection}>
            <input
                value={newCatName}
                onChange={e => setNewCatName(e.target.value)}
                placeholder="New Category Name (e.g. Blazers)"
                className={styles.input}
            />
            <button onClick={handleAdd} className={styles.button}>Add Category</button>
        </div>

        <div className={styles.grid}>
            {categories.map((cat) => (<div key={cat.id} className={styles.card}>
                {/* Delete Button */}
                <button
                    onClick={() => confirm(`Delete ${cat.name}?`) && deleteCategory(cat.id)}
                    className={styles.deleteBtn}
                >×</button>

                <h3 className={styles.cardTitle}>{cat.name}</h3>

                {/* Preview */}
                <div className={styles.imagePreview}>
                    <img
                        src={cat.imageUrl || FALLBACK_IMAGE}
                        alt={cat.name}
                        onError={(e) => {
                            e.target.src = FALLBACK_IMAGE;
                            showToast(`Fallback image loaded for ${cat.name}`, 'info');
                        }}
                    />
                </div>

                {/* Shared Media Uploader */}
                <MediaUploader
                    label="Category Image"
                    value={cat.imageUrl}
                    onChange={(url) => handleMediaChange(cat.id, url)}
                    accept="image/*"
                    folder="categories"
                />
            </div>))}
        </div>
    </div>);
}
