import React from 'react';

const HouseCard = ({ house, onDelete, onSeeBuyer }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="text-xl font-bold mb-2">{house.name}</h3>
      <div className="flex justify-between items-center">
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
        <button
          onClick={onSeeBuyer}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Buyer Details
        </button>
      </div>
    </div>
  );
};

export default HouseCard;