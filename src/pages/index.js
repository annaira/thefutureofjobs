import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

const Index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-10">
            <Post
              title="This is our first post."
              excerpt="We are writing something to be displayed in out excerpt."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Index
