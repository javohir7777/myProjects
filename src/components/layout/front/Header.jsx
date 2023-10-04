import { NavLink } from "react-router-dom";

import "./Header.scss";
import logo from "../../../assets/brand/Logo.png";
import { useState } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <header className="sticky-top">
      <div className="container">
        <div className="nav">
          <div className="nav-brand">
            <img src={logo} alt="" />
            <i
              className="fa-solid fa-bars"
              style={{ color: "#ffffff" }}
              onClick={openHamburger}
            ></i>
          </div>
          <div
            className={hamburger ? `nav-menus` : `nav-menus nav-menus__none`}
          >
            <ul className="nav-menu">
              <NavLink className="nav-menu__link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-menu__link" to="/blog">
                Blog post
              </NavLink>
              <NavLink className="nav-menu__link" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-menu__link" to="/register">
                Register
              </NavLink>
            </ul>
            <NavLink className="nav-menu__btn" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
