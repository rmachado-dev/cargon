import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Cadastro = () => (
  <>
    <h1 className="py-5">Cadastro de Usuários</h1>
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nome </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gênero </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  </>
);

export default Cadastro;
