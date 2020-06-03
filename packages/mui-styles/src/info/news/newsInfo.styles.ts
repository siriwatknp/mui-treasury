import { Theme } from '@material-ui/core';

const titleFontSize = '1rem';
const subtitleFontSize = '0.875rem';
const family = "'Sen', sans-serif";

export type NewsInfoClassKey = keyof ReturnType<
  typeof newsInfoStyles
>;

const newsInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: family,
    color: palette.grey['500'],
    fontSize: subtitleFontSize,
    lineHeight: 1.75,
  },
});

export default newsInfoStyles;
