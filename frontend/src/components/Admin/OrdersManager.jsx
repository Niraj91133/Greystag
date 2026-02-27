'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { api } from '@/lib/api';
import { useToast } from '@/context/ToastContext';

export default function OrdersManager() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { showToast } = useToast();

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const json = await api.get('/orders');
            setOrders(json.data || []);
        } catch (error) {
            showToast('Failed to load orders', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateStatus = async (orderId, newStatus) => {
        try {
            await api.patch(`/orders/${orderId}/status`, { status: newStatus });
            showToast(`Order status updated to ${newStatus}`, 'success');

            // Re-fetch all orders to keep list in sync
            await fetchOrders();

            // Update the local selectedOrder state to reflect the change in modal
            setOrders(prev => {
                const updated = prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
                const found = updated.find(o => o.id === orderId);
                if (found) setSelectedOrder(found);
                return updated;
            });
        } catch (error) {
            showToast('Update failed', 'error');
        }
    };

    const deleteOrder = async (orderId) => {
        if (!window.confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;
        try {
            await api.delete(`/orders/${orderId}`);
            showToast('Order deleted successfully', 'success');
            setSelectedOrder(null);
            fetchOrders();
        } catch (error) {
            showToast('Delete failed', 'error');
        }
    };

    const filteredOrders = useMemo(() => {
        return orders.filter(order => {
            const matchesSearch =
                order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.user?.phone?.includes(searchTerm);
            const matchesStatus = statusFilter === 'ALL' || order.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [orders, searchTerm, statusFilter]);

    const getStatusStyle = (status) => {
        const colors = {
            'DELIVERED': { bg: '#4ade8015', text: '#4ade80', dot: '#4ade80' },
            'PENDING': { bg: '#fbbf2415', text: '#fbbf24', dot: '#fbbf24' },
            'PAID': { bg: '#60a5fa15', text: '#60a5fa', dot: '#60a5fa' },
            'SHIPPED': { bg: '#818cf815', text: '#818cf8', dot: '#818cf8' },
            'CANCELLED': { bg: '#ef444415', text: '#ef4444', dot: '#ef4444' },
            'IN_PRODUCTION': { bg: '#d4af3715', text: '#d4af37', dot: '#d4af37' }
        };
        return colors[status] || { bg: '#27272a', text: '#a1a1aa', dot: '#a1a1aa' };
    };

    if (loading) return <div className="skeleton" style={{ height: '400px', borderRadius: '16px' }}></div>;

    return (
        <div className="fade-in">
            {/* Filter & Actions Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                    <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                        <svg style={{ position: 'absolute', left: '12px', top: '12px', color: '#666' }} width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input
                            placeholder="Find orders by customer, ID or phone..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px 10px 40px', background: 'var(--admin-card)', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff' }}
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                        style={{ padding: '10px 16px', background: 'var(--admin-card)', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}
                    >
                        <option value="ALL">All Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="PAID">Paid</option>
                        <option value="IN_PRODUCTION">In Production</option>
                        <option value="SHIPPED">Shipped</option>
                        <option value="DELIVERED">Delivered</option>
                        <option value="CANCELLED">Cancelled</option>
                    </select>
                </div>
                <button onClick={fetchOrders} style={{ padding: '10px 20px', background: 'transparent', border: '1px solid var(--admin-border)', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>Export CSV</button>
            </div>

            {/* Premium Table */}
            <div className="admin-table-container admin-glass">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => {
                            const style = getStatusStyle(order.status);
                            return (
                                <tr key={order.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedOrder(order)}>
                                    <td style={{ fontWeight: '600' }}>#{order.id.substring(0, 8)}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>{order.user?.name?.charAt(0) || 'U'}</div>
                                            <div>
                                                <div style={{ fontWeight: '500' }}>{order.user?.name || 'Guest'}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>{order.user?.phone || 'No Phone'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '6px', background: style.bg, color: style.text, fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: style.dot }}></div>
                                                {order.status}
                                            </div>
                                            <select
                                                value={order.status}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    updateStatus(order.id, e.target.value);
                                                }}
                                                style={{
                                                    background: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '0.65rem', padding: '2px 4px', borderRadius: '4px', cursor: 'pointer'
                                                }}
                                            >
                                                <option value="PENDING">PENDING</option>
                                                <option value="PAID">PAID</option>
                                                <option value="IN_PRODUCTION">IN_PRODUCTION</option>
                                                <option value="SHIPPED">SHIPPED</option>
                                                <option value="DELIVERED">DELIVERED</option>
                                                <option value="CANCELLED">CANCELLED</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td style={{ fontWeight: '600' }}>₹{Number(order.total).toLocaleString()}</td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedOrder(order);
                                                }}
                                                style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px', borderRadius: '6px', fontSize: '0.7rem' }}
                                            >
                                                VIEW
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteOrder(order.id);
                                                }}
                                                style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px', borderRadius: '6px', fontSize: '0.7rem' }}
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
                {filteredOrders.length === 0 && <div style={{ padding: '60px', textAlign: 'center', color: '#666' }}>No orders matching your filters were found.</div>}
            </div>

            {/* COMPACT PREMIUM CENTERED MODAL */}
            {selectedOrder && (
                <div style={{
                    position: 'fixed', inset: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    zIndex: 999999999, padding: '20px',
                    backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(40px)',
                    animation: 'fadeIn 0.2s ease'
                }}>
                    <div onClick={() => setSelectedOrder(null)} style={{ position: 'absolute', inset: 0 }} />

                    <div className="admin-glass" style={{
                        position: 'relative', width: '100%', maxWidth: '1000px',
                        maxHeight: '85vh', overflow: 'hidden',
                        background: '#09090b', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 60px 120px -30px rgba(0, 0, 0, 1)',
                        animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '18px 30px', borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            background: 'rgba(9, 9, 11, 0.98)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
                            position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(15px)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ fontSize: '1.2rem' }}>📦</div>
                                <div>
                                    <div style={{ fontSize: '0.6rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px' }}>DASHBOARD / ORDERS</div>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#fff' }}>Order #{selectedOrder.id.substring(0, 8).toUpperCase()}</h3>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <button
                                    onClick={() => deleteOrder(selectedOrder.id)}
                                    style={{ padding: '6px 12px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}
                                >DELETE ORDER</button>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        value={selectedOrder.status}
                                        onChange={(e) => updateStatus(selectedOrder.id, e.target.value)}
                                        style={{
                                            padding: '6px 28px 6px 14px', borderRadius: '100px',
                                            background: getStatusStyle(selectedOrder.status).bg,
                                            color: getStatusStyle(selectedOrder.status).text,
                                            fontSize: '0.7rem', fontWeight: 'bold',
                                            border: 'none', appearance: 'none', cursor: 'pointer',
                                            outline: 'none', textAlign: 'center'
                                        }}
                                    >
                                        <option value="PENDING">PENDING</option>
                                        <option value="PAID">PAID</option>
                                        <option value="IN_PRODUCTION">PRODUCTION</option>
                                        <option value="SHIPPED">SHIPPED</option>
                                        <option value="DELIVERED">DELIVERED</option>
                                        <option value="CANCELLED">CANCELLED</option>
                                    </select>
                                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: getStatusStyle(selectedOrder.status).text, fontSize: '0.6rem', opacity: 0.6 }}>▼</div>
                                </div>
                                <button onClick={() => setSelectedOrder(null)} style={{ border: 'none', background: 'none', color: '#999', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
                            </div>
                        </div>

                        {/* Modal Body - Dense 3-Column Layout */}
                        <div className="modal-body-scroll" style={{
                            padding: '24px 30px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)',
                            gap: '24px', flex: 1, overflowY: 'auto'
                        }}>

                            {/* COLUMN 1: Items Overview (Highest priority to shrink) */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <section>
                                    <h5 style={{ color: '#444', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontWeight: '800' }}>Review Order Items</h5>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        {selectedOrder.orderItems.map((item, i) => (
                                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '50px 1fr auto', gap: '12px', alignItems: 'center', padding: '12px', background: '#09090b' }}>
                                                <div style={{ width: '50px', height: '65px', background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
                                                    <img src={item.product?.images?.[0] || item.product?.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ minWidth: 0 }}>
                                                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.product?.name}</div>
                                                    <div style={{ color: '#666', fontSize: '0.75rem' }}>Size: {item.size || 'M'} · Qty: {item.quantity}</div>
                                                </div>
                                                <div style={{ textAlign: 'right', color: 'var(--admin-accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>₹{(Number(item.price) * item.quantity).toLocaleString()}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '15px', padding: '15px', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.02)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <span style={{ color: '#666', fontSize: '0.8rem' }}>Subtotal Items</span>
                                            <span style={{ color: '#fff', fontSize: '0.8rem' }}>₹{Number(selectedOrder.total).toLocaleString()}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                                            <span style={{ color: '#999', fontSize: '0.75rem', fontWeight: '600' }}>TOTAL AMOUNT</span>
                                            <span style={{ color: 'var(--admin-accent)', fontSize: '1.2rem', fontWeight: 'bold' }}>₹{Number(selectedOrder.total).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* COLUMN 2: Logistics & Contact */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <section>
                                    <h5 style={{ color: '#444', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontWeight: '800' }}>Logistics & Contact</h5>
                                    <div style={{ padding: '18px', borderRadius: '16px', background: '#121214', border: '1px solid rgba(255,255,255,0.04)' }}>
                                        <div style={{ fontWeight: '600', fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>{selectedOrder.user?.name || 'Guest User'}</div>
                                        <div style={{ color: 'var(--admin-accent)', fontSize: '0.75rem', marginBottom: '14px' }}>{selectedOrder.user?.email}</div>

                                        <div style={{ color: '#888', lineHeight: '1.6', fontSize: '0.85rem', marginBottom: '16px' }}>
                                            <span style={{ color: '#444', fontSize: '0.7rem', display: 'block', marginBottom: '4px' }}>DELIVERY TO:</span>
                                            {selectedOrder.shippingAddress?.line1}
                                            <br />
                                            <span style={{ fontWeight: 'bold', color: '#666' }}>{selectedOrder.shippingAddress?.city}, {selectedOrder.shippingAddress?.pincode}</span>
                                        </div>

                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <a href={`tel:${selectedOrder.user?.phone}`} style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#fff', textDecoration: 'none', textAlign: 'center', fontSize: '0.7rem' }}>CALL</a>
                                            <button
                                                onClick={() => window.open(`https://wa.me/${selectedOrder.user?.phone}?text=Hello ${selectedOrder.user?.name}, your order #${selectedOrder.id.substring(0, 8)} is now: ${selectedOrder.status}.`, '_blank')}
                                                style={{ flex: 1.5, padding: '10px', background: '#25D366', borderRadius: '8px', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 'bold' }}
                                            >WHATSAPP</button>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* COLUMN 3: Tailoring Archive & Workflow */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <section>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <h5 style={{ color: '#444', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', margin: 0 }}>Technical Profile</h5>
                                        <button
                                            onClick={async () => {
                                                const m = selectedOrder.user?.measurement || {};
                                                const fields = ['chest', 'waist', 'shoulder', 'neck', 'sleeve', 'inseam'];
                                                const newData = { ...m };
                                                let changed = false;

                                                for (const f of fields) {
                                                    const val = prompt(`Enter ${f.toUpperCase()} (inches):`, m[f] || '');
                                                    if (val !== null && val !== String(m[f])) {
                                                        newData[f] = parseFloat(val);
                                                        changed = true;
                                                    }
                                                }

                                                if (changed) {
                                                    try {
                                                        await api.post(`/admin/users/${selectedOrder.user.id}/measurements`, newData);
                                                        showToast('Measurements updated!', 'success');
                                                        fetchOrders();
                                                    } catch (e) {
                                                        showToast('Failed to update', 'error');
                                                    }
                                                }
                                            }}
                                            style={{ background: 'transparent', border: '1px solid #333', color: '#fff', fontSize: '0.6rem', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer' }}
                                        >
                                            EDIT FIT
                                        </button>
                                    </div>
                                    <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.1)', borderRadius: '16px', padding: '18px' }}>
                                        {selectedOrder.user?.measurement ? (
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                                {[
                                                    { l: 'Chest', v: selectedOrder.user.measurement.chest, s: '"' },
                                                    { l: 'Waist', v: selectedOrder.user.measurement.waist, s: '"' },
                                                    { l: 'Shoulder', v: selectedOrder.user.measurement.shoulder, s: '"' },
                                                    { l: 'Neck', v: selectedOrder.user.measurement.neck, s: '"' },
                                                    { l: 'Sleeve', v: selectedOrder.user.measurement.sleeve, s: '"' },
                                                    { l: 'Inseam', v: selectedOrder.user.measurement.inseam, s: '"' },
                                                    { l: 'Height', v: selectedOrder.user.measurement.height },
                                                    { l: 'Fit', v: selectedOrder.user.measurement.preferredFit?.replace('_', ' ') },
                                                    { l: 'Shoulder', v: selectedOrder.user.measurement.shoulderType },
                                                    { l: 'Upper Body', v: selectedOrder.user.measurement.upperBodyShape?.replace('-', ' ') },
                                                    { l: 'Lower Body', v: selectedOrder.user.measurement.lowerBodyShape?.replace('-', ' ') }
                                                ].map((m, idx) => m.v ? (
                                                    <div key={idx} style={{ padding: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                                                        <div style={{ fontSize: '0.55rem', color: '#555', textTransform: 'uppercase', marginBottom: '2px' }}>{m.l}</div>
                                                        <div style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{m.v}{m.s || ''}</div>
                                                    </div>
                                                ) : null)}
                                            </div>
                                        ) : (
                                            <div style={{ textAlign: 'center', color: '#444', fontStyle: 'italic', fontSize: '0.75rem' }}>Using standard brand fit.</div>
                                        )}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalSlideUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .modal-body-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .modal-body-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .modal-body-scroll::-webkit-scrollbar-thumb {
                    background: #222;
                    border-radius: 10px;
                }
                .modal-body-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: #222 transparent;
                }
            `}</style>
        </div>
    );
}
