import React from "react";

import "./custom-button.styles.scss";

//import { CustomButtonSyles } from "./custom-button";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  disabled,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} 
    ${disabled ? "disabled" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
