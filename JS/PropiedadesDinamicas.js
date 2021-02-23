let aleatorio =Math.round(Math.random()*100+5)
const objUsuarios = {
    [`ID_${aleatorio}`]:"Valor Aleatorio"
};
console.log(objUsuarios);
const usuarios = ["Jon","Irma","Miguel","Kala","Kenai"];

usuarios.forEach((usuario,index)=>objUsuarios[`ID_${index}`]=usuario);
console.log(objUsuarios);