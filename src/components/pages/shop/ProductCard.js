import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            productInCart.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }
        cart.push({
            id: product.id,
            thumbnail: product.thumbnail,
            title: product.title,
            price: product.price,
            quantity: 1
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        onAddToCart();
    }

    return (
        <div className="productCard card" key={product.id}>
            <div className="product-image">
                <Link to={'/shop/' + product.id}>
                    <img src={product.thumbnail} className="card-img" alt={product.title} />
                </Link>
                <Link to={'/shop/' + product.id}>
                    <h4 className="card-title">{product.title}</h4>
                </Link>
                <p className="card-text">
                    {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                </p>
                <button onClick={addToCart} className="btn btn-success price"><strong>{product.price} EUR </strong></button>
            </div>
        </div>
    )
}

export default ProductCard;