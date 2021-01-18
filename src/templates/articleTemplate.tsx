import React from "react"
import { graphql } from "gatsby"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="article-container">
            <article>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </article>
        </div>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date
                slug
                title
            }
        }
    }
`