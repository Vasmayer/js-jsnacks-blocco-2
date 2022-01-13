/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const jsnack4Element = document.getElementById('jsnack-4');

const wholeNumbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for(let i = 1; i < wholeNumbers.length ; i+=2)
{
    console.log(wholeNumbers[i],i);
    sum += wholeNumbers[i];
}

console.log(sum);

jsnack4Element.innerText = `La somma dei 10 numeri in posizione dispari è:${sum}`;


