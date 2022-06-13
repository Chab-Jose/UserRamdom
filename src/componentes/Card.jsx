import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import CardFooter from "./cardFooter";
import Arrows from "./arrows";

import './card.css'
import { useEffect, useState } from "react";

function Card({users, newUser}) {
   
    const [actual, SetActual] = useState(0);
    const [textos, SetTextos] = useState({});

    const previo = () =>{
        SetActual(actual -1);
        if(actual === 0){
            SetActual(0);
        }
    };

    const siguiente = () =>{
        SetActual(actual + 1);
        if(actual === users.length - 20){
            newUser();
        }
    };
   
    useEffect(() => {
        cambiaTextos("user");
    }, [actual]);

    const cambiaTextos = (icono) =>{
        switch (icono) {
            case 'user':
                SetTextos({
                    parrafo:'Hola mi nombre es',
                    main: `${users[actual].name.first} ${users[actual].name.last}`,
                    icono:'user',
                });
                break;
            case'email':
                SetTextos({
                    parrafo:'Mi direccion de email es',
                    main: `${users[actual].email}`,
                    icono:'email',
                });
                break;
            case 'birthday':
                SetTextos({
                    parrafo:'Mi cumpleaños es',
                    main: `${users[actual].dob.date.slice(8, 10
                        )}/${users[actual].dob.date.slice(5, 7
                        )}/ ${users[actual].dob.date.slice(0, 4)}`,
                    icono:'birthday',
                });
                break;
            case 'address':
                SetTextos({
                    parrafo:'Mi direccion es',
                    main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
                    icono:'address',
                });
                break;
            case 'phone':
                SetTextos({
                    parrafo:'Mi telefono es',
                    main: `${users[actual].phone}`,
                    icono:'phone',
                });
                break;
            case 'username':
                SetTextos({
                    parrafo:'Mi usuario es',
                    main: `${users[actual].login.username}`,
                    icono:'username',
                });
                break;
            default:
                break;
        }
    };

    return(
        <>
            <main>
                <div className="card">
                    <CardHeader user={users[actual]}/>
                    <CardBody textos={textos}/>
                    <CardFooter
                    cambiaTextos = {cambiaTextos}
                    />
                    <Arrows
                    previo = {previo}
                    siguiente = {siguiente}
                    />
                </div>
            </main>
        </>
    );
    
}

export default Card;