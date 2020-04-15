import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = ({ children, column }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={column}>{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrimaryLayout
