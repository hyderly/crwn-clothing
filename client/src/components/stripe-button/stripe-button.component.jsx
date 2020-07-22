import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import axios from "axios";

import { clearCart } from "../../redux/cart/cart.actions";

const StripCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_7yDyFZxGhUrwFiifmk1GaCrl00PuINpSX3";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        clearCart();
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      name="CRWN Clothing LTD."
      label="Pay Now"
      panelLabel="Pay Now"
      description={`Pay the amount of $${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStripe}
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
