'use client';
import { useState } from 'react';
const FAQ_ITEMS = [
    { q: "What material is used for the shirts?", a: "We use 100% Giza Cotton, sourced ethically and woven in small batches to ensure maximum breathability and durability." },
    { q: "Do you offer custom tailoring?", a: "Currently we offer standard premium sizing. However, we do undertake bespoke commissions for select clients." },
    { q: "Shipping and Delivery timelines?", a: "All metropolitan orders are delivered within 3-5 business days. International shipping takes 7-10 days." }
];
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };
    return (<section className="faq-section">
            <div className="faq-header">
                <h2 className="serif">Frequently Asked Questions</h2>

            </div>

            {FAQ_ITEMS.map((item, i) => (<div key={i} className={`faq-item ${openIndex === i ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggle(i)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <span>{item.q}</span>
                        <span className="faq-icon" style={{
                transform: openIndex === i ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease'
            }}>+</span>
                    </button>
                    <div className="faq-answer-wrapper" style={{
                display: 'grid',
                gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.3s ease-out'
            }}>
                        <div className="faq-answer" style={{ overflow: 'hidden' }}>
                            <div style={{ paddingBottom: '24px' }}>
                                {item.a}
                            </div>
                        </div>
                    </div>
                </div>))}
        </section>);
}
