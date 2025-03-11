import React from 'react';

const ShopCategory = ({ category }) => {
    return (
        <div className="shop-category">
            <img src={'/././img/200.png'} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.slug}</p>
            <a href={category.url}>Visit Category</a>
        </div>
    );
};

export default ShopCategory;