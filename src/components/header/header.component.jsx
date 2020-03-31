import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
// get svg from enternal file with special react syntax
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/contact" className="option">
        Contact
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SignOut
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
    </div>
  </div>
);

export default Header;
