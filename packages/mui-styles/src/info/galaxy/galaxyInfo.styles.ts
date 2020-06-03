const titleFontSize = '1.25rem';
const subtitleFontSize = '1.25rem';
const captionFontSize = '0.875rem';
const titleFamily = "'Spartan', sans-serif";
const family = "'Montserrat', sans-serif";

export type GalaxyThemeInfoClassKey = keyof ReturnType<
  typeof galaxyThemeInfoStyles
>;

const galaxyThemeInfoStyles = () => ({
  title: {
    fontFamily: titleFamily,
    color: 'rgba(255, 255, 255, 0.84)',
    fontSize: subtitleFontSize,
    lineHeight: 1.4,
    letterSpacing: '1px',
    fontWeight: 300,
  },
  subtitle: {
    fontFamily: family,
    color: '#fff',
    fontSize: titleFontSize,
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
  caption: {
    fontFamily: family,
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: captionFontSize,
    lineHeight: 1.5,
    '&:last-child': {
      marginTop: '1rem',
    },
  },
});

export default galaxyThemeInfoStyles;
