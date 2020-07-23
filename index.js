

function par(){
    let parar = prompt("hasta donde ver numeros ?")
    console.log("*****************ParImpar********************");
    for(var i=1; i <= parar; i++){
        if(i % 2 === 0){
            console.log( i+ "  es par" );
        }else{
            console.log( i+ "  impar");
        }            
    }        
    console.log("///////////////////////////////////////");
}


function imc(){
    let a = prompt('digite peso kg:');
    let b = prompt('digite altura m:');
    let imc = a/(b*b);
    console.log("*****************IMC********************");
    console.log("su imc es: "+imc)
    console.log("///////////////////////////////////////");
}


function multiplicar (){
    num = document.getElementById("num").value;
    num = parseInt(num);

    console.log("*****************Tabla de multiplicar********************");
    if( num >=2 && num <=10 ){
        for (var index = 1; index <= 10; index++) {
            let mult = num * index;
            console.log(num + "x" + index + "=" + mult);
        }
    }else{
        alert("ingrese un numero entre 2 y 10")
    }
    console.log("///////////////////////////////////////");
}