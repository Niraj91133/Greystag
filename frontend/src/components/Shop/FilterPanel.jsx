import React, { useState } from 'react';
const FILTERS = {
    Size: ['S', 'M', 'L', 'XL'],
    Color: ['Black', 'White', 'Navy', 'Beige'],
    Fit: ['Slim', 'Regular', 'Relaxed']
};
const SORT_OPTIONS = [
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
];
export default function FilterBar({ activeFilters, onFilterChange, onSort }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (type) => {
        setOpenDropdown(prev => prev === type ? null : type);
    };
    return (<div className="filter-bar">
            {/* Desktop Filters */}
            <div className="filter-group">
                {/* Removed dead "Filter" button */}

                {Object.entries(FILTERS).map(([key, options]) => (<div key={key} style={{ position: 'relative' }}>
                        <button className={`filter-btn ${openDropdown === key ? 'active' : ''}`} onClick={() => toggleDropdown(key)}>
                            {key} <span style={{ fontSize: '10px' }}>▼</span>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === key && (<div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    background: '#0f0f0f',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '12px',
                    minWidth: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    zIndex: 1000, /* Ensure high z-index */
                    borderRadius: '4px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}>
                                {options.map(option => (<label key={option} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#fff', fontSize: '14px', whiteSpace: 'nowrap' }}>
                                        <input type="checkbox" checked={activeFilters?.[key]?.includes(option) || false} onChange={() => {
                        onFilterChange?.(key, option);
                        setOpenDropdown(null); // Auto-close as requested
                    }} style={{ accentColor: '#ffffffff' }}/>
                                        {option}
                                    </label>))}
                            </div>)}
                    </div>))}
            </div>

            {/* Sort Dropdown (Replaced simple button) */}
            <div style={{ position: 'relative', marginLeft: 'auto' }}>
                <button className="filter-btn sort-btn" onClick={() => toggleDropdown('Sort')}>
                    Sort <span style={{ fontSize: '10px' }}>▼</span>
                </button>

                {openDropdown === 'Sort' && (<div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '12px',
                minWidth: '180px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 1000,
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
                        {SORT_OPTIONS.map(opt => (<button key={opt.value} onClick={() => { onSort?.(opt.value); toggleDropdown('Sort'); }} style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '14px',
                    padding: '4px 0',
                    opacity: 0.8
                }}>
                                {opt.label}
                            </button>))}
                    </div>)}
            </div>

            {/* Mobile Filter Drawer Control */}
            <div className="mobile-filter-pills">
                {/* Left: Filter Box */}
                <button className="mobile-filter-box" onClick={() => setOpenDropdown('MobileFilter')}>
                    <span style={{ marginRight: '8px' }}>Filter</span>
                    {Object.values(activeFilters || {}).flat().length > 0 && (<span className="filter-count">
                            {Object.values(activeFilters || {}).flat().length}
                        </span>)}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>

                {/* Right: Sort Button + Dropdown */}
                <div style={{ position: 'relative' }}>
                    <button className="mobile-sort-btn" onClick={() => toggleDropdown('MobileSort')}>
                        Sort <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>
                    </button>

                    {/* Anchor Dropdown specifically for Mobile Button */}
                    {openDropdown === 'MobileSort' && (<div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                background: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '12px',
                minWidth: '160px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 1000,
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
                            {SORT_OPTIONS.map(opt => (<button key={opt.value} onClick={() => { onSort?.(opt.value); setOpenDropdown(null); }} style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '14px',
                    padding: '8px', // larger touch target
                    opacity: 0.9,
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                                    {opt.label}
                                </button>))}
                        </div>)}
                </div>
            </div>

            {/* Mobile Sort Menu (Simple dropdown below button for now or reusing desktop logic above) */}

            {/* MOBILE FILTER DRAWER OVERLAY */}
            {openDropdown === 'MobileFilter' && (<>
                    <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 200,
                backdropFilter: 'blur(4px)'
            }} onClick={() => setOpenDropdown(null)}/>
                    <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#1a1a1a',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                padding: '24px',
                zIndex: 201,
                maxHeight: '80vh',
                overflowY: 'auto',
                animation: 'slideUp 0.3s ease-out'
            }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0 }}>Filters</h3>
                            <button onClick={() => setOpenDropdown(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {Object.entries(FILTERS).map(([key, options]) => (<div key={key}>
                                    <h4 style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{key}</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {options.map(option => {
                    const isActive = activeFilters?.[key]?.includes(option);
                    return (<button key={option} onClick={() => onFilterChange?.(key, option)} style={{
                            padding: '8px 16px',
                            borderRadius: '99px',
                            border: isActive ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.2)',
                            background: isActive ? '#d4af37' : 'transparent',
                            color: isActive ? '#000' : '#fff',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}>
                                                    {option}
                                                </button>);
                })}
                                    </div>
                                </div>))}
                        </div>

                        <button onClick={() => setOpenDropdown(null)} style={{
                width: '100%',
                marginTop: '32px',
                padding: '16px',
                background: '#f4f2ee',
                color: '#000',
                border: 'none',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 600
            }}>
                            Show Results
                        </button>
                    </div>
                </>)}
        </div>);
}
