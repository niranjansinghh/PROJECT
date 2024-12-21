import React from "react";
import { useParams } from "react-router-dom";

const HouseDetails = () => {
  const { id } = useParams(); // Get the house ID from the URL

  // Example house data (replace with actual data fetching logic)
  const houseData = {
    title: "House Title " + id,
    longDescription:
      "This is a long description of the house, highlighting its features and amenities.",
    price: "$200,000",
    location: "City Center",
    type: "Apartment",
    mainImage: "path/to/main-image.jpg", // Main image for the house
    images: ["path/to/image1.jpg", "path/to/image2.jpg"],
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <img
        src={houseData.mainImage}
        alt={houseData.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{houseData.title}</h1>
      <p className="text-gray-700 mb-4">{houseData.longDescription}</p>
      <p className="text-lg font-semibold">Price: {houseData.price}</p>
      <p className="text-lg">Location: {houseData.location}</p>
      <p className="text-lg">Type: {houseData.type}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {houseData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`House Image ${index + 1}`}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>
      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition">
        Book Now
      </button>
    </div>
  );
};

export default HouseDetails;
