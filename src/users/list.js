import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function UserList({ usuarios }) {

  function deleteUser(id){
    axios.delete(`https://gorest.co.in/public/v1/users?access-token=74db48e291075450bdcbe60b248398f428968607c014bc0955b273cd025e3778/${id}`)
  }

  return (
    <>
      <Container>
        <h1 className="py-5">Lista dos Usuários</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
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
                    <Link to="" className="btn btn-outline-dark btn-sm m-1">+ info</Link>
                    <Link to={{ pathname: `/edit/${usuario.id}`}} className="btn btn-outline-dark btn-sm m-1">edit</Link>
                    <Link to="" className="btn btn-outline-danger btn-sm m-1" onClick={()=>deleteUser(usuario.id)}>delete</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default UserList;
