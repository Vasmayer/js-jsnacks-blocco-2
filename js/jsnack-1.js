/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/

let i=0;
let totaldowhile=0;
do
{
    const number = parseInt(prompt(`Inserisci un numero ( ${i+1} di 5 )`));
    totaldowhile += number;
    i++;

}while(i<5);

console.log(totaldowhile);

let totalfor=0;

for (let k = 0; k < 5; k++)
{
    const number = parseInt(prompt(`Inserisci un numero ( ${k+1} di 5 )`));
    totalfor += number;
}

let z = 0;
let totalwhile = 0;
console.log(totalfor);

while(z < 5)
{
    const number = parseInt(prompt(`Inserisci un numero ( ${z+1} di 5 )`));
    totalwhile += number;
    z++;
}

console.log(totalwhile);