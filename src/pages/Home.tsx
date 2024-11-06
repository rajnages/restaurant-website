import React from 'react';
import { ChefHat, Clock, MapPin, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import Specials from '../components/Specials';

function QuickInfo({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
      <div className="text-stone-800">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Quick Info */}
      <div className="bg-stone-100">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <QuickInfo 
              icon={<Clock className="w-6 h-6" />}
              title="Hours"
              description="Mon-Sun: 11am-10pm"
            />
            <QuickInfo 
              icon={<Phone className="w-6 h-6" />}
              title="Contact"
              description="+1 (555) 123-4567"
            />
            <QuickInfo 
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              description="123 Culinary Ave, NY"
            />
            <QuickInfo 
              icon={<ChefHat className="w-6 h-6" />}
              title="Cuisine"
              description="Modern American"
            />
          </div>
        </div>
      </div>

      <Specials />
      
      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nestled in the heart of the city, Culinary Haven brings together tradition 
                and innovation. Our passionate team crafts unforgettable dining experiences 
                using locally-sourced ingredients and contemporary techniques.
              </p>
              <button className="bg-stone-800 text-white px-8 py-3 rounded-full 
                hover:bg-stone-700 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;