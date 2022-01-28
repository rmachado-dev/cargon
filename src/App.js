import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import List from "./users/list";
import api from "./services/api";

function App() {
  const [lista, setLista] = useState([]);
  
  useEffect(() => { 
    api.get("/users?page=1")
      .then((response) => setLista(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);

  return (
    <>
    
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ReactJS</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Lista dos Usuários</Nav.Link>
          <Nav.Link href="/cadastro">Cadastro</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <List usuarios={lista.data} />          
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
