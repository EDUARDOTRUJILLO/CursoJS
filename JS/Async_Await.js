/* Funciones asincronas esperan a que una instruccion
se cumpla para seguir ejecutando un proceso, su trabajo
su trabajo se realiza en conjunción con las promesas*/
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

async function AsyncDeclarada(){
    try {
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise("3");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        console.log("Fin Async Function");
    } catch (err) {
        console.log(err);
    }
}

AsyncDeclarada();

const AsyncExpresada = async () =>{
    try {
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        console.log("Fin Async Function");
    } catch (err) {
        console.log(err);
    }
}

AsyncExpresada();