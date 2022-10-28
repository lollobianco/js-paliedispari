let word = prompt('inserisci una parola per scoprire se è palindroma oppure no: ');


function palindroma(){

   let reversedWord = '';

   for (let i = word.length-1; i >= 0; i--){

      reversedWord = reversedWord += word[i];

   }

   return reversedWord;

}

const reversedWord = palindroma();

console.log(`La parola "${word}" al contrario e: ${reversedWord}`);

if (reversedWord == word){

   alert(`La parola "${word}" è palindroma: ${word} --> ${reversedWord}`);
   
}  else{

      alert(`La parola "${word}" non è palindroma: ${word} --> ${reversedWord}`);

}

console.log(`-------------------------------------------`)

// ----------------------------------------------------------------------------

const evenOrOdd = prompt('Pari o Dispari?');
console.log(`hai scelto: ${evenOrOdd}`);

const number = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`numero scelto: ${number}`);

const ranNumber = randomNumber(5, 1);
console.log(`numero bot: ${ranNumber}`);

const sumNumber = result();
console.log(`${number} + ${ranNumber} = ${sumNumber}`);



//funzione per generare il numero casuale del bot:

function randomNumber(max, min){

   const randomNumber = Math.floor(Math.random() * max) + min;
   return randomNumber;

}



//funzione per calcolare la somma dei due numeri:

function result(){

   if (number <= 5){

      const result = (number + ranNumber);

      return result;

   }  else {
          
         alert("INSERISCI UN NUMERO COMPRESO TRA 1 E 5");

   }

}



// funzione di controllo per vedere se la somma è pari o dispari:

function evenOdd(){

   let check = ''; 

   if (sumNumber % 2 == 0){

      check = 'pari';
      return check;

   }  else{

         check = 'dispari';
         return check;

      }

}



//controllo finale per dichiarare il vincitore:

if (evenOrOdd == evenOdd() ){

   console.log (`l'utente ha vinto`)
   alert('Hai vinto!!');

}  else {

      console.log (`l'utente ha perso`)
      alert('Hai perso!!');

   } 
