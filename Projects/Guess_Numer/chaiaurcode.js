let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function () {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a enter number more than 1');
  } else if (guess > 100) {
    alert('Please enter a enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess();
    }
  }
}

function checkGuess(guess) {}
function displayGuess(guess) {}

function displayMessage(message) {}

function endGame() {}

function newGame() {}
