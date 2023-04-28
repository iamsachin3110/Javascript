'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let count = 0

document.querySelector('.again').style.display = 'none';
document.querySelector('.custom_button').addEventListener('click', Guess);
document.querySelector('.again').addEventListener('click', ResetGame);


function Guess() {
  count += 1
  if (document.querySelector('.guess') == 'null') {
    alert("Please guess a number!");
  } else {
    const guess = document.getElementById('guess').value;
    console.log("Calling", guess, secretNumber);
    if (guess == secretNumber) {
      document.querySelector('.message').textContent = "Woww guess correct";
      document.querySelector('.custom_button').style.display = 'none';
      document.querySelector('.again').style.display = 'block';
      document.querySelector('body').style.backgroundColor = 'green';
    }
    if (guess != secretNumber) document.querySelector('.message').textContent = `${score - count} only remainig`;
  }
  if (score - count == 0) {
    document.querySelector('.message').textContent = "Oopss Game Over try again";
    document.querySelector('.custom_button').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    document.querySelector('body').style.backgroundColor = 'red';
  }

};

function ResetGame() {
  score, count = 0, 0;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.custom_button').style.display = 'block';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.guess').values = "";
  // document.getElementById('guess').value = "";

};
