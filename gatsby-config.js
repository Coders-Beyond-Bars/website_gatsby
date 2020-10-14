const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Reboot to Tech",
    author: "Richard Kim",
    email: "info@reboot2tech.org",
    company: "Reboot to Tech, Inc.",
    streetAddress: "186 Alewife Brook Pkwy",
    city: "Cambridge",
    state: "MA",
    zipCode: "02138",
    description: "Empowering returning citizens to become producers of digital technology",
    navLinks: [
      {
        text: "Home",
        url: "/"
      },
      {
        text: "About Us",
        url: "/about/"
      },
      {
        text: "Get Involved",
        url: "/get_involved/"
      },
      {
        text: "Blog",
        url: "/blog/"
      },
      {
        text: "Contact Us",
        url: "/contact/",
      },
      {
        text: "Donate",
        url: "/donate/",
        button: true
      }
    ]
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography/index.js`
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Reboot to Tech",
        short_name: "Reboot",
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
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms"
  ]
};
