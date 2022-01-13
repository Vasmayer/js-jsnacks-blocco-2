/* 

Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro

*/

const arrayOne = [1,2,3,4,5,6,7,8,9,10];
const arrayTwo = [1,2,3,4,5];

let smallerArray = [];
let biggerArray = [];

if(arrayOne.length < arrayTwo.length)
{
    smallerArray = arrayOne;
    biggerArray = arrayTwo;
}
if(arrayTwo.length < arrayOne.length)
{
    smallerArray = arrayTwo;
    biggerArray = arrayOne;
}

while(smallerArray.length < biggerArray.length)
{
    smallerArray.push(Math.floor(Math.random() * 100) + 1);
}

console.table(arrayOne);
console.table(arrayTwo);