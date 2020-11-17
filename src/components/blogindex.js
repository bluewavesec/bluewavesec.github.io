import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogIndex = () => {

  const data = useStaticQuery(graphql`
    query blogIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMdx

  return (
    <div>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>

            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogIndex