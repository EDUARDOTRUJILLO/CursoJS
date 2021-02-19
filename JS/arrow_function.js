console.log("Arrow Functions");

/* const saludar = () =>{
    console.log("Hola");
}
saludar(); */

const saludar = (nombre)=>console.log(`Hola ${nombre}`);
saludar("Irma");

/* const sumar = function(a,b){
    return a+b;
} */
const sumar = (a,b) => a+b; //evitar el uso de llaves es solo para funciones con una sola instruccion
console.log(sumar(9,9));

const funcionMultiplesLineas =()=>{
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
funcionMultiplesLineas();

const numeros = [1,2,3,4,5];
numeros.forEach((dato,pos) => {
    console.log(`${dato} esta en la posicion ${pos}`);
});

const perro={
    nombre: "Yago",
    ladrar(){ ///Si se utiliza una arrow function captura el contexto del objeto padre
        console.log(this);
    }
}
perro.ladrar();