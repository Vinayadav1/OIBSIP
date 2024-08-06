// src/components/Header/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero-header">
      <div className="header-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to PizzaHub</h1>
        <p className="hero-subtitle">
          Your favorite pizzas delivered hot & fresh
        </p>
        <a href="/order" className="hero-button">
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;
