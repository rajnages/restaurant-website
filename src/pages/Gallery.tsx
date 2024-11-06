import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Restaurant Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Signature Dish'
  },
  {
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Wine Selection'
  },
  {
    url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Private Dining'
  },
  {
    url: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Bar Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Outdoor Seating'
  },
  {
    url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Special Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Culinary Team'
  }
];

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-12">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;