'use client';
import React, { useState, useRef } from 'react';
import { useToast } from '@/context/ToastContext';
import { useProduct } from '@/context/ProductContext';
import { useContent } from '@/context/ContentContext';

export default function ProductWizard() {
    const { showToast } = useToast();
    const { categories } = useContent();
    const { addProduct, products, deleteProduct, updateProduct, uploadImages } = useProduct();
    const [mode, setMode] = useState('manage');
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [data, setData] = useState({
        type: 'Shirt', images: [], title: '', price: '', subtitle: '',
        sizes: [], colors: [], description: '', fabricCare: '',
        videoUrl: '', externalLink: '', collections: { homepage: false, categoryPage: true, essential: true, newArrivals: true }
    });
    const fileInputRef = useRef(null);

    const handleSave = async () => {
        if (!data.title || !data.price) return showToast('Title and Price required', 'error');
        setIsSaving(true);
        const payload = { ...data, name: data.title, price: parseFloat(data.price), category: data.type, isActive: true };
        try {
            const success = editingId ? await updateProduct(editingId, payload) : await addProduct(payload);
            if (success) { showToast('Saved Successfully', 'success'); setMode('manage'); }
        } finally { setIsSaving(false); }
    };

    const startEdit = (p) => {
        const categoryName = typeof p.category === 'object' ? p.category?.name : (p.category || 'Shirts');
        setData({
            ...p,
            title: p.name,
            price: p.price.toString(),
            type: categoryName,
            collections: { categoryPage: true }
        });
        setEditingId(p.id || p._id);
        setMode('create');
        setStep(1);
    };


    return (
        <div className="fade-in">
            {/* Tab Switcher */}
            <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', borderBottom: '1px solid var(--admin-border)' }}>
                {['manage', 'create'].map(m => (
                    <button
                        key={m}
                        onClick={() => { setMode(m); if (m === 'create') { setEditingId(null); setData({ ...data, images: [] }); } }}
                        style={{
                            padding: '12px 4px', background: 'none', border: 'none',
                            color: mode === m ? 'var(--admin-accent)' : '#666',
                            borderBottom: mode === m ? '2px solid var(--admin-accent)' : '2px solid transparent',
                            cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px'
                        }}
                    >
                        {m === 'manage' ? 'Inventory' : editingId ? 'Edit Product' : 'Add Product'}
                    </button>
                ))}
            </div>

            {mode === 'manage' ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                    {products.map(p => (
                        <div key={p.id} className="kpi-card" style={{ background: 'var(--admin-card)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--admin-border)' }}>
                            <div style={{ height: '300px', background: '#222', position: 'relative' }}>
                                {p.images?.[0] ? <img src={p.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>No Image</div>}
                                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#fff' }}>
                                    {typeof p.category === 'object' ? p.category?.name : p.category}
                                </div>
                            </div>

                            <div style={{ padding: '20px' }}>
                                <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}>{p.name}</div>
                                <div style={{ color: 'var(--admin-accent)', fontWeight: 'bold', marginBottom: '20px' }}>₹{p.price}</div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button onClick={() => startEdit(p)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'transparent', color: '#fff', cursor: 'pointer' }}>Edit</button>
                                    <button onClick={() => confirm('Delete?') && deleteProduct(p.id)} style={{ padding: '10px', borderRadius: '8px', border: 'none', background: '#ef444415', color: '#ef4444', cursor: 'pointer' }}>
                                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="admin-glass" style={{ borderRadius: '24px', padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} style={{ height: '4px', flex: 1, background: (step || 1) >= s ? 'var(--admin-accent)' : 'var(--admin-border)', borderRadius: '2px' }}></div>
                        ))}
                    </div>


                    {step === 1 && (
                        <div className="fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Product Category</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                                {categories.map(c => (
                                    <button
                                        key={c.name}
                                        onClick={() => setData({ ...data, type: c.name })}
                                        style={{ padding: '20px', borderRadius: '12px', border: data.type === c.name ? '2px solid var(--admin-accent)' : '1px solid var(--admin-border)', background: data.type === c.name ? 'var(--admin-accent-soft)' : 'transparent', color: '#fff', cursor: 'pointer' }}
                                    >
                                        {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Visual Assets</h3>
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                style={{ height: '200px', border: '2px dashed var(--admin-border)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--admin-accent)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--admin-border)'}
                            >
                                <svg width="40" height="40" fill="none" stroke="#666" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                <span style={{ marginTop: '12px', color: '#666' }}>{imageUploading ? 'Uploading...' : 'Click to upload product images'}</span>
                                <input type="file" ref={fileInputRef} hidden multiple onChange={async (e) => {
                                    setImageUploading(true);
                                    const fd = new FormData();
                                    Array.from(e.target.files).forEach(f => fd.append('images', f));
                                    const urls = await uploadImages(fd);
                                    if (urls) setData({ ...data, images: [...data.images, ...urls] });
                                    setImageUploading(false);
                                }} />
                            </div>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                                {data.images.map((src, i) => (
                                    <div key={i} style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden' }}>
                                        <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <button onClick={() => setData({ ...data, images: data.images.filter((_, idx) => idx !== i) })} style={{ position: 'absolute', top: 2, right: 2, background: 'red', border: 'none', color: '#fff', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', cursor: 'pointer' }}>×</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Product Identity</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Product Title</label>
                                    <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} placeholder="e.g. Premium Silk Blazer" style={{ width: '100%', padding: '14px', background: '#111', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Price (INR)</label>
                                        <input type="number" value={data.price} onChange={e => setData({ ...data, price: e.target.value })} placeholder="4999" style={{ width: '100%', padding: '14px', background: '#111', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Fabric Detail</label>
                                        <input value={data.fabricCare} onChange={e => setData({ ...data, fabricCare: e.target.value })} placeholder="Pure Wool" style={{ width: '100%', padding: '14px', background: '#111', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="fade-in">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Final Polish</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>Marketing Description</label>
                                    <textarea rows={4} value={data.description} onChange={e => setData({ ...data, description: e.target.value })} style={{ width: '100%', padding: '14px', background: '#111', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff', resize: 'none' }} />
                                </div>
                                <button onClick={handleSave} disabled={isSaving} style={{ padding: '16px', background: 'var(--admin-accent)', border: 'none', borderRadius: '12px', color: '#000', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    {isSaving ? 'Processing...' : editingId ? 'Update Masterpiece' : 'Publish Product'}
                                </button>
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <button onClick={() => setStep(s => Math.max(1, s - 1))} style={{ padding: '10px 24px', background: 'transparent', border: 'none', color: '#666', cursor: 'pointer' }}>Back</button>
                        {step < 4 && <button onClick={() => setStep(s => Math.min(4, s + 1))} style={{ padding: '10px 32px', background: '#fff', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>Next</button>}
                    </div>
                </div>
            )}
        </div>
    );
}
