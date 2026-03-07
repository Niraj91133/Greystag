'use client';
import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import styles from './CategoryEditor.module.css'; // Use compact category styles
import { useToast } from '@/context/ToastContext';
import MediaUploader from './MediaUploader';

export default function JournalEditor() {
    const { journal, addJournalEntry, updateJournalEntry, deleteJournalEntry } = useContent();
    const { showToast } = useToast();
    const [isEditing, setIsEditing] = useState(false);

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
                addJournalEntry(formData);
                showToast('Article created', 'success');
            }
            resetForm();
        }
        catch (e) {
            showToast('Failed to save article', 'error');
        }
    };

    const handleMediaChange = (url) => {
        setFormData(prev => ({ ...prev, imageUrl: url }));
    };

    return (<div className={styles.container}>
        <div className={styles.title}>Journal Dashboard</div>

        {/* FORM */}
        <div className={styles.addSection} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '20px' }}>
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase' }}>{isEditing ? 'Edit Article' : 'Write New Article'}</h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', color: '#666' }}>Title</label>
                    <input
                        className={styles.input}
                        style={{ maxWidth: '100%', width: '100%' }}
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Article Headline"
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', color: '#666' }}>Category</label>
                    <input
                        className={styles.input}
                        style={{ maxWidth: '100%', width: '100%' }}
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        placeholder="e.g. Style, Travel"
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '24px' }}>
                <MediaUploader
                    label="Cover Image"
                    value={formData.imageUrl}
                    onChange={handleMediaChange}
                    accept="image/*"
                    folder="journal"
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', color: '#666' }}>Content (Markdown/HTML Support)</label>
                    <textarea
                        value={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Once upon a time..."
                        rows={6}
                        style={{
                            width: '100%', padding: '12px', background: '#222', color: '#fff',
                            border: '1px solid #333', borderRadius: '4px', fontSize: '14px', resize: 'vertical'
                        }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={handleSave} className={styles.button} style={{ width: '200px' }}>
                    {isEditing ? 'Update Article' : 'Publish Article'}
                </button>
                {isEditing && (<button onClick={resetForm} className={styles.button} style={{ background: '#333' }}>Cancel</button>)}
            </div>
        </div>

        {/* LIST */}
        <div style={{ marginTop: '32px' }}>
            <h4 style={{ color: '#888', marginBottom: '16px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Published Articles</h4>
            <div className={styles.grid}>
                {journal.map(post => (<div key={post.id} className={styles.card}>
                    <button
                        onClick={() => deleteJournalEntry(post.id)}
                        className={styles.deleteBtn}
                    >×</button>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <img src={post.imageUrl} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>{post.title}</div>
                            <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>{post.date} • {post.category}</div>
                            <button
                                onClick={() => handleEdit(post)}
                                style={{ background: 'none', border: 'none', color: '#d4af37', padding: 0.8, cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                            >EDIT ARTICLE</button>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
}
