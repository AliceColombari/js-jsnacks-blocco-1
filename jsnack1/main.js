// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

// VARIABILI
let somma = 0;
let numero;

// CICLO FOR
/*
for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero: '));
    somma += numero;
}

console.log(somma);
*/

// CICLO WHILE
let i = 0;

while (i < 10) {
    numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero: '));
    somma += numero;
    // istruzione per fermare il ciclo
    i++;
}

console.log(somma);

document.querySelector('.somma').innerHTML = 'La somma di tutti i numeri che hai inserito è: ' + somma;
