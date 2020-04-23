import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  console.log(data)

  return (
    <PrimaryLayout column="col-8">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          image={node.frontmatter.image}
        />
      ))}
    </PrimaryLayout>
  )
}

export default Index

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`
