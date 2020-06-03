import { Theme } from '@material-ui/core/styles';

const titleFontSize = '0.875rem'
const subtitleFontSize = '0.8rem'
const captionFontSize = '0.75rem'
const captionMarginBottom = '0.25rem'

export type SmThemeInfoClassKey = keyof ReturnType<typeof smThemeInfoStyles>

const smThemeInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontSize: titleFontSize,
    lineHeight: 1.4,
  },
  subtitle: {
    color: 'rgba(0,0,0,0.72)',
    fontSize: subtitleFontSize,
    lineHeight: 1.66
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

export default smThemeInfoStyles
