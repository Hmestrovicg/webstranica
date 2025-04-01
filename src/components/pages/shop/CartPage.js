import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Shop.css';

const CartPage = () => {

    const [cart, setCart] = useState([]);
    useEffect(
        () => {
            const localCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCart(localCart);
        }
        , []
    );
    const totalPrice = () => {
        let total = 0;
        cart.forEach(
            (item) => {
                total += item.price * item.quantity;
            });
        return total;
    };
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    };
    return (
        <div className="cart-page">
            { /** 
            <div className="page-header">
                <div className="py-5 text-center container">
                    <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <div className="row">
                        <h2 className="col-md-8 m-auto">Cart</h2>
                        <p className="lead col-md-8 m-auto">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                </div>
            </div>
            */}
            <h1 className="cart-title">Cart Page</h1>
            <div className="container py-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Single price</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cartItem) => (
                            <tr key={cartItem.id}>
                                <td><img src={cartItem.thumbnail} alt={cartItem.title} className="cart-item-thumbnail" /></td>
                                <td>{cartItem.title}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.price} EUR</td>
                                <td>{(cartItem.price * cartItem.quantity).toFixed(2)} EUR</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => removeItem(cartItem.id)}>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><h4>Total price</h4></td>
                            <td colSpan="3"></td>
                            <td><span>{(totalPrice()).toFixed(2)} EUR</span></td>
                            <td>
                                <button className="btn btn-warning btn-sm clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <Link to="/checkout" className="btn btn-success">Checkout</Link>
            </div>
        </div>
    );
};

export default CartPage;