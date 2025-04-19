'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const scoreCounter = function (score) {
  document.querySelector('.score').textContent = score;
};
const number = function (number) {
  document.querySelector('.number').textContent = number;
};
const styleConverter = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no number is entered
  if (!guess) {
    displayMessage('⛔ No number!');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    number(secretNumber);

    // Manupulating css styles
    styleConverter('#60b347', '30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low!');
      score--;
      scoreCounter(score);
    } else {
      displayMessage('😔 You lost the game!');
      scoreCounter(0);
    }
  }
});
// reset when click again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreCounter(score);
  number('?');
  document.querySelector('.guess').value = '';

  // style restoration
  styleConverter('#222', '15rem');
});
