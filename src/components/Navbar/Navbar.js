// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">PizzaHub</a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Menu</a>
          </li>
          <li>
            <a href="/custom-pizza">Custom Pizza</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
