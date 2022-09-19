'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😊Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚨 No number';

        // when the geuss is correct
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '😊Correct Number';
        document.querySelector('.number').textContent = secretNumber;


        // manipulating css properties
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when the geuss is high
    } else if (guess > secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '🐱 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢You lost';
        }

        // when the geuss is low

    } else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '😜 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢You lost';
        }

    }
});

// restart game 

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = ' Start Guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});