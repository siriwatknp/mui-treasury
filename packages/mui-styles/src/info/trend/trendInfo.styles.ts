import { Theme } from '@material-ui/core';

const titleFontSize = '0.875rem';
const subtitleFontSize = '0.75rem';
const family = "'Manrope', sans-serif";

export type TrendThemeInfoClassKey = keyof ReturnType<
  typeof trendThemeInfoStyles
>;

const trendThemeInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    fontWeight: 700,
    lineHeight: 1.4,
    color: palette.text.primary,
    marginBottom: '0.25rem',
  },
  subtitle: {
    fontFamily: family,
    fontSize: subtitleFontSize,
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.01em',
    color: palette.text.primary,
  },
});

export default trendThemeInfoStyles;
