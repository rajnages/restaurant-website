import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Culinary Haven
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and innovation in every dish
          </p>
          <button className="bg-white text-stone-800 px-8 py-3 rounded-full 
            text-lg hover:bg-stone-100 transition duration-300">
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;