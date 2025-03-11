import React from 'react';

const ShopProducts = ({ products }) => {
    return (
        <div className="shop-category">
            <h2>{products.name}</h2>
            <p>{products.slug}</p>
            <a href={products.url}>Visit Category</a>
        </div>
    );
};

export default ShopProducts;