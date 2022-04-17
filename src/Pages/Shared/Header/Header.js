import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
