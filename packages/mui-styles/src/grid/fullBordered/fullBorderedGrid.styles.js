import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ palette }) => {
  const defaultColor = Color(palette.primary.main)
    .fade(0.9)
    .toString();
  return {
    container: ({ borderColor = defaultColor }) => {
      const color = getThemeColor(palette, borderColor);
      return {
        border: `1px solid ${color}`,
        borderRight: 'none',
        borderBottom: 'none',
      };
    },
    item: ({ borderColor = defaultColor }) => {
      const color = getThemeColor(palette, borderColor);
      return {
        border: `1px solid ${color}`,
        borderTop: 'none',
        borderLeft: 'none',
      };
    },
  };
};
