import React from 'react';
import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Dwello</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Service</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Agents</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="text-gray-600 cursor-pointer" />
        <User className="text-gray-600 cursor-pointer" />
        <button className="bg-brown-600 text-white px-4 py-2 rounded-md">Sign up</button>
      </div>
    </header>
  );
};

export default Header;