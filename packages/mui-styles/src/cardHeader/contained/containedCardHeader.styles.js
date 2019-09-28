import getThemeColor from '@mui-treasury/utils/src/getThemeColor';

export default ({ palette, spacing }) => ({
  root: ({ bgColor = 'primary.main', offset = '-32%' }) => ({
    backgroundColor: getThemeColor(palette, bgColor),
    borderRadius: spacing(2),
    margin: `${offset} auto 0`,
    width: '80%',
  }),
  title: {
    color: palette.common.white,
    fontWeight: 'bold',
  },
  subheader: {
    color: 'rgba(255, 255, 255, 0.76)',
  },
});
