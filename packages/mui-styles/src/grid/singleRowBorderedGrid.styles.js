import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ palette }) => {
  const defaultColor = Color(palette.primary.main)
    .fade(0.9)
    .toString();
  return {
    container: ({ borderColor }) => {
      const color = getThemeColor(palette, borderColor, defaultColor);
      return {
        border: `1px solid ${color}`,
      };
    },
    item: ({ borderColor }) => {
      const color = getThemeColor(palette, borderColor, defaultColor);
      return {
        borderLeft: `1px solid ${color}`,
        '&:first-of-type': {
          borderLeft: 'none',
        },
      };
    },
  };
};
