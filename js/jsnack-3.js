/* 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const firstNameArray = ['Marco','Michele','Stefano','Enrico','Alessandro','Giovanni','Leonardo'];
const lastNameArray = ['Bianchi','Verdi','Rossi'];
const falseGuests = [];


while(falseGuests.length < 3)
{
    const rdnFirstNameNumber = Math.floor(Math.random() * firstNameArray.length);
    const rdnLastNameNumber = Math.floor(Math.random() * lastNameArray.length);

    console.log(rdnFirstNameNumber,rdnLastNameNumber);

    const falseGuest  =  firstNameArray[rdnFirstNameNumber]+ ' ' + lastNameArray[rdnLastNameNumber];

    if(!falseGuests.includes(falseGuest))
    {
        falseGuests.push(falseGuest);
    }
}

console.table(falseGuests);