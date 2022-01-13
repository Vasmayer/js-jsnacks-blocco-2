/* 

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo

*/


let isNumberValid = true;

do{
    const inputNumber = parseInt(prompt('Inserisci un numero!'));
    if(!isNaN(inputNumber))
    {
        if(!(inputNumber % 2))
        {
            console.log(inputNumber);
        }
        else
        {
            console.log(inputNumber + 1);
        }
        isNumberValid = true;
    }
    else
    {
        isNumberValid = false;
    }

}while(!isNumberValid)