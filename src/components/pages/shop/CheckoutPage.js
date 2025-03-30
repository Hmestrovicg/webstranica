import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  const totalPrice = () => {
    return cart
      .reduce((total, item) => total + ((item.price ?? 0) * (item.quantity ?? 1)), 0)
      .toFixed(2);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generiramo jedinstveni ID narudžbe
    const orderId = Date.now().toString();

    // Kreiramo podatke narudžbe
    const orderData = { id: orderId, ...formData, cart, totalPrice: totalPrice() };

    // Dohvatimo postojeće narudžbe i dodamo novu
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, orderData]));

    alert("Order saved! Redirecting to order review.");

    // Preusmjeravanje na stranicu pregleda narudžbe
    navigate(`/single-order/${orderId}`);
  };

  return (
    <div className="checkout container">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price ?? 0).toFixed(2)} EUR</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: {totalPrice()} EUR</h3>

          <hr className="my-4"></hr>
          <h2 className="mb-3">Billing address</h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <hr className="my-4"></hr>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" />
              <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" for="save-info">Save this information for next time</label>
            </div>
            <hr className="my-4"></hr>
            <h2 className="mb-3">Payment</h2>
            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                <label className="form-check-label" for="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                <label className="form-check-label" for="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                <label className="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <label for="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6">
                <label for="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                <div className="invalid-feedback">Credit card number is required</div>
              </div>
              <div className="col-md-3">
                <label for="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3">
                <label for="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr className="my-4"></hr>
            <button type="submit" className="btn btn-success">Continue to checkout</button>
            <hr className="my-4"></hr>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
