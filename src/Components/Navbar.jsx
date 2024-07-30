import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/about">
            About us 
          </Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <Link style={{ textDecoration: "none" }} to="/">
          Organic Oasis
        </Link>
      </div>
      <div className="login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
        <PiShoppingCartBold style={{fontSize: "2.3rem"}} />
        </Link>
        <div className="cart-count">0</div>
        <Link style={{ textDecoration: "none" }} to="/login">
            <FaRegCircleUser style={{fontSize: "2.3rem"}} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
