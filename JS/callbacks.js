//callback -> función que se ejecuta enseguida de la ejecucion
//de otra función, ejecuta porciones de código en orden
function cuadradoCallback(valor, callback){
    setTimeout(() => {
      callback(valor,valor*valor);  
    },0|Math.random()*100);
}

cuadradoCallback(0,(valor,resultado)=>{
    console.log("inicia callback");
    console.log(`Callback: ${valor}, ${resultado}`);
    cuadradoCallback(1,(valor,resultado)=>{
        console.log("inicia callback");
        console.log(`Callback: ${valor}, ${resultado}`);
        cuadradoCallback(2,(valor,resultado)=>{
            console.log("inicia callback");
            console.log(`Callback: ${valor}, ${resultado}`);
            cuadradoCallback(3,(valor,resultado)=>{
                console.log("inicia callback");
                console.log(`Callback: ${valor}, ${resultado}`);
                cuadradoCallback(4,(valor,resultado)=>{
                    console.log("inicia callback");
                    console.log(`Callback: ${valor}, ${resultado}`);
                    cuadradoCallback(5,(valor,resultado)=>{
                        console.log("inicia callback");
                        console.log(`Callback: ${valor}, ${resultado}`);
                    });
                });
            });
        });
    });
});

