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

function audioFile(fileName){
  var audio = new Audio(fileName);
  audio.play();
}

// Compare secretNumber and user input(guess)
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input from player
  if(!guess) {
    displayMessage('⛔️ No number!');

  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    audioFile("audio/correct.mp3");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#579B55';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // when guess is wrong
  } else if (guess !== secretNumber) {    
      if(score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      audioFile("audio/wrong.mp3");
      score --; 
      displayScore(score)
      score;
    } else {
      displayMessage('💥 Game over!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor="#CC362B";
    }
  }
});

// Game reset functionality

// Select the element with the 'again' class + attach a click event handler
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

// Restore initial values of variables
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#403734';
  document.querySelector('.number').style.width = '15rem';
});
