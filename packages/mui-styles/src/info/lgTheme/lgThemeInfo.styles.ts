import { Theme } from '@material-ui/core/styles';

const titleFontSize = '1.25rem'
const subtitleFontSize = '1.125rem'
const captionFontSize = '0.875rem'
const captionMarginBottom = '0.25rem'

export type LgThemeInfoClassKey = keyof ReturnType<typeof lgThemeInfoStyles>

const lgThemeInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontWeight: 500 as const,
    fontSize: titleFontSize,
    lineHeight: 1.66,
  },
  subtitle: {
    color: 'rgba(0,0,0,0.72)',
    fontSize: subtitleFontSize,
    lineHeight: 1.7
  },
  caption: {
    color: palette.text.secondary,
    fontSize: captionFontSize,
    lineHeight: 1.5,
    '&:not(:last-child)': {
      marginBottom: captionMarginBottom,
    }
  }
})

export default lgThemeInfoStyles
