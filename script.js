'use strict';
let score = 50;
let highscore = 0;
let random;
let color;
let complete = 1;

const newGame = document.querySelector('.again');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

let message = document.querySelector('.message');
let next = document.querySelector('.next');
let scoreshow = document.querySelector('.scoreshow');
let highscoreshow = document.querySelector('.highscoreshow');

const update = function () {
  scoreshow.textContent = score;
  random = Math.trunc(Math.random() * 5 + 1);
  color = determineColor(random);
  next.style.backgroundColor = color;
};

const determineColor = function (value) {
  if (value === 1) {
    return 'blue';
  } else if (value === 2) {
    return 'red';
  } else if (value === 3) {
    return 'green';
  } else if (value === 4) {
    return 'yellow';
  } else {
    return 'grey';
  }
};

const check = function () {
  let found = 0;
  for (let i = 1; i < 10; i++) {
    if (word(i).style.backgroundColor !== one.style.backgroundColor) {
      found = 0;
      break;
    } else {
      found++;
    }
  }
  if (score === 0) {
    scoreshow.textContent = '0';
    message.textContent = 'You lost💥';
    complete = 1;
    //document.querySelector('body').style.backgroundColor = 'grey';
    next.style.backgroundColor = 'white';
    return 0;
  }
  if (found === 9) {
    if (score > highscore) {
      highscore = score;
    }
    highscoreshow.textContent = highscore;
    scoreshow.textContent = score;
    message.textContent = 'You won🎉';
    complete = 1;
    next.style.backgroundColor = 'white';
  }
};

const word = function (value) {
  switch (value) {
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    case 7:
      return seven;
    case 8:
      return eight;
    case 9:
      return nine;
    default:
      console.error('Error has occured');
  }
};

newGame.addEventListener('click', function () {
  for (let i = 1; i < 10; i++) {
    random = Math.trunc(Math.random() * 5 + 1);
    color = determineColor(random);
    word(i).style.backgroundColor = color;
  }
  highscoreshow.textContent = highscore;
  score = 50;
  update();
  message.textContent = 'Playing GAME...';
  complete = 0;
});

one.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    one.style.backgroundColor = color;
    update();
    check();
  }
});
two.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    two.style.backgroundColor = color;
    update();
    check();
  }
});
three.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    three.style.backgroundColor = color;
    update();
    check();
  }
});
four.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    four.style.backgroundColor = color;
    update();
    check();
  }
});
five.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    five.style.backgroundColor = color;
    update();
    check();
  }
});
six.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    six.style.backgroundColor = color;
    update();
    check();
  }
});
seven.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    seven.style.backgroundColor = color;
    update();
    check();
  }
});
eight.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    eight.style.backgroundColor = color;
    update();
    check();
  }
});
nine.addEventListener('click', function () {
  if (complete === 0) {
    score--;
    nine.style.backgroundColor = color;
    update();
    check();
  }
});
