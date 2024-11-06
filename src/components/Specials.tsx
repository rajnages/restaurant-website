import React from 'react';

const specialItems = [
  {
    name: "Chef's Special Risotto",
    description: "Wild mushroom risotto with truffle oil and aged parmesan",
    price: "$32",
    image: "https://images.unsplash.com/photo-1673421161165-c4f12c8fc0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Seasonal Catch",
    description: "Pan-seared sea bass with citrus beurre blanc",
    price: "$38",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Signature Dessert",
    description: "Vanilla bean crème brûlée with fresh berries",
    price: "$14",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Specials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Today's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 
                    transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 
                  group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-stone-800 font-medium">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;