import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ breakpoints, palette }) => {
  const defaultColor = Color(palette.primary.main)
    .fade(0.9)
    .toString();
  return {
    container: ({ borderColor }) => {
      const color = getThemeColor(palette, borderColor, defaultColor);
      return {
        border: `1px solid ${color}`,
        borderBottom: 'none',
      };
    },
    item: ({ colWidth = { xs: 12, sm: 6, md: 4 }, borderColor }) => {
      const color = getThemeColor(palette, borderColor, defaultColor);
      const screens = Object.keys(colWidth);
      return {
        boxShadow: `0 1px 0 0 ${color}`,
        borderLeft: `1px solid ${color}`,
        '&:last-of-type': {
          boxShadow: `1px 1px 0 0 ${color}`,
        },
        ...screens.reduce((result, key, index) => {
          const media = {};
          const width = colWidth[key];
          const { up, only } = breakpoints;
          const creator = index !== screens.length - 1 ? only : up;
          media[creator(key)] = {
            [`&:nth-of-type(${12 / width}n+1)`]: {
              borderLeft: 'none',
            },
            [`&:nth-of-type(${12 / width}n)`]: {
              borderRight: 'none',
            },
          };
          return {
            ...result,
            ...media,
          };
        }, {}),
      };
    },
  };
};
