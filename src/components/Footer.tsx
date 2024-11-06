import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Culinary Haven</h3>
            <p className="text-gray-400">
              Crafting memorable dining experiences through exceptional cuisine and service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Hours</h4>
            <p className="text-gray-400">Monday - Sunday</p>
            <p className="text-gray-400">11:00 AM - 10:00 PM</p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <p className="text-gray-400">123 Culinary Ave</p>
            <p className="text-gray-400">New York, NY 10001</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Culinary Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;