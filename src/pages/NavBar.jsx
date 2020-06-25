import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        sticky="top"
        className="navbar-custom-main"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-center ">
            <Nav.Link href="#features" clas>
              Home
            </Nav.Link>
            <Nav.Link href="#pricing">Little Do you Know</Nav.Link>
            <Nav.Link href="#pricing">My Work</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
