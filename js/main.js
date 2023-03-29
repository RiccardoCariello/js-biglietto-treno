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


const isKmANumber = isNaN(kilometers);
const isAgeANumber = isNaN(age);

console.log(isKmANumber);
console.log(isAgeANumber);

if (!isKmANumber && !isAgeANumber) 
{
    kilometers = parseInt(kilometers);
    age = parseInt(age);

    ticketPrice = ticketPrice * 0.21 ;
    console.log(ticketPrice);

    if (age < 18) 
    {
        
        
    } 
    else if (age > 65)
        {
        
        }





} 

else 
{
    console.log("I valori inseriti non sono idonei :c ");   
}



