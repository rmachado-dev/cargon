import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Cadastro = () => (
  <>
    <h1 className="py-5">Cadastro de Usuários</h1>
    <Form>
      <Row>
        <Col>
          <Form.Label>Nome </Form.Label>
          <Form.Control />
        </Col>
        <Col>
          <Form.Label>Email </Form.Label>
          <Form.Control />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <Form.Label>Status </Form.Label>
          <Form.Control />
        </Col>
        <Col>
          <Form.Label>Gênero </Form.Label>
          <Form.Control />
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Col>
      </Row>
    </Form>
  </>
);

export default Cadastro;
