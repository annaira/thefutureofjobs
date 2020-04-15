import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Gatsby-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
