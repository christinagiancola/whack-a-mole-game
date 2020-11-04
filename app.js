const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare () {
    square.forEach( className => {                              
        className.classList.remove('mole')  ;                       // removes any classes from the divs, removed any leftover styling
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];     // picks a random number and rounds it to a whole number
    randomPosition.classList.add('mole');                           // uses this number to assign mole image to random square on grid

    hitPosition = randomPosition.id;                                //assign the id of the randomPosition to hitPosition for us to use later
}

square.forEach( id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    });
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
    console.log("Mole moved");
}

moveMole();

function resetTimer() {
  currentTime = 60; 
  timerId = setInterval(countDown, 1000);
}

function resetScore() {
  result = 0;
  score.textContent = result;
}


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
        resetScore();
        resetTimer();
    }
}

let timerId = setInterval(countDown, 1000)