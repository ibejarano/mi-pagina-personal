module.exports = {
  siteMetadata: {
    title: `Ignacio Bejarano | Portfolio`,
    titleTemplate: "%s",
    description: `Desarrollador Front-End`,
    image: "/logo.png",
    twitterUsername: "@IgnacioBejara13",
    siteUrl: "https://github.com/ibejarano",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve:`gatsby-plugin-transition-link`,
    }
  ],
}
