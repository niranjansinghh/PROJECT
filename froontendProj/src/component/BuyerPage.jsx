import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerPage = () => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleLogout = () => {
    navigate("/logout"); // Redirect to the Logout component
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching in location:", location);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between w-full mb-4">
        <button
          className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => {
            /* Handle user listing logic */
          }}
        >
          User Listing
        </button>
        <button
          className="btn bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="filter-options w-full mb-4">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          >
            Search
          </button>
        </div>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border rounded px-3 py-2 w-1/3"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border rounded px-3 py-2 w-1/3"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded px-3 py-2 w-1/3"
          />
          <select className="border rounded px-3 py-2 w-1/3">
            <option value="">House Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>

      <div className="cards w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render different cards here */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-bold text-xl">Card Title 1</h3>
          <p className="text-gray-600">Description for card 1.</p>
          <p className="font-semibold text-lg mt-2">$200,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-bold text-xl">Card Title 2</h3>
          <p className="text-gray-600">Description for card 2.</p>
          <p className="font-semibold text-lg mt-2">$250,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="font-bold text-xl">Card Title 3</h3>
          <p className="text-gray-600">Description for card 3.</p>
          <p className="font-semibold text-lg mt-2">$300,000</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default BuyerPage;
