const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Coders Beyond Bars",
    author: "Richard Kim",
    description:
      "Coders Beyond Bars - Empowering returning citizens to become producers of digital technology"
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography`
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Coders Beyond Bars",
        short_name: "CBB",
        start_url: "/",
        background_color: "#FDD146",
        theme_color: "#6D6E71",
        display: "minimal-ui",
        icon: "src/assets/images/favicons/cbb-favicon.png", // This path is relative to the root of the site.
        icons: [
          {
            src: "icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "icons/icon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        sections: path.join(__dirname, "src/sections"),
        context: path.join(__dirname, "src/context")
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
