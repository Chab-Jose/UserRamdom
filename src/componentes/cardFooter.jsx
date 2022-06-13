import User from "./icono/user";
import Email from "./icono/email";
import Birthday from "./icono/birthday";
import Address from "./icono/address";
import Phone from "./icono/phone";
import Password from "./icono/password";

import './cardFooter.css';

function CardFooter({cambiaTextos}) {
    const clase = (e) =>{
        document.querySelectorAll('li > div > svg').forEach(datos2 => {datos2.setAttribute('class', '""') });
        e.target.setAttribute('class', 'Active');
        cambiaTextos(e.target.getAttribute('name'));
    };
    
    return(
        <>
        <div className="card-footer">
           <ul>
            <li><div onMouseEnter={clase}><User/></div></li>
            <li><div onMouseEnter={clase}><Email/></div></li>
            <li><div onMouseEnter={clase}><Birthday/></div></li>
            <li><div onMouseEnter={clase}><Address/></div></li>
            <li><div onMouseEnter={clase}><Phone/></div></li>
            <li><div onMouseEnter={clase}><Password/></div></li>
           </ul>
        </div>
        </>
    )
    
}
export default CardFooter;