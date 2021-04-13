// jSnack 1
var sommaW = 0;
var counter = 0;

while (counter < 5) {
  var numUtenteW = parseInt(prompt("inserisci un numero:"));
  /* console.log(numUtenteW) */
  sommaW += numUtenteW;
  counter++;
}

console.log("---- Programma con il while ----");
console.log("La somma dei numeri inseriti è " + sommaW);


/* ========================== */


var sommaF = 0;

for (i = 0; i < 5; i++) {
  var numUtenteF = parseInt(prompt("Inserisci un numero:"));
  sommaF += numUtenteF;
}

console.log("---- Programma con il for ----");
console.log("La somma dei numeri inseriti è " + sommaF);



// jSnack 2
var numUtente = parseInt(prompt("inserisci un numero:"))
/* console.log(numUtente) */

if (numUtente % 2 == 0) {
  console.log("il tuo numero è pari, possiamo stamparlo: " + numUtente);
} else {
  console.log("il tuo numero è dispari, stamperemo il successivo: " + (numUtente+1));
}