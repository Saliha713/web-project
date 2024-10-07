import React, { useState } from 'react';
import './Categories.css';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Budget'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
