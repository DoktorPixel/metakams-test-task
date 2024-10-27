import React, { useState } from 'react';

type ImageSliderProps = {
  images: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="image-slider">
      <button onClick={prevImage}>Previous</button>
      <img src={images[current]} alt="Product" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};
