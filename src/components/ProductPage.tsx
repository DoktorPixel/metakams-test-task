import React, { useState, useEffect } from 'react';
import { COLORS, MEMORY_OPTIONS, IMAGE_DATA } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { TableCharacteristics } from './TableCharacteristics';
import shoppingCart from '../../public/discount.svg';
import { PRICES } from '../constants';
import { CollapsedDescription } from './CollapsedDescription';

type ProductProps = {
  name: string;
};

const ProductPage: React.FC<ProductProps> = ({ name }) => {
  const [color, setColor] = useState<string>(COLORS[0].value);
  const [memory, setMemory] = useState<'128GB' | '256GB' | '512GB' | '1TB'>(
    MEMORY_OPTIONS[0] as '128GB' | '256GB' | '512GB' | '1TB'
  );

  const [price, setPrice] = useState<number>(PRICES[memory]);

  const fullName = `${name} ${memory} ${COLORS.find((c) => c.value === color)?.name}`;
  const images: string[] = IMAGE_DATA[color as keyof typeof IMAGE_DATA];

  useEffect(() => {
    setPrice(PRICES[memory]);
  }, [memory]);

  return (
    <div className="product-page">
      <div className="title-wrapper">
        <h1 className="title">{fullName}</h1>
        <h3 className="subtitle">
          A modern smartphone with advanced AI and powerful performance.
        </h3>
      </div>

      <section className="heading">
        <div className="slider-wrapper">
          <Swiper
            slidesPerView={1}
            loop
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="slider-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="main-description ">
          <TableCharacteristics />

          <div className="all-selectors">
            <h3 className="subtitle">Product options:</h3>

            <div className="selectors-wrapper">
              <div className="color-selector">
                <label>
                  Color: <span className={`color-icon color-${color}`}></span>
                </label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="select-input"
                >
                  {COLORS.map((colorOption) => (
                    <option key={colorOption.value} value={colorOption.value}>
                      {colorOption.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="memory-selector">
                <label>Storage:</label>
                <select
                  value={memory}
                  onChange={(e) =>
                    setMemory(
                      e.target.value as '128GB' | '256GB' | '512GB' | '1TB'
                    )
                  }
                  className="select-input"
                >
                  {MEMORY_OPTIONS.map((memoryOption) => (
                    <option key={memoryOption} value={memoryOption}>
                      {memoryOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <span className="price-discount">${price.toFixed(2)}</span>
            <span className="price">${(price * 1.1).toFixed(2)}</span>
            <p className="stock-status">In Stock</p>

            <div className="buttons-wrapper">
              <button className="add-to-cart-btn">
                Add to Cart
                <img
                  src={shoppingCart}
                  alt="Cart Icon"
                  width={20}
                  height={20}
                />
              </button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <h2 className="title">Product description:</h2>
        <CollapsedDescription />
      </section>
    </div>
  );
};

export default ProductPage;
