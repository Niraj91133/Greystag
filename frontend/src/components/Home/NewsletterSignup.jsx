'use client';
export default function Newsletter() {
    return (<section className="newsletter-section">
            <div className="newsletter-wrap">
                <h3 className="serif">Join the Inner Circle</h3>
                <p>Early access to collections and exclusive editorial content.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Your email address" aria-label="Email"/>
                    <button type="submit" className="btn-secondary">Subscribe</button>
                </form>
            </div>
        </section>);
}
