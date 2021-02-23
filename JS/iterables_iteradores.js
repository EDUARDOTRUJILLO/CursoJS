/* iterable: elemento del cual su contenido se puede recorrer
iterador: mecanismo que recorre los elementos del iterable */
const iterable = [1,2,3,4,5,6];
//const iterable = "Hola Mundo";
//const iterable = new Map([1,2,3,4,5,6,6]);
//const iterable = new Map([["nombre","Jon"],["Edad",35]]);
//accedemos al iterador de la variable iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */
let next = iterador.next();
while(!next.done){
    console.log(next.value);
    next =iterador.next()//next guarda la posicion en la que se quedo
}