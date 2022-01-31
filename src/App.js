import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import api from "./services/api";
import UserAdd from "./users/add";
import UserList from "./users/list";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api
      .get(
        "/users?access-token=74db48e291075450bdcbe60b248398f428968607c014bc0955b273cd025e3778"
      )
      .then((response) => setLista(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactJS</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Lista dos Usuários</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-5">
          <Col>
            <UserAdd />
          </Col>
        </Row>
        <Row>
          <Col>
            <UserList usuarios={lista.data} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
