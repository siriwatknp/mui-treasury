const titleFontSize = '1.25rem';
const subtitleFontSize = '1rem';
const captionFontSize = '0.875rem';
const subtitleFamily = "'Spartan', sans-serif";
const family = "'Montserrat', sans-serif";

export type GalaxyInfoClassKey = keyof ReturnType<
  typeof galaxyInfoStyles
>;

const galaxyInfoStyles = () => ({
  title: {
    fontFamily: family,
    color: '#fff',
    fontSize: titleFontSize,
    fontWeight: 'bold' as const,
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: subtitleFamily,
    color: 'rgba(255, 255, 255, 0.92)',
    fontSize: subtitleFontSize,
    lineHeight: 1.4,
    letterSpacing: '1px',
    fontWeight: 200,
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

export default galaxyInfoStyles;
