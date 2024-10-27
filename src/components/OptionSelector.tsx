import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';

type OptionSelectorProps = {
  options: { size: string[]; color: string[] };
  selectedSize: string;
  selectedColor: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
};

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  options,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}) => {
  return (
    <div className="option-selector">
      <div>
        <Select value={selectedSize} onValueChange={onSizeChange}>
          <SelectTrigger aria-label="Size">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {options.size.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select value={selectedColor} onValueChange={onColorChange}>
          <SelectTrigger aria-label="Color">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {options.color.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
