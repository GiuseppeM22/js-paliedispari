
let pariDispari = prompt("scegli tra pari e dispari")
console.log(pariDispari)
let numeroScelto = parseInt(prompt("Scegli un numero da uno a 5"))
var numeroRandom = random (1, 5)
var somma = numeroScelto+numeroRandom 
console.log("somma dei nostri numeri: ", somma)
let pari = somma % 2==0
let dispari = somma % 2==1

if(pari==true){
    console.log("pari")
}else if(dispari==true){
    console.log("dispari")
}

/*if(pariDispari==pari || pariDispari==dispari){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}*/

function random(min, max){
    numeroRandom = parseInt(Math.floor(Math.random() * (max - min +1)) + min)
    
    while (numeroScelto > 5){
        numeroScelto = parseInt(prompt("Scegli un numero da uno a 5"))
        
    }
    
    console.log("Il tuo numero: ", numeroScelto)
    console.log( "Numero casuale: ", numeroRandom,)

    return numeroRandom
}


