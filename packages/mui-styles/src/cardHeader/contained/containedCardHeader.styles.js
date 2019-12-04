import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({ palette, spacing }) => ({
  root: ({ bgColor = 'primary.main', offset = '-40px', ...styles }) => ({
    backgroundColor: getThemeColor(palette, bgColor),
    borderRadius: spacing(2),
    margin: `${offset} auto 0`,
    width: '88%',
    ...styles,
  }),
  title: {
    color: palette.common.white,
    fontWeight: 'bold',
  },
  subheader: {
    color: 'rgba(255, 255, 255, 0.76)',
  },
});
