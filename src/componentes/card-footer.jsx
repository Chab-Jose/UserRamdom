
import User from "./iconos/user";
import Email from "./iconos/email";
import Birthday from "./iconos/birthday";
import Address from "./iconos/address";
import Phone from "./iconos/phone";
import Password from "./iconos/password";



function CardFooter({cambiaTextos, textos }) {
    const clase = (e) => {
        document.querySelectorAll('li > div > svg').forEach(datos2 => {datos2.setAttribute('class', '""') });
        e.target.setAttribute('class', 'Active');
        cambiaTextos(e.target.getAttribute('name'));
	};
  
    return(
        <>
        <div className="card-footer">
                    <ul>
                        <li><div onMouseEnter={clase} ><User /></div></li>
                        <li><div onMouseEnter={clase} ><Email /></div></li>
                        <li><div onMouseEnter={clase} ><Birthday /></div></li>
                        <li><div onMouseEnter={clase} ><Address /></div></li>
                        <li><div onMouseEnter={clase} ><Phone /></div></li>
                        <li><div onMouseEnter={clase} ><Password /></div></li>
                    </ul>
                </div>
        </>
    );
    
}

export default CardFooter;