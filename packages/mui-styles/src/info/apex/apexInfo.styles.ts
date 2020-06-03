import { Theme } from '@material-ui/core';

const titleFontSize = '0.875rem';
const subtitleFontSize = '0.75rem';
const family = "'Ubuntu', sans-serif";

export type ApexInfoClassKey = keyof ReturnType<
  typeof apexInfoStyles
>;

const apexInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontFamily: family,
    color: '#4d4b5f',
    fontSize: titleFontSize,
    lineHeight: 1.66,
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  subtitle: {
    fontFamily: family,
    color: palette.grey['600'],
    fontSize: subtitleFontSize,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
});

export default apexInfoStyles;
