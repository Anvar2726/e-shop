import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>E-Shop</h2>
          <p>Your favorite online store</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="footer__icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
