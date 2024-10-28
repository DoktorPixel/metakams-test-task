import obsidian1 from '/images/obsidian-image1.png';
import obsidian2 from '/images/obsidian-image2.png';
import obsidian3 from '/images/obsidian-image3.png';
import peony1 from '/images/peony-image1.png';
import peony2 from '/images/peony-image2.png';
import peony3 from '/images/peony-image3.png';
import porcelain1 from '/images/porcelain-image1.png';
import porcelain2 from '/images/porcelain-image2.png';
import porcelain3 from '/images/porcelain-image3.png';
import wintergreen1 from '/images/wintergreen-image1.png';
import wintergreen2 from '/images/wintergreen-image2.png';
import wintergreen3 from '/images/wintergreen-image3.png';

export const COLORS = [
  { name: 'Obsidian', value: 'obsidian' },
  { name: 'Peony', value: 'peony' },
  { name: 'Porcelain', value: 'porcelain' },
  { name: 'Wintergreen', value: 'wintergreen' }
];

export const MEMORY_OPTIONS = ['128GB', '256GB', '512GB', '1TB'] as const;

export const PRICES: { [key in '128GB' | '256GB' | '512GB' | '1TB']: number } =
  {
    '128GB': 699.99,
    '256GB': 799.99,
    '512GB': 899.99,
    '1TB': 999.99
  };

export const IMAGE_DATA = {
  obsidian: [obsidian1, obsidian2, obsidian3],
  peony: [peony1, peony2, peony3],
  porcelain: [porcelain1, porcelain2, porcelain3],
  wintergreen: [wintergreen1, wintergreen2, wintergreen3]
};
