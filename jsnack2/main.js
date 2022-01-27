// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.


// calcola il cubo del numero digitato dall'utente
/*
let numero = parseInt(prompt('Inserisci un numero!'));

let i = 0;

while (i <= numero) {
    // i = base, 3 = esponente -> base ^ esponente
    console.log(Math.pow(i, 3));
    i++;
}

let cubo = document.querySelector('.cubo');
cubo.innerHTML = "Il cubo di " + numero + " è: " + (Math.pow(numero, 3));
*/



// calcola il cubo di tutti i numeri precedenti a quello digitato
let numero = parseInt(prompt('Inserisci un numero!'));
// primiNumeri farà si che venga calcolato il cubo di tutti i numeri precedenti a quello digitato
let primiNumeri = 1;
let cubo = 0;

while (primiNumeri <= numero) {

    cubo = primiNumeri**3;
    console.log("Il cubo di " + primiNumeri + " è: " + cubo)

    primiNumeri++;
}

let result = document.querySelector('.cubo');
result.innerHTML = "Il cubo di " + numero + " è: " + cubo;