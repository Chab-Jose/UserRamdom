//destro de una carpeta aparte creas estos
const URL = 'https://randomuser.me/api/?results=20';

//esta parte es una funcion asincrona es como usar promesas  el await sirve para realizar 
//unna accion en miedio de los que seria una promes
export const userRamdom = async () =>{
  const resultado = await fetch(URL);
  const {results} = await resultado.json();
  return results;
}