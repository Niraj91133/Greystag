"use client";

import React, { useState } from 'react';
import './styles.css';
import { CUSTOMIZATION_OPTIONS } from './CustomizationData';

export default function CustomizationOverlay({ productType, productImage, productName, productPrice, onClose, onComplete }) {
    const [activeGuide, setActiveGuide] = useState(null);

    // Determine the safe key for options (fallback to 'Default' or 'Shirt' if not found)
    const optionsKey = CUSTOMIZATION_OPTIONS[productType] ? productType : 'Shirt';
    const options = CUSTOMIZATION_OPTIONS[optionsKey];

    // Initialize state with defaults
    const [selections, setSelections] = useState(() => {
        const init = {};
        options.forEach(opt => {
            const defaultChoice = opt.choices.find(c => c.recommended) || opt.choices[0];
            init[opt.id] = defaultChoice.id;
        });
        return init;
    });

    const handleSelect = (optionId, choiceId) => {
        setSelections(prev => ({ ...prev, [optionId]: choiceId }));
    };

    const handleDone = () => {
        onComplete(selections);
    };

    const renderGuideContent = () => {
        switch (activeGuide) {
            case 'Collar':
                return <div className="guide-box"><p>Classic is versatile. Spread is modern for wider ties. Button-down is casual.</p></div>;
            case 'Cuffs':
                return <div className="guide-box"><p>Single is standard. Double (French) requires cufflinks for formal wear.</p></div>;
            case 'Fabric':
                return <div className="guide-box"><p>Egyptian Cotton is breathable. Italian Linen is perfect for summer. Oxford is durable.</p></div>;
            case 'Fit':
                return <div className="guide-box"><p>Regular for comfort. Slim for a modern silhouette. Relaxed for maximum ease.</p></div>;
            default:
                return <div className="guide-box"><p>Selection guide for {activeGuide}. Choose the option that best fits your style.</p></div>;
        }
    };

    return (
        <div className="customizer-overlay">
            {/* LEFT: VISUALIZATION */}
            <div className="customizer-visual">
                <img src={productImage} alt="Product Visualization" className="visual-product-img" />

                {/* Dynamic Annotations based on selection (Mock) */}
                <div className="visual-annotation" style={{ top: '20%', right: '20%' }}>
                    {options.find(o => o.id === 'collar')?.choices.find(c => c.id === selections['collar'])?.label || 'Custom Fit'}
                </div>
                <div className="visual-annotation" style={{ bottom: '20%', left: '20%' }}>
                    {options.find(o => o.id === 'fabric')?.choices.find(c => c.id === selections['fabric'])?.label || 'Premium Fabric'}
                </div>
            </div>

            {/* RIGHT: CONTROLS */}
            <div className="customizer-sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-title">Design Your {productType}</div>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="sidebar-content">
                    {/* GUIDE OVERLAY */}
                    {activeGuide && (
                        <div className="inline-guide-overlay">
                            <div className="guide-header">
                                <span>{activeGuide} Info</span>
                                <button onClick={() => setActiveGuide(null)}>&times;</button>
                            </div>
                            {renderGuideContent()}
                        </div>
                    )}

                    {options.map((option) => (
                        <div key={option.id} className="customization-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div className="group-label" style={{ marginBottom: 0 }}>{option.label}</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide(option.label)}>Guide</span>
                            </div>

                            {/* RENDER BASED ON TYPE */}
                            {option.type === 'toggle' && (
                                <div className="toggle-wrapper">
                                    {option.choices.map(choice => (
                                        <div key={choice.id} className={`toggle-option ${selections[option.id] === choice.id ? 'selected' : ''}`} onClick={() => handleSelect(option.id, choice.id)}>
                                            {choice.label}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {option.type === 'card' && (
                                <div className="options-grid">
                                    {option.choices.map(choice => (
                                        <div key={choice.id} className={`option-card ${selections[option.id] === choice.id ? 'selected' : ''}`} onClick={() => handleSelect(option.id, choice.id)}>
                                            <span className="option-label">{choice.label}</span>
                                            {choice.recommended && <span className="recommended-tag">Recommended</span>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {option.type === 'swatch' && (
                                <div className="swatch-grid">
                                    {option.choices.map(choice => (
                                        <div key={choice.id} className={`swatch ${selections[option.id] === choice.id ? 'selected' : ''}`} style={{ backgroundColor: choice.color }} title={choice.label} onClick={() => handleSelect(option.id, choice.id)} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="sidebar-footer">
                    <div className="price-summary">
                        <span>Total</span>
                        <span>{productPrice}</span>
                    </div>
                    <button className="cust-action-btn" onClick={handleDone}>
                        Save & Continue
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '12px', color: '#666', fontSize: '0.8rem' }}>
                        Visuals are for reference. Actual product may vary slightly.
                    </div>
                </div>
            </div>
        </div>
    );
}

