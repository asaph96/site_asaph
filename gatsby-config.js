module.exports = {
  siteMetadata: {
    siteUrl: `https://portfolio.asaph.dev.br`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/obrigado/`, `/contact/`],
        query: `
        {
          site(siteMetadata: {}) {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
      resolveSiteUrl: ({site, allSitePage}) => {
        //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.siteMetadata.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.9,
          }
        })
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-G2TC3DVZR3", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
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
