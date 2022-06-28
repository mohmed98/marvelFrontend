module.exports = {
  siteMetadata: {
    title: `marvelFE`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://headless.local/graphql"
    }
  }]
};