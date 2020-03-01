import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ palette }) => {
  return {
    root: ({ color = palette.primary.main }) => {
      const result = getThemeColor(palette, color);
      const lightBg = Color(result)
        .rotate(-10)
        .alpha(0.08)
        .string();
      const lightColor = Color(result)
        .fade(0.32)
        .string();
      return {
        borderRadius: 8,
        backgroundColor: lightBg,
        color: lightColor,
      };
    },
    toggled: ({ color = palette.primary.main }) => {
      const result = getThemeColor(palette, color);
      return {
        color: result,
      };
    },
  };
};
