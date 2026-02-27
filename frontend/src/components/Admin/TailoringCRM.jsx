'use client';
import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useToast } from '@/context/ToastContext';

export default function TailoringCRM() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [editData, setEditData] = useState({});
    const [isSaving, setIsSaving] = useState(false);
    const { showToast } = useToast();

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await api.get('/admin/users');
            setUsers(res.data || []);
        } catch (error) {
            showToast('Failed to load customer profiles', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const startEdit = (user) => {
        setEditingUser(user);
        setEditData(user.measurement || {});
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            await api.post(`/admin/users/${editingUser.id}/measurements`, editData);
            showToast('Measurements updated successfully', 'success');
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            showToast('Failed to save measurements', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const filteredUsers = users.filter(u =>
        (u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.phone?.includes(searchTerm)) &&
        u.role !== 'ADMIN'
    );

    if (loading) return <div className="skeleton" style={{ height: '400px', borderRadius: '16px' }}></div>;

    const mFields = [
        { k: 'chest', l: 'Chest' },
        { k: 'waist', l: 'Waist' },
        { k: 'shoulder', l: 'Shoulder' },
        { k: 'neck', l: 'Neck' },
        { k: 'sleeve', l: 'Sleeve' },
        { k: 'inseam', l: 'Inseam' },
    ];

    return (
        <div className="fade-in">
            <div style={{ marginBottom: '24px' }}>
                <div style={{ position: 'relative', maxWidth: '400px' }}>
                    <svg style={{ position: 'absolute', left: '12px', top: '12px', color: '#666' }} width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input
                        placeholder="Search customers by name, email or phone..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px 10px 40px', background: 'var(--admin-card)', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff' }}
                    />
                </div>
            </div>

            <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                {filteredUsers.map(user => (
                    <div key={user.id} className="admin-glass" style={{ padding: '24px', borderRadius: '20px', border: '1px solid var(--admin-border)', background: 'var(--admin-card)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--admin-accent)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    {user.name?.charAt(0) || 'U'}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{user.name || 'Anonymous'}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-muted)' }}>{user.email}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--admin-accent)', marginTop: '2px' }}>{user.phone || 'No phone set'}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => startEdit(user)}
                                style={{ background: 'transparent', border: '1px solid var(--admin-border)', borderRadius: '8px', padding: '6px 12px', color: '#fff', fontSize: '0.75rem', cursor: 'pointer' }}
                            >
                                Edit Fit
                            </button>
                        </div>

                        <div style={{ background: '#09090b', borderRadius: '12px', padding: '16px', marginTop: '12px' }}>
                            <h5 style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontWeight: '800' }}>Body Measurements</h5>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                {mFields.map((m, i) => (
                                    <div key={i} style={{ padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.55rem', color: '#666', marginBottom: '2px' }}>{m.l}</div>
                                        <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600' }}>
                                            {user.measurement?.[m.k] ? `${user.measurement[m.k]}"` : '-'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {user.measurement?.height && (
                            <div style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                                <span style={{ color: '#444' }}>HEIGHT:</span> {user.measurement.height}
                            </div>
                        )}

                        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--admin-border)', display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                onClick={() => window.open(`https://wa.me/${user.phone}`, '_blank')}
                                style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #25D366', color: '#25D366', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}
                            >
                                WhatsApp Customer
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {editingUser && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ background: '#111', width: '100%', maxWidth: '500px', borderRadius: '24px', border: '1px solid var(--admin-border)', padding: '32px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Edit Fit: {editingUser.name}</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {mFields.map(m => (
                                <div key={m.k}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '8px' }}>{m.l} (Inches)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={editData[m.k] || ''}
                                        onChange={e => setEditData({ ...editData, [m.k]: e.target.value })}
                                        style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid var(--admin-border)', borderRadius: '8px', color: '#fff' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
                            <button onClick={() => setEditingUser(null)} style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid var(--admin-border)', borderRadius: '12px', color: '#fff', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={handleSave} disabled={isSaving} style={{ flex: 1, padding: '12px', background: 'var(--admin-accent)', border: 'none', borderRadius: '12px', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
