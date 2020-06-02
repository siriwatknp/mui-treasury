import { Theme } from '@material-ui/core/styles';

const titleFontSize = '1rem'
const subtitleFontSize = '0.875rem'
const captionFontSize = '0.75rem'
const captionMarginBottom = '0.25rem'

export type SmThemeInfoClassKey = keyof ReturnType<typeof smThemeInfoStyles>

const smThemeInfoStyles = ({ palette }: Theme) => ({
  root: {},
  title: {
    fontWeight: 500 as const,
    fontSize: titleFontSize,
    lineHeight: 1.4,
  },
  subtitle: {
    color: palette.text.secondary,
    fontSize: subtitleFontSize,
    lineHeight: 1.8
  },
  caption: {
    color: 'rgba(0,0,0,0.72)',
    fontSize: captionFontSize,
    lineHeight: 1.5,
    marginBottom: captionMarginBottom,
  }
})

export default smThemeInfoStyles
