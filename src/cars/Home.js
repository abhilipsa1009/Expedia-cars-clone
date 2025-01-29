import React, { useState } from "react";
import carsData from "../utils/carsData";
import CarCard from "../cars/CarCard";
import SearchBar from "../cars/SearchBar";

const Home = () => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleSearch = (query) => {
    const filtered = carsData.filter((car) =>
      car.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Find Your Rental Car</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="col-md-4 mb-4">
              <CarCard car={car} />
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;