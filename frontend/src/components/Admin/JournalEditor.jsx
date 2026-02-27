'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './HeroEditor.module.css'; // Reusing styles
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';

export default function JournalEditor() {
    const { journal, addJournalEntry, updateJournalEntry, deleteJournalEntry } = useContent();
    const { showToast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    // Form State
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        category: '',
        imageUrl: '',
        content: '',
        author: 'Editor',
        status: 'published'
    });
    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            category: '',
            imageUrl: '',
            content: '',
            author: 'Editor',
            status: 'published'
        });
        setIsEditing(false);
    };
    const handleEdit = (post) => {
        setFormData(post);
        setIsEditing(true);
    };
    const handleSave = async () => {
        if (!formData.title || !formData.imageUrl || !formData.category) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        try {
            if (isEditing && formData.id) {
                updateJournalEntry(formData.id, formData);
                showToast('Article updated', 'success');
            }
            else {
                addJournalEntry(formData); // ID and Date added by context
                showToast('Article created', 'success');
            }
            resetForm();
        }
        catch (e) {
            showToast('Failed to save article', 'error');
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const uploadFormData = new FormData();
                uploadFormData.append('images', file);
                showToast('Uploading...', 'info');

                const json = await api.post('/products/upload', uploadFormData);
                const url = Array.isArray(json.data) ? json.data[0] : json.data;

                setFormData(prev => ({ ...prev, imageUrl: url }));
                showToast('Image uploaded', 'success');
            }
            catch (error) {
                console.error('Upload failed:', error);
                showToast('Failed to upload image', 'error');
            }
        }
    };

    return (<div className={styles.container} style={{ marginTop: '40px' }}>
        <div className={styles.title}>Journal Editor</div>

        {/* FORM */}
        <div className={styles.grid} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
            <div className={styles.fullWidth}>
                <h4 style={{ color: '#fff', marginBottom: '16px' }}>{isEditing ? 'Edit Article' : 'Write New Article'}</h4>
            </div>

            <div className={styles.formGroup}>
                <label>Title</label>
                <input value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="Article Headline" />
            </div>

            <div className={styles.formGroup}>
                <label>Category</label>
                <input value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} placeholder="e.g. Style, Travel" />
            </div>

            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                <label>Cover Image (Max 2MB)</label>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <label className="btn-secondary" style={{ cursor: 'pointer', padding: '10px', border: '1px solid #d4af37', color: '#d4af37' }}>
                        Upload Photo from Device
                        <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
                    </label>
                    {formData.imageUrl && (<img src={formData.imageUrl} style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '4px' }} alt="preview" />)}
                    {formData.imageUrl && <span style={{ fontSize: '0.8rem', color: '#666' }}>Image Ready</span>}
                </div>
            </div>

            <div className={styles.fullWidth}>
                <label>Content (HTML supported)</label>
                <textarea value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} placeholder="<p>Write your article here...</p>" rows={10} style={{
                    width: '100%', padding: '12px', background: '#222', color: '#fff', border: '1px solid #333', borderRadius: '4px', fontFamily: 'monospace'
                }} />
            </div>

            <div className={styles.fullWidth} style={{ display: 'flex', gap: '12px' }}>
                <button onClick={handleSave} className="btn-primary" style={{ flex: 1 }}>
                    {isEditing ? 'Update Article' : 'Publish Article'}
                </button>
                {isEditing && (<button onClick={resetForm} className="btn-secondary">Cancel</button>)}
            </div>
        </div>

        {/* LIST */}
        <div className={styles.fullWidth}>
            <h4 style={{ color: '#fff', marginBottom: '16px' }}>Published Articles</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {journal.map(post => (<div key={post.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a1a', padding: '12px', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={post.imageUrl} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '2px' }} />
                        <div>
                            <div style={{ fontWeight: 'bold', color: '#e0e0e0' }}>{post.title}</div>
                            <div style={{ fontSize: '0.75rem', color: '#888' }}>{post.date} • {post.category}</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => handleEdit(post)} style={{ background: 'none', border: 'none', color: '#d4af37', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => deleteJournalEntry(post.id)} style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer' }}>Delete</button>
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
}
