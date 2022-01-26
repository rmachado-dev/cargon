import React from "react";
import { Button, Table } from "react-bootstrap";

function List() {
  return (
    <>
      <h2>Lista dos Usuários</h2>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Gênero</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>nome@email.com</td>
            <td>Masculino</td>
            <td>Ativo</td>
            <td className="text-center">
               <Button variant="outline-primary" size="sm" className="m-1">+info</Button>
               <Button variant="outline-warning" size="sm" className="m-1">editar</Button>
               <Button variant="outline-dark" size="sm" className="m-1">deletar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default List;
