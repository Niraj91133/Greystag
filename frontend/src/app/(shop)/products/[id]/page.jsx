import React from 'react';
import ProductDetailClient from '@/components/Product/ProductDetailView';
import { api } from '@/lib/api';

// Use dynamic rendering for product pages
export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
    const { id } = await params;
    let productProp = null;

    // Fetch from Backend API using centralized client
    try {
        const response = await api.get(`/products/${id}`);
        const productDoc = response.data;

        if (productDoc) {
            // Map Backend Data to shape expected by Client Component
            productProp = {
                id: (productDoc.id || productDoc._id).toString(),
                name: productDoc.name,
                price: `₹${productDoc.price}`,
                image: (productDoc.images && productDoc.images.length > 0) ? productDoc.images[0] : '/images/placeholder.jpg',
                images: productDoc.images || [],
                category: productDoc.category,
                size: productDoc.sizes || [],
                color: (productDoc.colors && productDoc.colors.length > 0) ? productDoc.colors[0] : 'Midnight Black',
                tags: productDoc.occasions || [],
                fit: 'Regular',
                description: productDoc.description,
                fabric: productDoc.fabric
            };
        }
    } catch (error) {
        console.error("🚨 [Product Page] Backend fetch failed:", error.message);
        productProp = { id, notFound: true };
    }

    if (!productProp) {
        productProp = { id, notFound: true };
    }

    return <ProductDetailClient product={productProp} />;
}
