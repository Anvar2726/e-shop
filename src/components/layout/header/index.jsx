import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";

import "./style.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const menuRef = useRef(null);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartProducts } = useSelector((state) => state.cartProducts);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav container">
        <NavLink to="/" className="header__logo">
          E-Shop
        </NavLink>

        <button className="header__hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul ref={menuRef} className={`header__menu ${isMobileMenuOpen ? "open-menu" : ""}`}>
          <li>
            <NavLink className="header__link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link header__cart" to="/cart">
              Cart <TiShoppingCart />
              <span>{cartProducts?.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/favorite">
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
