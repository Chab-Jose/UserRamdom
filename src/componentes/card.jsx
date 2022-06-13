
import CardHeader from "./card-heard";
import CardBody from "./card-body";
import CardFooter from "./card-footer";
import Arrows from "./arrow";
import { useState, useEffect } from "react";

function Card ({users, newUser}) {
    //constantes para guardar el usuario actual y la otra guarda la informacion que vamos a utlizar
   const[actual, setActual] = useState(0);
   const [textos, setTextos] = useState({});

   //Va hacia atras
   const previo = () => {
    setActual(actual - 1);
    if(actual === 0){
        setActual(0);
    }
   };
  
   //Va hacia adelante
   const siguiente = () => {
    setActual(actual + 1);
    if(actual === users.length - 5){
        newUser();      
    }
   };

   //permite mostrar el la informacion del primer elemnto al cargar en este caso su nombre
   useEffect(() => {
    cambiaTextos("user");
   }, [actual]);

   //permite crear el cambio en card body guarda los datos del usuario
   const cambiaTextos = (icono) =>{
    switch (icono) {
        case 'user':
            setTextos({
                parrafo: 'Hola, mi nombre es',
                main: `${users[actual].name.first} ${users[actual].name.last}`,
                icono:'user',
            });
            break;
        case 'email':
            setTextos({
                parrafo: 'Mi direccion de email es',
                main: `${users[actual].email}`,
                icono:'email',
            });
            break;
        case 'birthday':
            setTextos({
                parrafo: 'Mi cumpleaños es',
                main: `${users[actual].dob.date.slice(8 ,10
                       )}/${users[actual].dob.date.slice(5 ,7
                       )}/${users[actual].dob.date.slice(0 ,4)}`,
                icono:'birthday',
            });
            break;
        case 'address':
            setTextos({
                parrafo: 'Mi direccion es',
                main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
                icono:'address',
            });
            break;
        case 'phone':
            setTextos({
                parrafo: 'Mi telefono  es',
                main: `${users[actual].phone}`,
                icono:'phone',
            }); 
            break;
        case 'username':
            setTextos({
                parrafo: 'Mi usuario es',
                main: `${users[actual].login.username}`,
                icono:'username',
            });
            break;
    
        default:
            break;
    }
   };
// va primero sin los elementos
//ahora primero ve haciendolo por partes primero el header, luego el body y asi 
    return(
        <>
        <main>
            <div className="card">
               <CardHeader user={users[actual]}/>
                <CardBody textos={textos}/>
                <CardFooter
                user={users[actual]}
                cambiaTextos={cambiaTextos}
                textos={textos}
                />   
                <Arrows 
                users={users}
                actual={actual}
                previo={previo}
                siguiente={siguiente}
                />
                             
                
            </div>
            
        </main>
        </>
    );
};
export default Card;