import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"
import { FaHome } from "react-icons/fa"
import navbarStyles from "./navbar.module.scss"

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={[navbarStyles.navbar, "fixed-top"].join(" ")}
    >
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
            about
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/projects">
            projects
          </Nav.Link>
          <Nav.Link as={Link} activeClassName="active" to="/posts">
            curated
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
