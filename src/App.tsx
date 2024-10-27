import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const App: React.FC = () => {
  const product = {
    name: 'Product Name',
    description: 'This is a short description of the product. It describes its features and benefits.',
    images: [
      '/images/product-1.jpg',
      '/images/product-2.jpg',
      '/images/product-3.jpg',
    ],
    options: {
      size: ['Small', 'Medium', 'Large'],
      color: ['Red', 'Green', 'Blue'],
    },
  };

  const [selectedSize, setSelectedSize] = useState(product.options.size[0]);
  const [selectedColor, setSelectedColor] = useState(product.options.color[0]);

  const handleAddToCart = () => {
    alert(`Added to cart: ${product.name} (${selectedSize}, ${selectedColor})`);
  };

  return (
    <div className="app-container">
      <ProductCard
        name={product.name}
        description={product.description}
        images={product.images}
        options={product.options}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        onSizeChange={setSelectedSize}
        onColorChange={setSelectedColor}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
