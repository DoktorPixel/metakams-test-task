import React, { useState, useEffect } from 'react';
import { COLORS, MEMORY_OPTIONS, IMAGE_DATA } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@radix-ui/react-select';
import { Button } from '@radix-ui/themes';
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
                <label>Color:</label>
                <Select
                  value={color}
                  onValueChange={(value) => setColor(value)}
                >
                  <SelectTrigger className="select-trigger">
                    <span className={`color-icon color-${color}`}></span>
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>
                  <SelectContent
                    className="select-content"
                    style={{ position: 'absolute', top: '100%', left: 0 }}
                  >
                    {COLORS.map((colorOption) => (
                      <SelectItem
                        key={colorOption.value}
                        value={colorOption.value}
                        className="select-item"
                      >
                        <span
                          className={`color-icon color-${colorOption.value}`}
                        ></span>
                        {colorOption.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="memory-selector">
                <label className="">Storage:</label>
                <Select
                  value={memory}
                  onValueChange={(value: '128GB' | '256GB' | '512GB' | '1TB') =>
                    setMemory(value)
                  }
                >
                  <SelectTrigger className="select-trigger">
                    <div className="memory-button"> {memory}</div>

                    <SelectValue placeholder="Select Storage" />
                  </SelectTrigger>
                  <SelectContent style={{ position: 'absolute' }}>
                    {MEMORY_OPTIONS.map((memoryOption) => (
                      <SelectItem
                        key={memoryOption}
                        value={memoryOption}
                        className="select-item"
                      >
                        {memoryOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <span className="price-discount">${price.toFixed(2)}</span>
            <span className="price">${(price * 1.1).toFixed(2)}</span>
            <p className="stock-status">In Stock</p>
            <div className="buttons-wrapper">
              <Button className="add-to-cart-btn">
                Add to Cart{' '}
                <img
                  src={shoppingCart}
                  alt="shoppingCart"
                  width={20}
                  height={20}
                />
              </Button>
              <Button className="buy-now-btn">Buy Now</Button>
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
