// src/components/Location/Location.js
import React from "react";
import "./Location.css";
import { locationData } from "../../data/locationData";

const Location = () => {
  return (
    <div className="location">
      <div className="location-map">
        <iframe
          title="Google Map"
          src={locationData.mapEmbedUrl}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="location-details">
        <h2>Our Location</h2>
        <p>{locationData.address}</p>
        <p>Phone: {locationData.phone}</p>
        <p>Email: {locationData.email}</p>
        <p>Opening Hours: {locationData.hours}</p>
      </div>
    </div>
  );
};

export default Location;
