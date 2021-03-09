module.exports = {
  siteMetadata: {
    siteUrl: `https://portfolio.asaph.dev.br/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://portfolio.asaph.dev.br/',
        sitemap: 'https://portfolio.asaph.dev.br/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portifólio Asaph`,
        short_name: `Asaph`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6077A6`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
