import ProductCard from './ProductCard';

export default function PLPGrid({ products }) {
    const displayProducts = products || [];

    return (
        <div className="plp-grid">
            {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
