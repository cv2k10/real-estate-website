import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-6 py-12">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-gray-600 mb-6">
          Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
        </p>
        <button className="bg-brown-600 text-white px-6 py-3 rounded-md">Sign up</button>
      </div>
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Modern house"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;