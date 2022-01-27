import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./users/list";
import api from './services/api';

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
      <Container>
        <Row>
          <Col>
            <h1>Processo Seletivo - ReactJS</h1>
            <List usuarios={lista.data} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
