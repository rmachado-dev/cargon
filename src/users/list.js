import React from "react";
import { Button, Table } from "react-bootstrap";

function List({ usuarios }) {
  return (
    <>
      <h1 className="py-5">Lista dos Usuários</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Gênero</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {usuarios &&
            usuarios.length &&
            usuarios.map((usuario, index) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.gender}</td>
                <td>{usuario.status}</td>
                <td>
                  <Button variant="outline-dark" size="sm" className="m-1">
                    +info
                  </Button>
                  <Button variant="outline-dark" size="sm" className="m-1">
                    editar
                  </Button>
                  <Button variant="outline-danger" size="sm" className="m-1">
                    deletar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
