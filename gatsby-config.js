module.exports = {
  pathPrefix: "/aux-eng-playbook/",
  siteMetadata: {
    title: `Wayfair Open Source`,
    description: `Home of the Open Source Program Office and Wayfair specific documenting for working with OSS`,
    author: `opensource@wayfair.com`,
    siteUrl: `https://wayfair-incubator.github.io/aux-eng-playbook/`,
    keywords: [`opensource`, `wayfair`, `Wayfair`, `OSS`, `OSPO`],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-gist`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-anchor`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://wayfair-incubator.github.io/aux-eng-playbook/`,
        sitemap: `https://wayfair-incubator.github.io/aux-eng-playbook//sitemap/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-WDNGECESR2', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        environments: ['production']
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wayfair-incubator.github.io/aux-eng-playbook/`,
        short_name: `wayfair-incubator.github.io/aux-eng-playbook/`,
        background_color: `#FFF`,
        theme_color: `#612578`,
        display: `minimal-ui`,
        icon: `src/images/aux.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`
  ],
}
