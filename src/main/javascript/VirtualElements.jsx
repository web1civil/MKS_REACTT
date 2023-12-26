import React from 'react';

const VirtualElements = () => {
    const data = [
        { id: 1, text: 'Element 1' },
        { id: 2, text: 'Element 2' },
        { id: 3, text: 'Element 3' },
    ];

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};

export default VirtualElements;