import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { clearCart } from "../../redux/cart/cart.actions";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total, clearCart }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    ) : (
      <h1>NO ITEMS IN CART</h1>
    )}

    <div className="total">{total ? ` $${total}` : ""}</div>

    {cartItems.length ? (
      <CustomButton onClick={() => clearCart()}>Clear Cart</CustomButton>
    ) : null}
    {cartItems.length ? <StripCheckoutButton price={total} /> : null}
    {cartItems.length ? (
      <div>
        <div className="test-warning">
          *Please use this credit card information for testing*
          <br />
          4242 4242 4242 4242 - Exp: 12/23 - Cvv:123
        </div>
      </div>
    ) : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
