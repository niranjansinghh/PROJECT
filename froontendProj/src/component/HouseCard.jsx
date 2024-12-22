import React from 'react';

const HouseCard = ({ house, onDelete, onSeeBuyer }) => {
  // Use the first image as the main display image, or a placeholder if no images
  const displayImage = house.images && house.images.length > 0
    ? house.images[0]
    : 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={displayImage}
          alt={house.title}
          className="w-full h-full object-cover"
        />
        {house.images && house.images.length > 1 && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
            +{house.images.length - 1} more
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{house.title}</h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-2xl font-bold text-green-600">
            ${house.price?.toLocaleString()}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> {house.location}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Type:</span> {house.houseType}
          </p>
          {house.description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {house.description}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex-1 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={onSeeBuyer}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex-1 transition-colors"
          >
            {house.buyer ? 'View Buyer' : 'No Buyer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;