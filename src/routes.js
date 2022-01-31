import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./users/add";
import Home from "./home";
import Menu from "./menu";
import UserEdit from "./users/edit";

const Rotas = () => (
  <Router>
    <Menu />
    <Routes>
      <Route path="/edit/:id" element={<UserEdit />} />
      <Route path="/add" element={<Add />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default Rotas;
