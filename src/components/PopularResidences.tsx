import React from 'react';
import { MapPin, Home, DollarSign } from 'lucide-react';

const PopularResidences = () => {
  const residences = [
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "San Francisco, California",
      rooms: 4,
      area: 3500,
      price: 2500000
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
      location: "Beverly Hills, California",
      rooms: 3,
      area: 1500,
      price: 850000
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "Palo Alto, California",
      rooms: 6,
      area: 4000,
      price: 3700000
    }
  ];

  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Our Popular Residences</h2>
      <div className="grid grid-cols-3 gap-8">
        {residences.map((residence, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={residence.image} alt={residence.location} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <MapPin className="text-gray-500 mr-2" size={16} />
                <span className="text-sm text-gray-600">{residence.location}</span>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <Home className="text-gray-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">{residence.rooms} Rooms</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="text-gray-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">{residence.area} sq ft</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${residence.price.toLocaleString()}</span>
                <button className="bg-brown-600 text-white px-4 py-2 rounded-md text-sm">Sign up</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularResidences;