import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button } from '@radix-ui/themes';
import Individuality from '/images/individuality.png';
import Power from '/images/Power.png';
import Unblur from '/images/Unblur.png';
import Resistance from '/images/Resistance.png';
import Display from '/images/display.png';

export const CollapsedDescription: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="product-description">
        <h4 className="subtitle">
          A smartphone that highlights your individuality
        </h4>
        <p className="product-text">
          Pixel 9 is a smartphone that combines advanced technology with stylish
          design. With a powerful processor, innovative cameras, and extensive
          customization options, this device becomes your indispensable
          assistant in everyday life. Choose from a variety of colors that
          highlight your individuality and enjoy all the benefits of a modern
          smartphone.
        </p>
        <Collapsible.Content
          className={`content ${isOpen ? 'open' : ''}`}
          style={{ maxHeight: isOpen ? 'none' : '200px', overflow: 'hidden' }}
        >
          <div className="img-container">
            <img src={Individuality} alt="individuality" />
          </div>

          <h4 className="product-subtitle">Power at the core</h4>
          <p className="product-text">
            The Pixel 9 is powered by Google's most powerful Tensor G4
            processor, which can handle any task. With 12GB of RAM, it runs fast
            and smoothly, delivering unprecedented performance in any
            application. This processor allows you to effectively use all the
            features of your smartphone, including AI, gaming, and multitasking.
          </p>
          <div className="img-container">
            <img src={Power} alt="Power" />
          </div>

          <h4 className="product-subtitle">
            Bright, clear, and smooth OLED display
          </h4>
          <p className="product-text">
            The 6.3-inch OLED display on Pixel 9 is brighter than ever,
            delivering unrivaled clarity. OLED technology delivers deep blacks
            and vibrant hues for an unforgettable visual experience. And with a
            refresh rate of up to 120Hz, your gaming, browsing, and switching
            between apps will be as smooth as ever. It’s a display that makes
            every moment a joy to use.
          </p>
          <div className="img-container">
            <img src={Display} alt="Display" />
          </div>

          <h4 className="product-subtitle">IP68 Water and Dust Resistance</h4>
          <p className="product-text">
            The Pixel 9 is IP68 rated for water and dust resistance. This means
            your device can survive being submerged in up to 1.5 meters of water
            for 30 minutes without any damage. Now you can be confident that
            your smartphone will be reliable even in the most extreme
            conditions.
          </p>
          <div className="img-container">
            <img src={Resistance} alt="Resistance" />
          </div>

          <h4 className="product-subtitle">
            Get rid of blur with Photo Unblur
          </h4>
          <p className="product-text">
            With Photo Unblur in Google Photos, you can make even old and blurry
            photos look sharp. Just a few taps and your photos will look sharp
            and professional like never before. It's the perfect tool for
            preserving your best moments.
          </p>
          <div className="img-container">
            <img src={Unblur} alt="Unblur" />
          </div>
        </Collapsible.Content>

        <Button onClick={() => setIsOpen(!isOpen)} className="read-more-btn">
          {isOpen ? 'Read less' : 'Read more'}
        </Button>
      </div>
    </Collapsible.Root>
  );
};
