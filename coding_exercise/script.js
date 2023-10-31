'use strict';

document.querySelector('.calculate_bmi').addEventListener('click', CalculateBMI);


function CalculateBMI() {
  console.log(document.querySelector('.person_name'))
  var name = document.getElementById('person_name').value;
  var height = document.getElementById('person_height').value;
  var weight = document.getElementById('person_weight').value;
  if (name == null) {
    alert("Please input your good name!");
    return false;
  } 
  if (height == null) {
    alert("Please input your height");
    return false;
  } 
  if (weight == null) {
    alert("Please input your weight");
    return false;
  } 
  if ( name & height & weight) {
    console.log("Calling ----------", name, weight, height);
  };
};
//     if (guess == secretNumber) {
//       document.querySelector('.message').textContent = "Woww guess correct";
//       document.querySelector('.custom_button').style.display = 'none';
//       document.querySelector('.again').style.display = 'block';
//       document.querySelector('body').style.backgroundColor = 'green';
//     }
//     if (guess != secretNumber) document.querySelector('.message').textContent = `${score - count} only remainig`;
//   }
//   if (score - count == 0) {
//     document.querySelector('.message').textContent = "Oopss Game Over try again";
//     document.querySelector('.custom_button').style.display = 'none';
//     document.querySelector('.again').style.display = 'block';
//     document.querySelector('body').style.backgroundColor = 'red';
//   }

// };

// function ResetGame() {
//   score, count = 0, 0;
//   document.querySelector('.message').textContent = "Start guessing...";
//   document.querySelector('.custom_button').style.display = 'block';
//   document.querySelector('body').style.backgroundColor = 'black';
//   document.querySelector('.again').style.display = 'none';
//   document.querySelector('.guess').values = "";
//   // document.getElementById('guess').value = "";

// };
