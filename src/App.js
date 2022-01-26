import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./users/list";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Processo Seletivo - ReactJS</h1>
            <List />
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
