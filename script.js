'use strict';

// Generate random number(secretNumber)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

//Compare secretNumber and user input(guess)
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

    // When there is no input from player
  if(!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!'

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#03CC90';
    document.querySelector('.number').style.width = '30rem';

    // when guess is too hight
  } else if (guess > secretNumber) {
    // only if score is above 0 run code
    if(score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score --; 
      document.querySelector('.score').textContent = score;
      score;
    } else {
      document.querySelector('.message').textContent = '💥 Game over!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score --; 
      document.querySelector('.score').textContent = score;
      score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  };
});