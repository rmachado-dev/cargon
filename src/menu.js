import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="/">ReactJS</Navbar.Brand>
      <Nav>
        <Link to="/" className="nav-link">Lista dos Usuários</Link>
        <Link to="/add" className="nav-link">Novo Usuário</Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Menu;
