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

// ----------------------------------------------------------------------------

let evenOrOdd = prompt('Pari o dispari?');
console.log(evenOrOdd);

function randomNumber(){
   let randomNumber = Math.round(Math.random() * 1) + 4;
   return randomNumber;
}

function evenOdd(){

   let number = parseInt(prompt('Inserisci un numero da 1 a 5'));

   if (number <= 5){

      result = number + randomNumber();

      console.log(result);

      return result;

   }  else {

         alert("INSERISCI UN NUMERO COMPRESO TRA 1 E 5");

   }

}

if (evenOrOdd == 'pari' || 'Pari'){

   if (evenOdd() % 2 == 0){

      alert('Hai Vinto!!!');

   }  else{

         alert('Hai Perso!!!');

      }

}  else{

      if (evenOdd() % 2 != 0){

         alert('Hai Vinto!!!');
   
      }  else{
   
            alert('Hai Perso!!!');
   
         }

   }