module.exports = {
  siteMetadata: {
    title: `Mui Treasity`,
    author: `Siriwat Knp`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `siriwatknp`,
    },
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
          static: './public/static',
          '@mui-treasury/components/src': './packages/mui-components/src',
          '@mui-treasury/components': './packages/mui-components/src',
          '@mui-treasury/utils/src': './packages/mui-utils/src',
          '@mui-treasury/utils': './packages/mui-utils/src',
          '@mui-treasury/styling/src': './packages/mui-styling/src',
          '@mui-treasury/styling': './packages/mui-styling/src',
          '@mui-treasury/layout/src': './packages/mui-layout/src',
          '@mui-treasury/layout': './packages/mui-layout/src',
          '@mui-treasury/styles/src': './packages/mui-styles/src',
          '@mui-treasury/styles': './packages/mui-styles/src',
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
        path: `${__dirname}/src/docs/components`,
        name: `components`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
