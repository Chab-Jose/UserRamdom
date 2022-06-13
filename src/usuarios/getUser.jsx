const URL = 'https://randomuser.me/api/?results=20'

export const userRamdom = async() =>{
    const resultado = await fetch(URL);
    const {results} = await resultado.json();
    return results;
}