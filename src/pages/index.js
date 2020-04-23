import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  console.log(data)

  return (
    <PrimaryLayout column="col-8">
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
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
