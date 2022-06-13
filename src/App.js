import React, {useState} from 'react';
import Header from './componentes/header';
import Card from './componentes/card';

import { userRamdom } from './InfoUsuarios/getUser';
import './App.css';

function App() {
  //este es el arrayque guarda los usuarios como objetos
  const [users, setUsers] = useState([]);
  //genera un nuevo usuario
  const newUser = () =>{
    const oldUsers = [...users];
    userRamdom().then((usuarios) => {
      setUsers([...oldUsers, ...usuarios]);
    });  
  };

  //generacion de usuarios desde cero
  if(users.length === 0){
    userRamdom().then((usuarios) =>{
      setUsers(usuarios);
    });
  }else{
    return (
      <>
//Esto va primero
          <Header/>
          <Card users={users} newUser={newUser} />
  
      </> 
    );
  }
}

export default App;
