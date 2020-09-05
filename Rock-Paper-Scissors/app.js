const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the gamne
    const startGame = () => {
        let introScreen = document.querySelector(".intro");
        let playBtn = document.querySelector(".intro button");
        let match = document.querySelector(".match")

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };

    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            })
        });


        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //call compareChoice
                    compareChoice(this.textContent, computerChoice);

                    //update the image
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


    const compareChoice = (playerChoice, computerChoice) => {

        //Update Text
        const winner = document.querySelector(".winner");

        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie!";
            return;
        }
        //Check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }
        }

    }




    //call inner functions
    startGame();
    playGame();

}

//main function 
game();


