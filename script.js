'use strict';

/*
console.log(document.querySelector('.message').textContent);

//experiment
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Generate random number(secretNumber)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

//Compare secretNumber and user input(guess)
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if(!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!'
  } else if (guess === secretNumber) {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too Hight!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  }
});