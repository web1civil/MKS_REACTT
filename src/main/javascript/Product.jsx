import React from 'react';

const Product = ({ name, price, category }) => {
    return (
        <div>
            <h3>{name}</h3>
            {price > 0 && <p>Price: {price}</p>}
            {category && <p>Category: {category}</p>}
        </div>
    );
};

export default Product;