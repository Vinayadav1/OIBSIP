import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing you with the best products and
            services. Our mission is to ensure customer satisfaction through
            quality and reliability.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>1234 Elm Street, Springfield, IL</p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" className="social-icon">
              Facebook
            </a>
            <a href="#" className="social-icon">
              Twitter
            </a>
            <a href="#" className="social-icon">
              Instagram
            </a>
            <a href="#" className="social-icon">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
