const pxtorem = require('postcss-pxtorem');
const postCssPlugins = [
  pxtorem({
    rootValue: 75,
    unitPrecision: 5,
    propList: ['*'],
    mediaQuery: true,
    exclude: [/node_modules/],
    selectorBlackList: ['limatteo-wrap'],
    replace: true,
    minPixelValue: 1,
  }),
];

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.linkedin-event.com",
    title: "mentor-mentee-reach",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins,
      },
    },],
};
