export default (palette, color, defaultColor) => {
  let result = defaultColor;
  if (color && typeof color === 'string') {
    if (color === 'divider' || color.includes('.')) {
      result = palette;
      const path = color.split('.');
      path.forEach(key => {
        result = color[key];
      });
    } else {
      result = color;
    }
  }
  return result;
};
