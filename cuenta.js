



var cuenta ={
    nombre: "alex" ,
    saldo: 0,
    
    mas: function(){
        const _dinero = parseInt(document.getElementById("saldo").value);
        console.log("Ingresaste $ " + _dinero);
        return this.saldo += _dinero;
    },
    menos: function(){
        const _dinero = parseInt(document.getElementById("saldo").value);
        console.log("Has retirado $ " + _dinero);
        return this.saldo -= _dinero;
    },
    informar: function(){
        console.log( "Saldo actual para Alex es = " + this.saldo + "$" );
    }
}