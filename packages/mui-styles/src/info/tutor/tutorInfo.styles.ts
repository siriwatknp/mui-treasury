const titleFontSize = '1rem';
const subtitleFontSize = '0.75rem';
const family = "'Open Sans', sans-serif";

export type TutorThemeInfoClassKey = keyof ReturnType<
  typeof tutorThemeInfoStyles
>;

const tutorThemeInfoStyles = () => ({
  title: {
    fontFamily: family,
    color: '#4d4b5f',
    fontSize: titleFontSize,
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: '0.125rem',
  },
  subtitle: {
    fontFamily: family,
    color: '#949698',
    fontWeight: 500,
    fontSize: subtitleFontSize,
    lineHeight: 1.4,
  },
});

export default tutorThemeInfoStyles;
