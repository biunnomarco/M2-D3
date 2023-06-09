/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
//*RISPOSTA 1
/* let a=5;
let b=7;
if (a>b) {
  console.log(a)
} else {console.log(b)}
 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
//*RISPOSTA 2
/* let number = 7;
if (number !== 5) {
  console.log("not equal")
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
//*RISPOSTA 3
/* let number = 20;
if ((number % 5) === 0) {
  console.log("divisible by 5")
} else { console.log("not divisible by 5")} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
//*RISPOSTA 4
/* let a = 16; let b = 24;
if ((a===8) || (b===8) || (a+b===8) || (a-b===8) || (b-a===8)) {
  console.log("true")
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

//*RISPOSTA 5
/* let totalShoppingCart = 32; let shipping = 10; let total;
if (totalShoppingCart>50) {
  total = totalShoppingCart;
} else { total = totalShoppingCart + shipping}
console.log("Totale:", total) */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

//*RISPOSTA 6
/* let totalShoppingCart = 100; 
let shipping = 10; 
let total;
let totalShoppingCartBlack = totalShoppingCart * 0.8;
if (totalShoppingCartBlack>50) {
  total = totalShoppingCartBlack;
} else { total = totalShoppingCartBlack + shipping}
console.log("Totale:", total) */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//*RISPOSTA 7
/* let a = 177;
let b = 29;
let c = 400;
let max; let med; let min;

if (a>b && a>c) {
   max = a;
   if (b>c) {
    med = b;
    min = c;
   } else { med = c; min = b;}
}
else if (b>a && b>c) {
  max = b;
    if (a>c) {
      med = a;
      min = c;
    } else { med = c; min = a;}
  
}
else {
  max = c; 
  if (a>b) { 
    med=a;
    min=b;
  } else { med=b; min=a}
}

console.log(max, med, min) */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

//*RISPOSTA 8
/* let a = 10, b = 18.7, c = "19";
console.log(typeof a, typeof b, typeof c);
if (Number.isInteger(c) === true) {
  console.log("Intero");
} else { console.log("Non Intero")} */


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//*RISPOSTA 9 
/* let number = 1;
if (number % 2 === 0) {
  console.log("Il numero è pari")
} else { console.log("Il numero è dispari")} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

//*RISPOSTA 10
  /* let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else{
      console.log("Uguale a 10 o maggiore");
    } */



/*ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

//* RISPOSTA 11

/* let number = 17;
if (number<5) {
  console.log("Tiny");
}
else if (number>=5 && number <10) {
  console.log("Small");
}
else if (number>=10 && number <15) {
  console.log("Medium");
}
else if (number>=15 && number <20) {
  console.log("Large");
}
else {
  console.log("Huge");
} */



/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

//* RISPOSTA 12
/* let isMale = false;
let gender = isMale ? "male" : "female";
console.log(gender) */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

//* RISPOSTA 13
/* let x=0, n=0;
while (n<6) {
  console.log(n);
  n++;
} */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

//* RISPOSTA 14
/* for (let n = 0; n < 11; n++) {
  console.log(n);
} */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

//* RISPOSTA 15

/* for (let n = 0; n < 11; n++) {
  if (n === 3 || n === 8) {
    continue
  }
  console.log(n);
} */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

//* RISPOSTA 16 

/* let oddEven;
for (let n = 0; n < 16; n++) {
  if (n % 2 === 0) {
    oddEven = " Pari"
  } else {
    oddEven = " Dispari"
  }
  console.log(n + oddEven);
} */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

//*RISPOSTA 17

/* let stat;
for (let n = 1; n < 101; n++) {
  if (n % 3 === 0 && n % 5 !== 0) {
    stat = " Fizz"
  } else if (n % 5 === 0 && n % 3 !== 0) {
    stat = " Buzz"
  } else if (n % 3 === 0 || n % 5 === 0) {
    stat = " FizzBuzz"
  } else { stat = null}
  console.log(n + stat);
}  */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

//* RISPOSTA 18

/* let day = 6;

switch(day) {
  case 1 : day = "Monday";
    break;
  case 2 : day = "Tuesday"
    break;
  case 3 : day = "Wednesday"
    break;  
  case 4 : day = "Thursday"
    break; 
  case 5 : day = "Friday"
    break; 
  case 6 : day = "Saturday"
    break; 
  case 7 : day = "Sunday"
    break; 
}
console.log(day) */
