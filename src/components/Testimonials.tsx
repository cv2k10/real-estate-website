import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Nguyen',
    location: 'San Francisco',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    text: 'Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their attention to detail and customer service are unmatched.',
  },
  {
    name: 'Michael Rodriguez',
    location: 'San Diego',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    text: 'I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and easily. Highly recommended!',
  },
  {
    name: 'Emily Johnson',
    location: 'Los Angeles',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    text: 'Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn\'t be happier with my new home!',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-beige-100 px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say About Dwello</h2>
      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-96 flex-shrink-0">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{testimonial.rating}</span>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;