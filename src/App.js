import Header from './componentes/header';
import Card from './componentes/Card';

import { userRamdom } from './usuarios/getUser';

import './App.css';
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);

  const newUser = () =>{
    const oldUsers = [...users]
    userRamdom().then((usuarios) =>{
      setUsers([...oldUsers, ...newUser]);
    });
  };

  if(users.length === 0){
    userRamdom().then((usuarios) =>{
      setUsers(usuarios);
    });
  }else{
    return (
      <>
        <Header/>
        <Card users = {users} newUser= {newUser}/>
      </>
    );
  }
  
 
}

export default App;
