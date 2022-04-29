'use strict';

// Generate random number(secretNumber)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
}

// Compare secretNumber and user input(guess)
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input from player
  if(!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!'
    displayMessage('⛔️ No number!');

  // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#03CC90';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // when guess is wrong
  } else if (guess !== secretNumber) {    
      if(score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too hight!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      score --; 
      // document.querySelector('.score').textContent = score;
      displayScore(score)
      score;
    } else {
      // document.querySelector('.message').textContent = '💥 Game over!';
      displayMessage('💥 Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Game reset functionality

// Select the element with the 'again' class + attach a click event handler
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

// Restore initial values of variables
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score)
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
