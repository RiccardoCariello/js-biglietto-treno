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

let ticketPrice = 0;


const isKmANumber = isNaN(kilometers);
const isAgeANumber = isNaN(age);

console.log(isKmANumber);
console.log(isAgeANumber);

if (!isKmANumber && !isAgeANumber) 
{
    kilometers = parseInt(kilometers);
    age = parseInt(age);

    ticketPrice = kilometers * 0.21 ;
    console.log(ticketPrice);

    if (age < 18) 
        {
            ticketPrice = ticketPrice * 20 / 100;
            
            console.log(ticketPrice);

            
        } 
    else if (age > 65)
        {
            ticketPrice = ticketPrice * 40 / 100;
            
            console.log(ticketPrice);
            
        }

    
    
    let ticketPrice = ticketPrice.toFixed(2);
    console.log(ticketPrice);



} 

else 
{
    console.log("I valori inseriti non sono idonei :c ");   
}



