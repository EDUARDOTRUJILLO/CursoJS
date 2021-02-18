/* const b = {} //No es necesario, sin embargo es útil hacer uso de const para declara un objeto
            //dado que se asegura que ningún otro objeto haga uso del mismo espacio de memoria
console.log(b);

const lalo = {
    nombre: "Lalo",
    apellido: "Trujillo",
    edad: 22,
    pasatiempo: ["videojuegos","Disney +","diseñar","leer"],
    soltero: false,
    contacto:{
        email: "lalotume@gmail.com",
        twitter: "@lalotume",
        movil: "+52 2211163759",
    },
    saludar:function(p){
        console.log("Hola :D",p);
    },
    decirNombre:function(){
        console.log(`Hola mi nombre es: ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}
console.log(lalo.nombre);
console.log(lalo.apellido);
console.log(lalo.pasatiempo[2]);
console.log(lalo.contacto.movil);
lalo.saludar("Juan");
lalo.decirNombre();
 */

 /////Destructuración/////
/////Sin/////
/* const numeros = [1,2,3];
let uno = numeros[0],
 dos = numeros[1],
 tres = numeros[2];

console.log(uno,dos,tres); */
/////Con/////
/*const [one,two,three] = numeros;
console.log(one,two,three);

let persona2 = {
    nombre: "jon",
    apellido: "mircha",
    edad: 35
}*/

/*let {nombre,apellido,edad} = persona2; /// las variables deben tener el mismo nombre de las propiedad,el orden no afecta
console.log(nombre,apellido,edad);*/

///Objetos Literales
let nombre = "kenai",
edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar:function(){
        console.log("Guauu Guauu")
    }
}

console.log(perro);
perro.ladrar();

const dog ={
    nombre,
    edad,
    raza: "Bulldog Frances",
    ladrar(){ //declaración de funciones en obj literales
        console.log("Guauu Guauu Guauu")
    }
}

console.log(dog);
dog.ladrar();