import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStript = price * 100;
  const publishableKey = "pk_test_7yDyFZxGhUrwFiifmk1GaCrl00PuINpSX3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully");
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

export default StripCheckoutButton;
