console.log(`

#############################################################################

Benvenuto nel calcolatore del prezzo del tuo biglietto da viaggio personale!

#############################################################################

Ti verrà chiesto di inserire dei semplici dati.

vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv



`);


let kilometers = prompt("Inserisci il numero di chilometri da percorrere");
console.log(kilometers);

let  age = prompt("Inserisci la tua età");
console.log(age);

let ticketPrice;
let discount;

const isKmANumber = isNaN(kilometers);
const isAgeANumber = isNaN(age);

console.log("I kilometri sono una parola?  " + isKmANumber);
console.log("L'età è una parola? " + isAgeANumber);

if (!isKmANumber && !isAgeANumber) 
{
    kilometers = parseInt(kilometers);
    age = parseInt(age);

    ticketPrice = kilometers * 0.21 ;
    console.log("Prezzo intero biglietto " + ticketPrice);

    if (age < 18) 
        {
            discount = ticketPrice * 20 / 100;
            ticketPrice = ticketPrice - discount;
            
            console.log("Prezzo scontato del 20% " + ticketPrice);

            
        } 
    else if (age > 65)
        {
            discount = ticketPrice * 40 / 100;
            ticketPrice = ticketPrice - discount;
            console.log("Prezzo scontato del 40% " + ticketPrice);
            
        }

    
    
    ticketPrice = ticketPrice.toFixed(2);
    console.log("Prezzo aggiustato dopo la virgola " + ticketPrice + "€");



} 

else 
{
    console.log("I valori inseriti non sono idonei :c ");   
}



