import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

deckDeckGoHighlightElement()

const shortcodes = {
  Link
}

const BlogPost = ({ data: { mdx } }) => {
  let featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid

  return <>
    <Img fluid={featuredImgFluid} />
    <h1>{mdx.frontmatter.title}</h1>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>
        { mdx.body }
      </MDXRenderer>
    </MDXProvider>
  </>
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost