import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CarCard = ({ car }) => {
  return (
    <div className="card shadow-sm">
      <img src={car.image} className="card-img-top" alt={car.name} />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">{car.location}</p>
        <p className="text-success fw-bold">{car.price}</p>
        <button className="btn btn-primary w-100">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;