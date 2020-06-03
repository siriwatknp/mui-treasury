const titleFontSize = '1.25rem'
const subtitleFontSize = '1.25rem'
const captionFontSize = '1rem'
const family = "'Spartan', sans-serif"

export type BeatsThemeInfoClassKey = keyof ReturnType<typeof beatsThemeInfoStyles>

const beatsThemeInfoStyles = () => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle: {
    fontFamily: family,
    fontSize: subtitleFontSize,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  caption: {
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    color: '#d57b7b',
    fontSize: captionFontSize,
    lineHeight: 1.5,
    '&:last-child': {
      marginTop: '0.5rem',
    }
  }
})

export default beatsThemeInfoStyles
