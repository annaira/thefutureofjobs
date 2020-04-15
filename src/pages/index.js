import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Index = () => {
  return (
    <PrimaryLayout column="col-8">
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
      <Post
        title="This is our first post."
        excerpt="We are writing something to be displayed in out excerpt."
      />
    </PrimaryLayout>
  )
}

export default Index
