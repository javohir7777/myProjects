import { NavLink } from "react-router-dom";

import "./Header.scss";
import logo from "../../../assets/brand/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const { isAuthenticed } = useContext(AuthContext);

  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <header className="sticky-top">
      <div className="container">
        <div className="nav">
          <div className="nav-brand">
            {isAuthenticed ? (
              <NavLink className="nav-menu__items" to="/my-blogs">
                My blogs
              </NavLink>
            ) : (
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            )}
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
              <NavLink className="nav-menu__link" to="/posts">
                All posts
              </NavLink>
              <NavLink className="nav-menu__link" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-menu__link" to="/register">
                Register
              </NavLink>
            </ul>
            {isAuthenticed ? (
              <NavLink className="nav-menu__btn" to="/account">
                Account
              </NavLink>
            ) : (
              <NavLink className="nav-menu__btn" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
