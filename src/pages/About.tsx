import React from 'react';
import { Users, Award, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-serif text-white">Our Story</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2010, Culinary Haven has been at the forefront of innovative dining,
            combining traditional techniques with modern creativity. Our commitment to
            excellence drives everything we do, from sourcing the finest ingredients to
            crafting unforgettable dining experiences.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="text-xl font-medium mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We partner with local farmers and suppliers to ensure the freshest,
              sustainably-sourced ingredients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="text-xl font-medium mb-4">Excellence</h3>
            <p className="text-gray-600">
              Our dedication to culinary excellence has earned us recognition and
              loyal guests from around the world.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-stone-800" />
            </div>
            <h3 className="text-xl font-medium mb-4">Community</h3>
            <p className="text-gray-600">
              We believe in creating a warm, welcoming environment where every guest
              feels like part of our family.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-stone-50 rounded-lg p-12">
          <h2 className="text-3xl font-serif text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Head Chef"
                className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-medium">Michael Chen</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sous Chef"
                className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Pastry Chef"
                className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-medium">David Martinez</h3>
              <p className="text-gray-600">Pastry Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;