// src/components/Testimonials/Testimonials.js
import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials">
      <FaArrowLeft onClick={prevTestimonial} className="arrow left-arrow" />
      <div className="testimonial-card active">
        <img
          src={testimonialsData[currentIndex].photo}
          alt={testimonialsData[currentIndex].author}
          className="testimonial-photo"
        />
        <p className="testimonial-text">
          {testimonialsData[currentIndex].text}
        </p>
        <p className="testimonial-author">
          {testimonialsData[currentIndex].author}
        </p>
        <p className="testimonial-occupation">
          {testimonialsData[currentIndex].occupation}
        </p>
      </div>
      <FaArrowRight onClick={nextTestimonial} className="arrow right-arrow" />
    </div>
  );
};

export default Testimonials;
