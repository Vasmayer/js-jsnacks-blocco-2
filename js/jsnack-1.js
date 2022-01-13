/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/

const numbers = [];

const jsnack1Element = document.getElementById('jsnack-1');
const jsnack1ElementSommaButton = document.getElementById('somma');
const jsnack1ElementNumberOne = document.getElementById('numberone');
const jsnack1ElementNumberTwo = document.getElementById('numbertwo');
const jsnack1ElementNumberThree = document.getElementById('numberthree');
const jsnack1ElementNumberFour = document.getElementById('numberfour');
const jsnack1ElementNumberFive = document.getElementById('numberfive');

let message = 'Il totale dei cinque numeri inseriti è:';

/* let i=0;
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
 console.log(totalfor);
*/

let z = 0;
let totalwhile = 0;


console.log(totalwhile);

jsnack1ElementSommaButton.addEventListener('click',function(){

    numbers.push(parseInt(jsnack1ElementNumberOne.value));
    numbers.push(parseInt(jsnack1ElementNumberTwo.value));
    numbers.push(parseInt(jsnack1ElementNumberThree.value));
    numbers.push(parseInt(jsnack1ElementNumberFour.value));
    numbers.push(parseInt(jsnack1ElementNumberFive.value));


    while(z < 5)
    {
        /* const number = parseInt(prompt(`Inserisci un numero ( ${z+1} di 5 )`)); */
        /* totalwhile += number; */

        totalwhile += numbers[z];

        z++;
    }

    jsnack1Element.innerHTML = message + ' ' + totalwhile ;

});
