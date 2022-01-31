import React, { useEffect, useState } from 'react';
import api from './services/api';
import UserList from './users/list';

function Home() {
   const [lista, setLista] = useState([]);
   useEffect(() => {
    api
      .get(
        "/users?access-token=74db48e291075450bdcbe60b248398f428968607c014bc0955b273cd025e3778"
      )
      .then((response) => setLista(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

   return(
      <UserList usuarios={lista.data} />
   )
  
}
export default Home;