import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="d-flex justify-content-center my-4">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Search by location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-success" onClick={() => onSearch(query)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;