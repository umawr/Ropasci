'use strict';

let userChoice = null;
let hasStarted = false;

const clickSound = new Audio('click2.1.mp3');
const resetSound = new Audio('reset2.1.mp3'); 

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}


function youMove(choice) {

  playSound(clickSound);

  const decisionLog = document.querySelector('.decision');
  const youMoveLog = document.querySelector('.youMove');
  const umairMoveLog = document.querySelector('.umairMove');

  if (!hasStarted) {
    decisionLog.innerHTML = '';
    youMoveLog.innerHTML = '';
    umairMoveLog.innerHTML = '';
    hasStarted = true;
  }

  const random = Math.random();
  let umairMove;

  if (random >= 0 && random < 1 / 3) {
    umairMove = 'rock';
  } else if (random >= 1 / 3 && random < 2 / 3) {
    umairMove = 'paper';
  } else {
    umairMove = 'scissors';
  }

  console.log('Umair picked:', umairMove);

  const umairLog = document.querySelector('.umairMove');
  const newUmairLog = document.createElement('p');
  newUmairLog.textContent = `${umairMove}`;
  umairLog.prepend(newUmairLog);
  while (umairLog.children.length > 4) {
    umairLog.removeChild(umairLog.lastElementChild);
  }

  userChoice = choice;
  console.log('You picked:', userChoice);

  const playerLog = document.querySelector('.youMove');
  const newPlayerLog = document.createElement('p');
  newPlayerLog.textContent = `${userChoice}`;
  playerLog.prepend(newPlayerLog);
  while (playerLog.children.length > 4) {
    playerLog.removeChild(playerLog.lastElementChild);
  }

  const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

  let result;
  if (umairMove === userChoice) {
    result = 'Try Again';
  } else if (beats[umairMove] === userChoice) {
    result = 'Umair Wins';
  } else {
    result = 'You Win';
  }

  console.log(result);

  const newResult = document.createElement('p');
  newResult.textContent = `${result}`;

  decisionLog.prepend(newResult);

  while (decisionLog.children.length > 4) {
    decisionLog.removeChild(decisionLog.lastElementChild);
  }

  const youScore = document.querySelector('.youScore');
  const umairScore = document.querySelector('.umairScore');

  if (result === 'You Win') {
    youScore.textContent = Number(youScore.textContent) + 1;
  } else if (result === 'Umair Wins') {
    umairScore.textContent = Number(umairScore.textContent) + 1;
  }
}
const resetButton = document.querySelector('.name');
resetButton.addEventListener('click', () => {
  playSound(resetSound);

  document.querySelector('.youScore').innerHTML = 0;
  document.querySelector('.umairScore').innerHTML = 0;
  document.querySelector('.decision').innerHTML = 'Choose an Option';
  document.querySelector('.youMove').innerHTML = 'Your Moves';
  document.querySelector('.umairMove').innerHTML = "Umair's Moves";
  hasStarted = false;
});


// Old Logic, pretty wet.

// if (umairMove === 'rock' && userChoice === 'rock') {
//     console.log('Try Again');
//     document.querySelector('.decision').innerHTML = 'Try Again';
//   } else if (umairMove === 'rock' && userChoice === 'paper') {
//     console.log('You Win');
//     document.querySelector('.decision').innerHTML = 'You Win';
//   } else if (umairMove === 'rock' && userChoice === 'scissors') {
//     console.log('Umair Wins');
//     document.querySelector('.decision').innerHTML = 'Umair Wins';
//   }
//   if (umairMove === 'paper' && userChoice === 'rock') {
//     console.log('You Win');
//     document.querySelector('.decision').innerHTML = 'You Win';
//   } else if (umairMove === 'paper' && userChoice === 'paper') {
//     console.log('Try Again');
//     document.querySelector('.decision').innerHTML = 'Try Again';
//   } else if (umairMove === 'paper' && userChoice === 'scissors') {
//     console.log('Umair Wins');
//     document.querySelector('.decision').innerHTML = 'Umair Wins';
//   }
//   if (umairMove === 'scissors' && userChoice === 'rock') {
//     console.log('You Win');
//     document.querySelector('.decision').innerHTML = 'You Win';
//   } else if (umairMove === 'scissors' && userChoice === 'paper') {
//     console.log('Umair Wins');
//     document.querySelector('.decision').innerHTML = 'Umair Wins';
//   } else if (umairMove === 'scissors' && userChoice === 'scissors') {
//     console.log('Try Again');
//     document.querySelector('.decision').innerHTML = 'Try Again';
//   }
