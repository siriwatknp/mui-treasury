import { Theme, createStyles } from '@material-ui/core';

const titleFontSize = '0.875rem';
const subtitleFontSize = '0.875rem';
const captionFontSize = '0.75rem';
const family = "'Questrial', sans-serif";

export type MusicInfoClassKey = keyof ReturnType<typeof musicInfoStyles>;

const musicInfoStyles = ({ palette }: Theme) =>
  createStyles({
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 1.6,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    subtitle: {
      fontFamily: family,
      color: palette.grey['500'],
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    caption: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      color: palette.grey['400'],
      fontSize: captionFontSize,
      lineHeight: 1.5,
    },
  });

export default musicInfoStyles;
