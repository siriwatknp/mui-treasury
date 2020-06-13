const typography = require('./src/constants/fonts');

module.exports = {
  siteMetadata: {
    title: 'MUI Treasury',
    titleTemplate: '%s · React Material-UI Ecosystem',
    description:
      'The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI.',
    url: 'https://mui-treasury.com', // No trailing slash allowed!
    image: '/images/mui-treasury_banner_minified.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@siriwatknp',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './', // <- will be used as a root dir
        aliases: {
          utils: './src/utils',
          constants: './src/constants',
          docs: './src/docs',
          components: './src/components',
          containers: './src/containers',
          logics: './src/logics',
          '@mui-treasury/components': '../packages/mui-components/src',
          '@mui-treasury/utils': '../packages/mui-utils/src',
          '@mui-treasury/layout': '../packages/mui-layout/src',
          '@mui-treasury/styles': '../packages/mui-styles/src',
          '@mui-treasury/mockup': '../packages/mui-mockup/src',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
        name: `docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/DocTemplate.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}/src/docs`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`,
              className: 'anchor-header',
              isIconAfterHeader: true,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-N39GBFW`,
        // includeInDevelopment: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: typography.config,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mui Treasury | Jump start Material-ui site`,
        short_name: `MuiTreasury`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007aac`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
  ],
};
