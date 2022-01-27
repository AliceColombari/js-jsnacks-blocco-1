// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

let numero = parseInt(prompt('Inserisci un numero!'));

let i = 0;

while (i <= numero) {
    // i = base, 3 = esponente -> base ^ esponente
    console.log(Math.pow(i, 3));
    i++;
}

let cubo = document.querySelector('.cubo');
cubo.innerHTML = "Il cubo di " + numero + " è: " + (Math.pow(numero, 3));