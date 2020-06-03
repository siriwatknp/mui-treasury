const titleFontSize = '1rem'
const subtitleFontSize = '1rem'
const captionFontSize = '0.75rem'

export type D01ThemeInfoClassKey = keyof ReturnType<typeof d01ThemeInfoStyles>

const d01ThemeInfoStyles = () => ({
  root: {},
  title: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: titleFontSize,
    lineHeight: 1.6,
  },
  subtitle: {
    color: '#a3b4bb',
    fontSize: subtitleFontSize,
    lineHeight: 1.6
  },
  caption: {
    color: '#84a5b4',
    fontSize: captionFontSize,
    lineHeight: 1.5,
  }
})

export default d01ThemeInfoStyles
