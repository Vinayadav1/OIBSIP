// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#custom-pizza">Custom Pizza</a>
            </li>
            <li>
              <a href="#delivery">Delivery</a>
            </li>
            <li>
              <a href="#catering">Catering</a>
            </li>
            <li>
              <a href="#specials">Specials</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Socials</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Others</h3>
          <ul>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
