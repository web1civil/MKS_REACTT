import React from 'react';

const Filter = ({ categories, onCategoryChange }) => {
    return (
        <div>
            <h3>Filter by Category</h3>
            <select onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;