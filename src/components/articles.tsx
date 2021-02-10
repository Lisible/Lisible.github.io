import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Articles = () => {
    const data = useStaticQuery(graphql`
        query ArticlesQuery {
            allMarkdownRemark(
                filter: { frontmatter: {published: {eq: true}}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (data.allMarkdownRemark.edges.length === 0) {
        return (
            <p>There are no articles on this blog.</p>
        )
    }

    return (
        <ul>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.frontmatter.slug}>
                        {node.frontmatter.date} - <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
	            </li>
                ))
            }
        </ul>
    )
}

export default Articles