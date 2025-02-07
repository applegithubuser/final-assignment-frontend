// Newsletter.jsx
import React from 'react';
import MainButton from './../../../components/MainButton/MainButton';

const Newsletter = () => {
  return (
    <div className="newsletter bg-gray-100 p-8 text-center mt-8">
      <h2 className="text-2xl text-primary font-semibold">Subscribe to our Newsletter</h2>
      <p className="mb-4">Stay updated with our latest offers and products</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded-md"
      />
      <MainButton className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">Subscribe</MainButton>
    </div>
  );
};

export default Newsletter;