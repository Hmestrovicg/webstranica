import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductSingle.css';

const ProductSingle = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) {
        return <p className="loading-message">Loading...</p>;
    }

    return (
        <div className="product-single">
            <div className="product-single-header">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">Price: {product.price} EUR</p>
            </div>
            <div className="product-single-body">
                <img className="product-image" src={product.thumbnail} alt={product.title} />
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductSingle;