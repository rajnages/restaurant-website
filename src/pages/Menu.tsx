import React, { useState } from 'react';

const menuCategories = {
  starters: [
    { name: 'Truffle Arancini', price: '$16', description: 'Crispy risotto balls with wild mushrooms and truffle aioli' },
    { name: 'Tuna Tartare', price: '$18', description: 'Fresh tuna, avocado, sesame-ginger dressing, wonton crisps' },
    { name: 'Burrata', price: '$15', description: 'Heirloom tomatoes, basil oil, aged balsamic, grilled sourdough' }
  ],
  mains: [
    { name: 'Wagyu Ribeye', price: '$65', description: '12oz ribeye, roasted bone marrow, red wine jus' },
    { name: 'Pan-Seared Sea Bass', price: '$38', description: 'Fennel puree, citrus beurre blanc, seasonal vegetables' },
    { name: 'Wild Mushroom Risotto', price: '$32', description: 'Arborio rice, truffle oil, aged parmesan' }
  ],
  desserts: [
    { name: 'Vanilla Crème Brûlée', price: '$14', description: 'Madagascar vanilla bean, fresh berries' },
    { name: 'Dark Chocolate Soufflé', price: '$16', description: 'Valrhona chocolate, vanilla bean ice cream' },
    { name: 'Cheese Selection', price: '$18', description: 'Artisanal cheeses, honey, dried fruits, nuts' }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-12">Our Menu</h1>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium first:rounded-l-md last:rounded-r-md
                  ${activeCategory === category
                    ? 'bg-stone-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border border-gray-200`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <span className="text-lg font-medium text-stone-800">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;