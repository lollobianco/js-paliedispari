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

