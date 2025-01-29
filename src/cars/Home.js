import React, { useState } from "react";
import carsData from "../utils/carsData";
import CarCard from "./CarCard";
import SearchBar from "./SearchBar";

const Home = () => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleSearch = (query) => {
    const filtered = carsData.filter((car) =>
      car.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      <h1>Find Your Rental Car</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;