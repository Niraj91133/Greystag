'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
// ProductContext with MERN Stack Integration
import { api } from '@/lib/api';

const ProductContext = createContext(undefined);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Fetch Products from Backend via API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const json = await api.get('/products');
                const productsArray = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : []);
                setProducts(productsArray);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoaded(true);
            }
        };
        fetchProducts();
    }, []);

    const addProduct = async (product) => {
        try {
            const json = await api.post('/products', product);
            const newProduct = json.data || json;
            setProducts(prev => [newProduct, ...prev]);
            return true;
        } catch (error) {
            console.error('Failed to add product:', error);
            return false;
        }
    };

    const updateProduct = async (id, data) => {
        try {
            const json = await api.put(`/products/${id}`, data);
            const updatedProduct = json.data || json;
            setProducts(prev => prev.map(p => (p._id === id || p.id === id) ? updatedProduct : p));
            return true;
        } catch (error) {
            console.error('Failed to update product:', error);
            return false;
        }
    };

    const deleteProduct = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            setProducts(prev => prev.filter(p => (p._id !== id && p.id !== id)));
            return true;
        } catch (error) {
            console.error('Failed to delete product:', error);
            return false;
        }
    };

    const uploadImages = async (formData) => {
        try {
            const json = await api.post('/products/upload', formData);
            return json.data; // Array of URLs
        } catch (error) {
            console.error('Failed to upload images:', error);
            return null;
        }
    };


    const getProduct = (id) => products.find(p => (p._id === id || p.id === id));

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProduct, uploadImages, isLoaded }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}
