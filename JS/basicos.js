var hola = "Hola Mundo"; //No utilizar por ser una mala práctica
let hello = "Hello World";
console.log(hola);
console.log(hello);
console.log("*******************var****************");
var musica = "rock";
console.log("variable antes del bloque",musica);
{
    var musica = "pop";
    console.log("variable dentro del bloque",musica);
}
console.log("variable despues del bloque",musica);
console.log("*******************let****************");
let musica2 = "rock";
console.log("variable antes del bloque",musica2);
{
    let musica2 = "pop";
    console.log("variable dentro del bloque",musica2);
}
console.log("variable despues del bloque",musica2);