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
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p>Support</p>
            <ul>
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <p>Legal</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        <div className="footer__social">
          <p>Follow Us</p>
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
