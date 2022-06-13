import './carHeader.css'

function CardHeader({user}) {
   const {name, picture} = user;
   
    return(
        <>
        <div className="card-header">
            <img src={picture.large} alt={`${name.first} ${name.last}`} />
        </div>
        </>
    )
    
}
export default CardHeader;