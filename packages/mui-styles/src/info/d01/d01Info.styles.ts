const titleFontSize = '1rem'
const subtitleFontSize = '1rem'
const captionFontSize = '0.75rem'
const family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export type D01InfoClassKey = keyof ReturnType<typeof d01InfoStyles>

const d01InfoStyles = () => ({
  title: {
    fontFamily: family,
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: titleFontSize,
    lineHeight: 1.6,
  },
  subtitle: {
    fontFamily: family,
    color: '#a3b4bb',
    fontSize: subtitleFontSize,
    lineHeight: 1.6
  },
  caption: {
    fontFamily: family,
    color: '#84a5b4',
    fontSize: captionFontSize,
    lineHeight: 1.5,
  }
})

export default d01InfoStyles
