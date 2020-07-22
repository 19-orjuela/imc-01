let parar = prompt("hasta donde ver numeros ?")
for(var i=1; i <= parar; i++){
    //comprovar si es un numero par
    if(i % 2 === 0){
        console.log( i+ "es par" );
    }else{
        console.log( i+ "impar");
    }
}