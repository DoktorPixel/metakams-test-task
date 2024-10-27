import React from 'react';
import { ImageSlider } from './ImageSlider';
import { OptionSelector } from './OptionSelector';


interface ProductCardProps {
  name: string;
  description: string;
  images: string[];
  options: { size: string[]; color: string[] };
  selectedSize: string;
  selectedColor: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  images,
  options,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <ImageSlider images={images} />
      <OptionSelector
        options={options}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        onSizeChange={onSizeChange}
        onColorChange={onColorChange}
      />
      <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
