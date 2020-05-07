import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove">&#9932;</span>
  </div>
);

export default CheckoutItem;
