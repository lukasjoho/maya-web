import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./header.scss"
import logo from "../images/logo.png"
import { AiOutlineAlignRight } from "react-icons/ai";
import PremiumButton from "./buttons/PremiumButton"


const Header = () => (
  <header>
      <Navbar expand="lg">
        <Navbar.Text className="brand">
          <Link to="/"  activeClassName="active">Maya.</Link>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <AiOutlineAlignRight/>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar">
          <Nav className="main-nav">
            <Navbar.Text><Link to="/" activeClassName="active">About us</Link></Navbar.Text>
            <Navbar.Text><Link to="/" activeClassName="active">FAQ</Link></Navbar.Text>
            <Navbar.Text><Link to="/" activeClassName="active">Blog</Link></Navbar.Text>
          </Nav>
          <Nav className="ml-auto nav-email">
            <Navbar.Text>
              <a href="mailto:info@excyted.io?subject=Mail from Our Site"><PremiumButton to="/" text="Get started"/></a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
