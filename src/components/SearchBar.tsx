import React from 'react';
import { MapPin, Home, DollarSign } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-beige-100 rounded-lg p-4 mx-6 flex justify-between items-center">
      <div className="flex items-center">
        <MapPin className="text-gray-500 mr-2" />
        <input type="text" placeholder="Location" className="bg-transparent outline-none" />
      </div>
      <div className="flex items-center">
        <Home className="text-gray-500 mr-2" />
        <input type="text" placeholder="Type" className="bg-transparent outline-none" />
      </div>
      <div className="flex items-center">
        <DollarSign className="text-gray-500 mr-2" />
        <input type="text" placeholder="Price Range" className="bg-transparent outline-none" />
      </div>
      <button className="bg-brown-600 text-white px-4 py-2 rounded-md">Sign up</button>
    </div>
  );
};

export default SearchBar;