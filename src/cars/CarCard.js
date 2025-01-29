import React from "react";
import "../styles/App.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Location: {car.location}</p>
      <p>Price: {car.price}</p>
      <p>Available Dates: {car.availableDates.join(", ")}</p>
    </div>
  );
};

export default CarCard;