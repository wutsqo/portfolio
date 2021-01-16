import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import React, { Component } from "react"
import { FaHome } from "react-icons/fa"
import navbarStyles from "./navbar.module.scss"

function MyNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="sticky-top">
      <Navbar.Brand as={Link} to="/">
        <FaHome />
      </Navbar.Brand>
      <Navbar.Toggle
        className={navbarStyles.navbarToggler}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/curated">
            Curated
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/reviews">
            Reviews
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
