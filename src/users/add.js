import axios from "axios";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function UserAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data) =>
    axios
      .post(
        "https://gorest.co.in/public/v1/users?access-token=74db48e291075450bdcbe60b248398f428968607c014bc0955b273cd025e3778",
        data
      )
      .then(() => {
        console.log("OK!");
      })
      .catch(() => {
        console.log("OPS! ERRO.");
      });

  return (
    <>
      <h1 className="py-5">Cadastro de Usuários</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={6} className="mb-3">
            <Form.Label>Nome </Form.Label>
            <Form.Control
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            <small className="text-danger">
              {errors.name?.type === "required" && "Campo obrigatório!"}
            </small>
          </Col>
          <Col sm={6} className="mb-3">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            <small className="text-danger">
              {errors.email?.type === "required" && "Campo obrigatório!"}
            </small>
          </Col>
        </Row>
        <Row className="py-sm-4">
          <Col sm={6} className="mb-3">
            <Form.Label>Gênero </Form.Label>
            <Form.Select {...register("gender", { required: true })}>
              <option value="">--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>

            
            <small className="text-danger">
              {errors.gender?.type === "required" && "Campo obrigatório!"}
            </small>
          </Col>

          <Col sm={6} className="mb-3">
            <Form.Label>Status </Form.Label>

            <Form.Select {...register("status", { required: true })}>
              <option value="">--</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Select>
            <small className="text-danger">
              {errors.status?.type === "required" && "Campo obrigatório!"}
            </small>
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
}

export default UserAdd;
