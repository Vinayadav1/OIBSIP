// src/components/About/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
            alt="About Us"
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to our pizza delivery service! We pride ourselves on
            delivering the freshest and most delicious pizzas straight to your
            door. Our secret lies in our commitment to quality ingredients and
            our passion for creating mouth-watering pizzas. Whether you're in
            the mood for a classic Margherita or a custom creation with all your
            favorite toppings, we've got you covered.
          </p>
          <p>
            Our journey began with a simple idea: to bring people together over
            great food. Since then, we've grown into a beloved local favorite,
            known for our friendly service and unbeatable taste. Thank you for
            choosing us as your go-to pizza destination. We look forward to
            serving you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
