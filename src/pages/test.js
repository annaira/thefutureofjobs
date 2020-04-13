import React from "react"
import { navigate } from "gatsby"
import Header from "../components/header"

const Test = () => {
  return (
    <div>
        <Header title="Header of Test page"/>
      <h1>This is a test page!</h1>
      <h1>This is a test page!</h1>
      <button onClick={() => navigate("/")}>Navigate to Homepage</button>
    </div>
  )
}

export default Test
