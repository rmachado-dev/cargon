import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const UserAdd = () => (
  <>
    <h1 className="py-5">Cadastro de Usuários</h1>
    <Form>
      <Row>
        <Col sm={6} className="mb-3">
          <Form.Label>Nome </Form.Label>
          <Form.Control />
        </Col>
        <Col sm={6} className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control />
        </Col>
      </Row>
      <Row className="py-sm-4">
        <Col sm={6} className="mb-3">
          <Form.Label>Status </Form.Label>
          <Form.Control />
        </Col>
        <Col sm={6} className="mb-3">
          <Form.Label>Gênero </Form.Label>
          <Form.Control />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Col>
      </Row>
    </Form>
  </>
);

export default UserAdd;
