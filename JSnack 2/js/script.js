var numUtente = parseInt(prompt("inserisci un numero:"))
/* console.log(numUtente) */

if (numUtente % 2 == 0) {
  console.log("il tuo numero è pari, possiamo stamparlo: " + numUtente);
} else {
  console.log("il tuo numero è dispari, stamperemo il successivo: " + (numUtente+1));
}