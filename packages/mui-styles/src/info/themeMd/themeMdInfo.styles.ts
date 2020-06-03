import { Theme } from '@material-ui/core/styles';

const titleFontSize = '1rem'
const subtitleFontSize = '1rem'
const captionFontSize = '0.875rem'
const captionMarginBottom = '0.25rem'

export type ThemeMdInfoClassKey = keyof ReturnType<typeof themeMdInfoStyles>

const themeMdInfoStyles = ({ palette }: Theme) => ({
  title: {
    fontWeight: 500 as const,
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
    lineHeight: 1.5,
    '&:not(:last-child)': {
      marginBottom: captionMarginBottom,
    }
  }
})

export default themeMdInfoStyles
