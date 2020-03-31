module.exports = {
  siteMetadata: {
    title: `Dashboard Framework`,
    description: `Get started with the dashboard framework`,
    author: `@splunk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dashboards`,
        path: `${__dirname}/src/gallery/dashboard-samples`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Dashboard Framework`,
    //     description: `Get started with the dashboard framework`,
    //     short_name: `UDF`,
    //     start_url: `/`,
    //     display: `standalone`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
