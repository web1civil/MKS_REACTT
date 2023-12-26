import React from 'react';

const Product = ({ name, price, category }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default Product;