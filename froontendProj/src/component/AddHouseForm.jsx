import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

// Define the mutation
const ADD_HOUSE = gql`
  mutation AddHouse(
    $title: String!
    $description: String
    $price: Float!
    $location: String!
    $houseType: String!
    $images: [String!]
  ) {
    addHouse(
      title: $title
      description: $description
      price: $price
      location: $location
      houseType: $houseType
      images: $images
    ) {
      id
      title
      description
      price
      location
      houseType
      images
    }
  }
`;

const AddHouseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    houseType: '',
    images: []
  });

  // Add the mutation hook with refetch query
  const [addHouse] = useMutation(ADD_HOUSE, {
    refetchQueries: ['GetSellerHouses'], // This will refresh the seller dashboard
    onCompleted: () => {
      // On successful mutation, navigate back to dashboard
      navigate('/sellerDashboard');
    },
    onError: (error) => {
      console.error('Error adding house:', error);
      alert('Failed to add house. Please try again.');
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addHouse({
        variables: {
          ...formData,
          price: parseFloat(formData.price), // Convert price to Float
          images: formData.images // Make sure images are in the correct format
        }
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    // Handle multiple image uploads
    const files = Array.from(e.target.files);
    // In a real application, you would upload these files to a server
    // and get back URLs. For now, we'll just store the file names
    setFormData(prevState => ({
      ...prevState,
      images: files.map(file => file.name)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Add New House</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price*
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="houseType" className="block text-sm font-medium text-gray-700">
              House Type*
            </label>
            <select
              id="houseType"
              name="houseType"
              required
              value={formData.houseType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleImageUpload}
              accept="image/*"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add House
            </button>
            <button
              type="button"
              onClick={() => navigate('/sellerDashboard')}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHouseForm;