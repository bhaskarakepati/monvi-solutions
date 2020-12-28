import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ScrollSpyNav from "react-scrollspy-nav";

export const Header = () => {
  return (
    <>
      <ScrollSpyNav
        scrollTargetIds={["home", "whoweare", "services", "contact"]}
      >
        <Navbar expand="sm" bg="info" variant="dark">
          <Navbar.Brand href="/">Monvi Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#whoweare">What we Offer</Nav.Link>
              <Nav.Link href="#values">Our Values</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </ScrollSpyNav>
    </>
  );
};
