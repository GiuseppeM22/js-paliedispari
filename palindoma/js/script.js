
/*********************
 esercizio palindromi
**********************/

let parolaUtente = prompt("inserisci una parola")
let parolaAlRovescio = parolaPalindroma(parolaUtente);

if(parolaUtente == parolaAlRovescio){
    console.log("la tua parola è palindroma")
}else{
    console.log("la tua parola non è palindroma")
}



function parolaPalindroma(parola){
    let palindroma = "";
    for (let i = parola.length-1; i >= 0; i--) {
        palindroma += parola[i];
        
    }

    return palindroma;
}