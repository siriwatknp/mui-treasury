import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ palette }) => {
  const defaultColor = Color(palette.primary.main)
    .fade(0.9)
    .toString();
  return {
    item: ({ borderColor = defaultColor, height = '88%' }) => {
      const color = getThemeColor(palette, borderColor);
      return {
        position: 'relative',
        '&:not(:last-of-type)': {
          '&:after': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            height,
            width: 1,
            backgroundColor: color,
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
          },
        },
      };
    },
  };
};
