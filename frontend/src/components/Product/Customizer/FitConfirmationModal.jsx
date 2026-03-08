"use client";

import React, { useState } from 'react';
import './styles.css';

export default function FitConfirmationModal({ onConfirm, onClose, initialData }) {
    const [step, setStep] = useState(1);
    const [activeGuide, setActiveGuide] = useState(null);

    // STEP 1 STATE
    const [height, setHeight] = useState(initialData?.height || '5\'10"');
    const [shirtSize, setShirtSize] = useState(initialData?.shirtSize || '40');
    const [shoulderType, setShoulderType] = useState(initialData?.shoulderType || null);
    const [preferredFit, setPreferredFit] = useState(initialData?.preferredFit || null);

    // STEP 2 STATE
    const [selectedUpperBody, setSelectedUpperBody] = useState(initialData?.upperBody || null);
    const [selectedLowerBody, setSelectedLowerBody] = useState(initialData?.lowerBody || null);

    // Navigation Logic
    const isStep1Ready = height && shirtSize && shoulderType && preferredFit;
    const isStep2Ready = selectedUpperBody && selectedLowerBody;

    const handleNext = () => {
        if (step === 1 && isStep1Ready)
            setStep(2);
    };

    const handleCalculate = () => {
        if (!isStep2Ready)
            return;
        onConfirm({
            height,
            shirtSize,
            shoulderType,
            preferredFit,
            upperBody: selectedUpperBody,
            lowerBody: selectedLowerBody,
            calculatedSize: 'Custom'
        });
    };

    // Guide Content Generator
    const renderGuideContent = () => {
        switch (activeGuide) {
            case 'Shirt Size':
                return (
                    <div className="guide-box">
                        <h3>Shirt Size Guide</h3>
                        <p>Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                        <table className="guide-table">
                            <thead>
                                <tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>38</td><td>38-39</td><td>32-33</td></tr>
                                <tr><td>40</td><td>40-41</td><td>34-35</td></tr>
                                <tr><td>42</td><td>42-43</td><td>36-37</td></tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'Shoulder Type':
                return (
                    <div className="guide-box">
                        <h3>Shoulder Types</h3>
                        <p><strong>Average:</strong> Shoulders with a standard 15-20 degree slope.</p>
                        <p><strong>Sloping:</strong> Shoulders that drop more significantly from the neck base.</p>
                    </div>
                );
            case 'Preferred Fit':
                return (
                    <div className="guide-box">
                        <h3>Fit Guide</h3>
                        <p><strong>Super Slim:</strong> Extremely close to the body, minimal ease.</p>
                        <p><strong>Tailored:</strong> Structured look with comfortable movement.</p>
                        <p><strong>Regular:</strong> Relaxed fit with classic proportions.</p>
                    </div>
                );
            case 'Body Shape':
                return (
                    <div className="guide-box">
                        <h3>Body Shape Guide</h3>
                        <p>Identify your silhouette for the most accurate pattern adjustments.</p>
                        <p>We use these shapes to adjust the taper of the garment through the chest, waist, and seat.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    // Helper to generate range
    const heights = ['5\'0', '5\'1', '5\'2', '5\'3', '5\'4', '5\'5', '5\'6', '5\'7', '5\'8', '5\'9', '5\'10', '5\'11', '6\'0', '6\'1', '6\'2', '6\'3', '6\'4', '6\'5', '6\'6'];
    const sizes = ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56'];

    return (
        <div className="fit-drawer-overlay" onClick={(e) => {
            if (e.target === e.currentTarget)
                onClose();
        }}>
            <div className="fit-drawer">
                {/* HEADER */}
                <div className="fit-drawer-header">
                    <div className="fit-header-title">
                        Find Your
                        <strong>Perfect Fit</strong>
                    </div>
                    <button className="close-fit-btn" onClick={onClose}>&times;</button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="fit-drawer-content">

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

                    {/* STEP 1: MEASUREMENTS & PREFERENCES */}
                    {step === 1 && (<div className="fit-step-container">
                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Height</div>
                            </div>
                            <div className="circle-grid">
                                {heights.map(h => (<button key={h} className={`circle-btn ${height === h ? 'selected' : ''}`} onClick={() => setHeight(h)}>
                                    {h}
                                </button>))}
                            </div>
                        </div>

                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Shirt Size</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide('Shirt Size')}>Guide</span>
                            </div>
                            <div className="circle-grid">
                                {sizes.map(s => (<button key={s} className={`circle-btn ${shirtSize === s ? 'selected' : ''}`} onClick={() => setShirtSize(s)}>
                                    {s}
                                </button>))}
                            </div>
                        </div>

                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Shoulder Type</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide('Shoulder Type')}>Guide</span>
                            </div>
                            <div className="grid-2-col">
                                {[{ id: 'average', label: 'Average', image: '/assets/fit-guide/shoulder_average.png' },
                                { id: 'sloping', label: 'Sloping', image: '/assets/fit-guide/shoulder_sloping.png' }
                                ].map(item => (<div key={item.id} className={`shape-card ${shoulderType === item.id ? 'selected' : ''}`} onClick={() => setShoulderType(item.id)}>
                                    <div className="shape-illustration-wrapper">
                                        <img src={item.image} alt={item.label} className="shape-image" />
                                    </div>
                                    <span className="shape-label">{item.label}</span>
                                </div>))}
                            </div>
                        </div>

                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Preferred Fit</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide('Preferred Fit')}>Guide</span>
                            </div>
                            <div className="grid-3-col">
                                {[
                                    { id: 'super_slim', label: 'Super Slim', image: '/assets/fit-guide/fit_super_slim.png' },
                                    { id: 'tailored', label: 'Tailored', image: '/assets/fit-guide/fit_tailored.png' },
                                    { id: 'regular', label: 'Regular', image: '/assets/fit-guide/fit_regular.png' }
                                ].map(item => (<div key={item.id} className={`shape-card ${preferredFit === item.id ? 'selected' : ''}`} onClick={() => setPreferredFit(item.id)}>
                                    <div className="shape-illustration-wrapper">
                                        <img src={item.image} alt={item.label} className="shape-image" />
                                    </div>
                                    <span className="shape-label">{item.label}</span>
                                </div>))}
                            </div>
                        </div>
                    </div>)}

                    {/* STEP 2: BODY SHAPE */}
                    {step === 2 && (<div className="fit-step-container">
                        {/* Video removed as per user request */}

                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Upper Body Shape</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide('Body Shape')}>Guide</span>
                            </div>
                            <div className="shape-grid">
                                {[
                                    { id: 'athletic', label: 'Athletic', image: '/assets/fit-guide/upper_athletic.png' },
                                    { id: 'slight-belly', label: 'Slight Belly', image: '/assets/fit-guide/upper_slight_belly.png' },
                                    { id: 'significant-belly', label: 'Significant Belly', image: '/assets/fit-guide/upper_big_belly.png' },
                                ].map((shape) => (<div key={shape.id} className={`shape-card ${selectedUpperBody === shape.id ? 'selected' : ''}`} onClick={() => setSelectedUpperBody(shape.id)}>
                                    <div className="shape-illustration-wrapper">
                                        <img src={shape.image} alt={shape.label} className="shape-image" />
                                    </div>
                                    <span className="shape-label">{shape.label}</span>
                                </div>))}
                            </div>
                        </div>

                        <div className="fit-section">
                            <div className="fit-section-header">
                                <div className="fit-section-title">Select Lower Body Shape</div>
                                <span className="fit-guide-link" onClick={() => setActiveGuide('Body Shape')}>Guide</span>
                            </div>
                            <div className="shape-grid">
                                {[
                                    { id: 'flat', label: 'Flat', image: '/assets/fit-guide/lower_flat.png' },
                                    { id: 'standard', label: 'Standard', image: '/assets/fit-guide/lower_standard.png' },
                                    { id: 'heavy', label: 'Heavy', image: '/assets/fit-guide/lower_heavy.png' },
                                ].map((shape) => (<div key={shape.id} className={`shape-card ${selectedLowerBody === shape.id ? 'selected' : ''}`} onClick={() => setSelectedLowerBody(shape.id)}>
                                    <div className="shape-illustration-wrapper">
                                        <img src={shape.image} alt={shape.label} className="shape-image" />
                                    </div>
                                    <span className="shape-label">{shape.label}</span>
                                </div>))}
                            </div>
                        </div>
                    </div>)}
                </div>

                {/* FOOTER */}
                <div className="fit-drawer-footer">
                    <div className="progress-info">
                        {step === 1 ? 'Step 1 of 2: Details' : 'Step 2 of 2: Shape'}
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: step === 1 ? '50%' : '100%' }}></div>
                    </div>

                    {step === 1 ? (<button className={`calc-size-btn ${isStep1Ready ? 'active' : ''}`} onClick={handleNext} disabled={!isStep1Ready}>
                        Next Step
                    </button>) : (<button className={`calc-size-btn ${isStep2Ready ? 'active' : ''}`} onClick={handleCalculate} disabled={!isStep2Ready}>
                        Calculate Size
                    </button>)}
                </div>
            </div>
        </div>);
}

