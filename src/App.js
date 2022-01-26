import React from "react";
import {  Container } from "react-bootstrap";
import List from "./users/list";

function App() {
  return (
    <>
      <Container>
        <h1>Processo Seletivo - ReactJS</h1>
        <List />
      </Container>
    </>
  );
}

export default App;
