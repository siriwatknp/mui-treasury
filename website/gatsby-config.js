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
          '@mui-treasury/components': '../packages/mui-components/src',
          '@mui-treasury/utils': '../packages/mui-utils/src',
          '@mui-treasury/styling': '../packages/mui-styling/src',
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-136381677-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
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
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
