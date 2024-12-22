import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseCard from '../component/HouseCard'; // Ensure HouseCard exists
import Popup from '../component/Popup'; // Ensure Popup exists

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [houses, setHouses] = useState([
    { id: 1, name: 'House 1', buyer: null },
    { id: 2, name: 'House 2', buyer: { id: 1, name: 'Buyer 1' } },
    { id: 3, name: 'House 3', buyer: null },
  ]);

  // Handle house deletion
  const handleDelete = (houseId) => {
    setHouses(houses.filter((house) => house.id !== houseId));
    alert(`House with id ${houseId} deleted.`);
  };

  // Handle viewing the buyer (if any)
  const handleSeeBuyer = (house) => {
    if (!house.buyer) {
      setSelectedHouse(house);
      setOpenPopup(true);
    } else {
      navigate(`/buyer/${house.buyer.id}`);
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setLogoutPopup(true);
    setTimeout(() => navigate('/login'), 2000); // After 2 seconds, redirect to login
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My House Listings</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/add-house')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add House
          </button>
          <button
            onClick={handleLogout} // Logout
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Popup for logout confirmation */}
      {logoutPopup && (
        <Popup
          message="You have been logged out."
          onClose={() => setLogoutPopup(false)}
        />
      )}

      {/* House Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            house={house}
            onDelete={() => handleDelete(house.id)}
            onSeeBuyer={() => handleSeeBuyer(house)}
          />
        ))}
      </div>

      {/* Popup for houses with no buyer */}
      {openPopup && selectedHouse && (
        <Popup
          message="No Buyer for this house yet."
          onClose={() => setOpenPopup(false)}
        />
      )}
    </div>
  );
};

export default SellerDashboard;
