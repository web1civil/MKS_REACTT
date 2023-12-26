import React, { useState } from 'react';
import Filter from './Filter';
import Product from './Product';
import LazyComponent from './LazyComponent';

const Catalog = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 20, category: 'Category A' },
        { id: 2, name: 'Product 2', price: 30, category: 'Category B' },
        // Add more products as needed
    ]);

    const [filteredCategory, setFilteredCategory] = useState('');

    const categories = [...new Set(products.map((product) => product.category))];

    const handleCategoryChange = (category) => {
        setFilteredCategory(category);
    };

    const filteredProducts = filteredCategory
        ? products.filter((product) => product.category === filteredCategory)
        : products;

    return (
        <div>
            <h2>Online Catalog</h2>
            <Filter categories={categories} onCategoryChange={handleCategoryChange} />
            <div>
                {filteredProducts.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <VirtualElements />
            <LazyComponent />
        </div>
    );
};

export default Catalog;