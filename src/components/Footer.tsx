import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-beige-100 px-6 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Dwello</h2>
            <p className="text-gray-600 mb-4">Bringing you closer to your dream home, one click at a time.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Find Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Locations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600">&copy; 2023 Dwello. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;