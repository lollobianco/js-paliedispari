// let word = prompt('inserisci una parola per scoprire se è palindroma oppure no: ');


// function palindroma(){

//    let reversedWord = '';

//    for (let i = word.length-1; i >= 0; i--){

//       reversedWord = reversedWord += word[i];

//    }

//    return reversedWord;

// }

// const reversedWord = palindroma();

// console.log(`La parola "${word}" al contrario e: ${reversedWord}`);

// if (reversedWord == word){

//    alert(`La parola "${word}" è palindroma: ${word} --> ${reversedWord}`);
   
// }  else{

//       alert(`La parola "${word}" non è palindroma: ${word} --> ${reversedWord}`);

// }

// ----------------------------------------------------------------------------

const evenOrOdd = prompt('Pari o Dispari?');
console.log(evenOrOdd);
const number = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`numero scelto: ${number}`);
const ranNumber = randomNumber(5, 1);
console.log(`numero bot: ${ranNumber}`);
const sumNumber = evenOdd();
console.log(`somma numeri: ${sumNumber}`);

function randomNumber(max, min){

   const randomNumber = Math.floor(Math.random() * max) + min;
   return randomNumber;
   
}

function evenOdd(){

   if (number <= 5){

      const result = (number + ranNumber);

      return result;

      console.log(`${number} + ${ranNumber} = ${result}`);

   }  else {
          
         alert("INSERISCI UN NUMERO COMPRESO TRA 1 E 5");

   }

}


if (evenOrOdd === 'pari' || 'Pari'){

   if (sumNumber % 2 == 0){

      alert(`Il bot ha scelto ${ranNumber}, te hai scelto ${number}: Hai Vinto!!!`)

   }  else{

         alert(`Il bot ha scelto ${ranNumber}, te hai scelto ${number}: Hai Perso!!!`)

      }

}  else if (evenOrOdd === 'dispari' || 'Dispari'){

      if (sumNumber % 2 != 0){

         alert(`Il bot ha scelto ${ranNumber}, te hai scelto ${number}: Hai Vinto!!!`)
      
      }  else{
               
            alert(`Il bot ha scelto ${ranNumber}, te hai scelto ${number}: Hai Perso!!!`)
      
          }

   } else{

         alert('INSERISCI PARI O DISPARI!!!');

      }
