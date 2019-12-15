import get from 'lodash.get';

export default (palette, color) => {
  if (color === 'divider') {
    return palette.divider;
  }
  if (color.includes('.') && !color.includes('rgb') && !color.includes('hsl')) {
    return get(palette, color);
  }
  return color;
};
