module.exports = {
  siteMetadata: {
    title: `marvelFE`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "http://headless.local/graphql"
      }
    }]
};