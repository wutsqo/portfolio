import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import React, { Component } from "react"
import { FaHome } from "react-icons/fa"

function MyNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="fixed-top">
      <Navbar.Brand as={Link} to="/">
        <h3>
          <FaHome />
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/curated">
            Curated
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews">
            Reviews
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
