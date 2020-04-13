import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const Index = () => {
  return (
    <div>
       <Header title="Header of Index page"/>
      <div>
        <h1>First Gatsby Project</h1>
        <Link to="/test">Navigate to Test</Link>
      </div>
      <img
        src="https://www.myzitate.de/img/og/der-grosse-gatsby.jpg"
        width="780"
      />
    </div>
  )
}

export default Index
