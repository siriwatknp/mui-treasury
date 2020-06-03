const titleFontSize = '1rem';
const subtitleFontSize = '0.75rem';
const captionFontSize = '0.875rem';
const family = "'Poppins', sans-serif";

export type PopularThemeInfoClassKey = keyof ReturnType<
typeof popularThemeInfoStyles
>;

const popularThemeInfoStyles = () => ({
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    lineHeight: 1.4,
    fontWeight: 'bold' as const,
  },
  subtitle: {
    fontFamily: family,
    color: '#b13731',
    fontSize: subtitleFontSize,
    textTransform: 'uppercase' as const,
    lineHeight: 1.2,
    letterSpacing: '1px',
    marginBottom: '0.25rem',
  },
  caption: {
    fontFamily: family,
    color: '#95a0a1',
    fontSize: captionFontSize,
    lineHeight: 1.5,
    '&:last-child': {
      marginTop: '0.5rem',
    },
  },
});

export default popularThemeInfoStyles;
