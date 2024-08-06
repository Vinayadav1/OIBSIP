// src/components/Banner/Banner.js
import React, { useState, useEffect } from "react";
import "./Banner.css";
import bannerImages from "../../data/bannerData";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner">
      <img
        src={bannerImages[currentIndex]}
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
