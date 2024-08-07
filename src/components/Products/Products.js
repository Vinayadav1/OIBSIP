// src/components/Products/Products.js
import React from "react";
import pizzaData from "../../data/pizzaData";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <section className="products-section" id="menu">
      <h2 className="products-heading">Our Pizzas</h2>
      <div className="products-container">
        {pizzaData.map((pizza) => (
          <Product
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
// products
