import { Theme } from '@material-ui/core';

const titleFontSize = '0.875rem'
const subtitleFontSize = '0.875rem'
const captionFontSize = '0.75rem'
const family = "'Questrial', sans-serif"

export type MusicThemeInfoClassKey = keyof ReturnType<typeof musicThemeInfoStyles>

const musicThemeInfoStyles = ({ palette }: Theme) => ({
  root: {},
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    lineHeight: 1.6,
  },
  subtitle: {
    fontFamily: family,
    color: palette.grey['500'],
    fontSize: subtitleFontSize,
    lineHeight: 1.6
  },
  caption: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: palette.grey['400'],
    fontSize: captionFontSize,
    lineHeight: 1.5,
  }
})

export default musicThemeInfoStyles
