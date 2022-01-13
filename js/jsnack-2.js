/* 

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo

*/

const jsnack2Element = document.getElementById('jsnack-2');
let message = '';

let isNumberValid = true;

do{
    const inputNumber = parseInt(prompt('Inserisci un numero!'));
    if(!isNaN(inputNumber))
    {
        if(!(inputNumber % 2))
        {
            console.log(inputNumber);
            message = inputNumber
       
        }
        else
        {
            console.log(inputNumber + 1);
            message = ( inputNumber + 1 )
        }
        isNumberValid = true;
    }
    else
    {
        isNumberValid = false;
    }

}while(!isNumberValid)

jsnack2Element.innerHTML = 'Il numero Pari che hai inserito:' + message ;