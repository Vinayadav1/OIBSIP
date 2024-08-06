// src/components/Product/Product.js
import React from "react";
import "./Product.css";

const Product = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      <button className="order-button">Order Now</button>
    </div>
  );
};

export default Product;
