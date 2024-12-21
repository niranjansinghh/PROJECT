import React, { useState } from 'react';

const AddHouseForm = ({ onAddHouse }) => {
  const [houseName, setHouseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (houseName.trim()) {
      onAddHouse({ id: Date.now(), name: houseName, buyer: null });
      setHouseName('');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New House</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="houseName" className="block text-sm font-medium text-gray-700">
            House Name
          </label>
          <input
            type="text"
            id="houseName"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add House
        </button>
      </form>
    </div>
  );
};

export default AddHouseForm;