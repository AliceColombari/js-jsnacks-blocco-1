// Calcola la somma e la media dei primi 10 numeri
// numeri
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// variabili
let somma = 0;
let media = '';

// ciclo for per calcolare la somma dei primi dieci numeri
for (let i = 0; i < numeri.length; i++) {

    somma = somma + numeri [i];

    // 'stampa' dei numeri da sommare
    console.log(numeri[i] + ' +');
}

// 'stampa' della somma
console.log("La somma totale vale: " + somma);

// calcolo della media
media = somma / numeri.length;

// 'stampa' della media arrotondata ai primi due decimali
console.log("La media vale: " + media.toFixed(2));

// visibile nell'html - risultato somma
let resultSomma = document.querySelector('.somma');
resultSomma.innerHTML = "La somma dei primi dieci numeri è: " + somma;

// visibile nell'html - risultato media
let resultMedia = document.querySelector('.media');
resultMedia.innerHTML = "La media dei primi dieci numeri è: " + media.toFixed(2);