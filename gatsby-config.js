module.exports = {
  siteMetadata: {
    title: `Lisible`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/articles`
      }
    },
    {
	resolve: `gatsby-transformer-remark`,
	options: {
	    plugins: [
		  {
		      resolve: 'gatsby-remark-prismjs'
		  }
	      ]
	  }
      }
  ],
}
