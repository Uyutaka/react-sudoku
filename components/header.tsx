import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Sudoku</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/react-doc">React公式チュートリアル</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
