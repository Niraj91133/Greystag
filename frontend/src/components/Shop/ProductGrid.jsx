import ProductCard from './ProductCard';
export default function PLPGrid({ products: propProducts }) {
    // We should ONLY use propProducts if provided, as the parent (ShopLayout) 
    // handles the filtering, sorting, and mapping.
    const displayProducts = propProducts || [];

    // Function to render grid with injected trust strips
    const renderContent = () => {
        const items = [];
        let productChunk = [];
        displayProducts.forEach((product, index) => {
            productChunk.push(<ProductCard key={product.id || product._id} product={product} />);
            // Inject Trust Strip after every 4 items
            if ((index + 1) % 4 === 0 && index !== displayProducts.length - 1) {
                items.push(...productChunk);
                items.push(<div key={`trust-${index}`} className="micro-trust-strip">
                    <span className="trust-text">Premium Fabric • Tailored Fit • Made in India</span>
                </div>);
                productChunk = [];
            }
        });
        // Push remaining
        if (productChunk.length > 0) {
            items.push(...productChunk);
        }
        return items;
    };
    return (<div className="plp-container">
        <div className="plp-grid">
            {renderContent()}
        </div>
    </div>);
}
