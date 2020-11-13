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
    description:
      "Empowering returning citizens to become contributors to digital technology revolution",
    navLinks: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "About Us",
        url: "/about/",
      },
      {
        text: "Get Started",
        url: "/getInvolved/",
      },
      {
        text: "For Companies",
        url: "/companies/",
      },
      {
        text: "Contact Us",
        url: "/contact/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography/index.js`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        sections: path.join(__dirname, "src/sections"),
        context: path.join(__dirname, "src/context"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
  ],
};
