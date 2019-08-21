import Typography from 'typography';
import Color from 'color';
import typographyTheme from 'typography-theme-kirkham';
import theme from './theme';

typographyTheme.overrideThemeStyles = () => {
  return {
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'unset',
      borderBottom: `1px solid ${Color(theme.palette.primary.light)
        .fade(0.7)
        .toString()}`,
    },
    'a:hover': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};
typographyTheme.headerLineHeight = 1.45;
typographyTheme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['700', '900'],
  },
  {
    name: 'Fira Sans',
    styles: ['300', '400', '400i', '700', '700i'],
  },
];

const typography = new Typography(typographyTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
