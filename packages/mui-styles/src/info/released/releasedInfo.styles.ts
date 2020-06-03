const titleFontSize = '0.875rem'
const subtitleFontSize = '0.75rem'
const family = "'DM Sans', sans-serif"

export type ReleasedThemeInfoClassKey = keyof ReturnType<typeof releasedThemeInfoStyles>

const releasedThemeInfoStyles = () => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    lineHeight: 2,
    fontWeight: 600,
  },
  subtitle: {
    fontFamily: family,
    fontSize: subtitleFontSize,
    lineHeight: 1.6,
    fontWeight: 500,
  },
})

export default releasedThemeInfoStyles
