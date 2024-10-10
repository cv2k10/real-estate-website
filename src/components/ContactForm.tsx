import React from 'react';
import { MessageCircle, FileQuestion } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Do You Have Any Questions?</h2>
      <h3 className="text-xl text-center mb-8">Get Help From Us</h3>
      <div className="flex justify-center space-x-8 mb-8">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <MessageCircle className="mr-2" />
          Chat live with our support team
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <FileQuestion className="mr-2" />
          Browse our FAQ
        </button>
      </div>
      <div className="max-w-md mx-auto">
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-grow px-4 py-2 rounded-l-md bg-beige-100 focus:outline-none"
          />
          <button className="bg-brown-600 text-white px-6 py-2 rounded-r-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;