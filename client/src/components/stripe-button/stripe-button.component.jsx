import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";

const StripCheckoutButton = ({ price, clearCart }) => {
  const priceForStript = price * 100;
  const publishableKey = "pk_test_7yDyFZxGhUrwFiifmk1GaCrl00PuINpSX3";

  const onToken = (token) => {
    console.log(token);
    clearCart();
  };

  return (
    <StripeCheckout
      name="CRWN Clothing LTD."
      label="Pay Now"
      panelLabel="Pay Now"
      description={`Pay the amount of $${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStript}
      shippingAddress
      billingAddress
      currency="USD"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripCheckoutButton);
