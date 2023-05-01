// make a variable ,  Store Random number Generated (betwn 1 to 100)
let secretNumber = Math.floor(Math.random()*100)+1;

// now we get the user input
let guessInput = document.getElementById("guess");

let message = document.getElementById("message");


// create a function , when user clicks the  guess - btn then function will call & compares the users guess to the secret number using the random

function checkGuess(){
      
    let guess = parseInt(guessInput.value);

    if(guess === secretNumber){
        message.innerHTML = 'Congratulations! You Guess the Secret Number!'
        message.style.color = 'green';
    }

   else if(guess < secretNumber){
    message.innerHTML = 'Too Low , Try Again!'
    message.style.color = 'red';

   }

   else if(guess > secretNumber){
    message.innerHTML = 'Too High , Try Again!'
    message.style.color = 'red';

   }

}

// Another function for Reset Button  is call when user clicks the reset btn : 

  function  resetGame(){
      secretNumber = Math.floor(Math.random()*100)+1;
      guessInput.value = '' ;
      message.innerHTML = '' ;
  }