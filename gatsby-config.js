module.exports = {
  siteMetadata: {
    title: `Lisible`,
    description: `My personal website`,
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
