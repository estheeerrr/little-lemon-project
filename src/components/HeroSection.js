import React from "react";
import { Link } from "react-router-dom";
import RestaurantFood from "../images/restauranfood.jpg";


function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations" id="button" aria-label="On Click">
            Reserve a Table
        </Link>
      </div>
      <div className="hero-img">
        <img src={RestaurantFood} alt="restaurantFood" />
      </div>
    </div>
  );
}

export default HeroSection;