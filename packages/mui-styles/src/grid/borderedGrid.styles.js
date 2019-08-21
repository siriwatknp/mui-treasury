import Color from 'color';

const getColor = (palette, borderColor) => {
  let color = Color(palette.primary.main)
    .fade(0.9)
    .toString();
  if (borderColor && typeof borderColor === 'string') {
    if (borderColor === 'divider' || borderColor.includes('.')) {
      color = palette;
      const path = borderColor.split('.');
      path.forEach(key => {
        color = color[key];
      });
    } else {
      color = borderColor;
    }
  }
  return color;
};

export default ({ breakpoints, palette }) => ({
  container: ({ borderColor }) => {
    const color = getColor(palette, borderColor);
    return {
      border: `1px solid ${color}`,
      borderBottom: 'none',
    };
  },
  item: ({ colWidth = {}, borderColor }) => {
    const color = getColor(palette, borderColor);
    const screens = Object.keys(colWidth);
    return {
      boxShadow: `0 1px 0 0 ${color}`,
      borderLeft: `1px solid ${color}`,
      ...screens.reduce((result, key, index) => {
        const media = {};
        const width = colWidth[key];
        const { up, only } = breakpoints;
        const creator = index !== screens.length - 1 ? only : up;
        media[creator(key)] = {
          [`&:nth-of-type(${12 / width}n+1)`]: {
            borderLeft: 'none',
          },
        };
        return {
          ...result,
          ...media,
        };
      }, {}),
    };
  },
});
