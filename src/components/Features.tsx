import React from 'react';

const Features = () => {
  return (
    <div className="px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80"
            alt="Beautiful house"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold mb-4">We Help You To Find Your Dream Home</h2>
          <p className="text-gray-600 mb-6">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
          </p>
          <div className="flex justify-between">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brown-600">8K+</h3>
              <p className="text-gray-600">Houses Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brown-600">6K+</h3>
              <p className="text-gray-600">Houses Sold</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brown-600">2K+</h3>
              <p className="text-gray-600">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-600 mb-8">
          Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </p>
        <div className="grid grid-cols-4 gap-6">
          {['Expert Guidance', 'Personalized Service', 'Transparent Process', 'Exceptional Support'].map((feature, index) => (
            <div key={index} className="bg-beige-100 p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-brown-600 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">
                {index === 0 && "Benefit from our team's seasoned expertise for a smooth buying experience"}
                {index === 1 && "Our services adapt to your unique needs, making your journey stress-free"}
                {index === 2 && "Stay informed with our clear and honest approach to buying your home"}
                {index === 3 && "Providing peace of mind with our responsive and attentive customer service"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;