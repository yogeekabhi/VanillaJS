
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

//UI
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {

    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {

        gameOver(true, `${winningNum} is the correct guess, YOU WIN!!`)
    }

    else {
        guessLeft -= 1;

        if (guessLeft === 0) {

            gameOver(false, `Game over, YOU LOSE. The correct answer was ${winningNum}`);
        }
        else {
            setMessage(`Wrong Guess, You have ${guessLeft} guesses left`, 'red');
        }
    }

})

function gameOver(won, msg) {

    let color;

    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;

    guessInput.style.borderColor = color;
    setMessage(msg, color);


    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}


function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}