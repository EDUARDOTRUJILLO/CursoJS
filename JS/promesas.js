/* manejo de errores, trabaja con resolve y reject
similar a un ifelse, si es que se cumple la promesa
hace ejecución del resolve, caso contrario es reject 
funciona mejor para la concatenacion de multiples procesos
asincronos*/
function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`Error el valor ingresado ${value} no es un número`);
    }
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0|Math.random()*1000);    
    });
}

cuadradoPromise(0)
    .then((obj)=>{
        console.log("Inicio Promise");
        console.log(obj);
        return cuadradoPromise(1);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradoPromise(2);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradoPromise(3);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradoPromise(4);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradoPromise(5);
    })
    .then((obj)=>{
        console.log("Fin promise");
    })
    .catch(err => console.error(err));