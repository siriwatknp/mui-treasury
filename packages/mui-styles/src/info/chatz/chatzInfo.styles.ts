import { Theme } from '@material-ui/core';

const titleFontSize = '1rem'
const subtitleFontSize = '0.875rem'
const captionFontSize = '0.75rem'
const family = "'Maven Pro', sans-serif"

export type ChatzThemeInfoClassKey = keyof ReturnType<typeof chatzThemeInfoStyles>

const chatzThemeInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: family,
    color: palette.grey['600'],
    fontSize: subtitleFontSize,
    lineHeight: 1.6,
    marginBottom: '0.25rem',
  },
  caption: {
    fontFamily: family,
    color: palette.grey['400'],
    fontSize: captionFontSize,
    lineHeight: 1.4,
  }
})

export default chatzThemeInfoStyles
