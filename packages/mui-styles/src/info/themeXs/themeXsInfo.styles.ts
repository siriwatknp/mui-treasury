import { Theme } from '@material-ui/core/styles';

const titleFontSize = '0.75rem'
const subtitleFontSize = '0.625rem'
const captionFontSize = '0.625rem'
const captionMarginBottom = '0.125rem'

export type ThemeXsInfoClassKey = keyof ReturnType<typeof themeXsInfoStyles>

const themeXsInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontSize: titleFontSize,
    lineHeight: 1.4,
  },
  subtitle: {
    color: 'rgba(0,0,0,0.72)',
    fontSize: subtitleFontSize,
    lineHeight: 1.6
  },
  caption: {
    color: palette.text.secondary,
    fontSize: captionFontSize,
    lineHeight: 1.4,
    '&:not(:last-child)': {
      marginBottom: captionMarginBottom,
    }
  }
})

export default themeXsInfoStyles
