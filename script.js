// ==========================================
// GAME VARIABLES
// ==========================================

let playerScore = 0;

let computerScore = 0;

let gameOver = false;


// ==========================================
// IMAGE FILES
// ==========================================
// The folder is named "Image" with a capital I.

const images = {

    rock: "Image/rock.webp",

    paper: "Image/paper.webp",

    scissors: "Image/scissors.jpg"

};


// ==========================================
// PLAY ROUND
// ==========================================

function playRound(playerChoice) {

    // Don't allow another round after the
    // match has already ended.

    if (gameOver) {

        return;

    }


    // ==========================================
    // COMPUTER CHOICE
    // ==========================================

    let choices = [

        "rock",

        "paper",

        "scissors"

    ];


    // Computer randomly chooses one option.

    let computerChoice =
        choices[
            Math.floor(
                Math.random() * choices.length
            )
        ];


    // ==========================================
    // DISPLAY IMAGES
    // ==========================================

    let playerImage =
        document.getElementById(
            "playerImage"
        );


    let computerImage =
        document.getElementById(
            "computerImage"
        );


    // Change the player's image.

    playerImage.src =
        images[playerChoice];


    // Change the computer's image.

    computerImage.src =
        images[computerChoice];


    // ==========================================
    // REMOVE OLD ANIMATION
    // ==========================================

    playerImage.classList.remove(
        "player-animate"
    );


    computerImage.classList.remove(
        "computer-animate"
    );


    // Force the browser to restart the animation.

    void playerImage.offsetWidth;

    void computerImage.offsetWidth;


    // ==========================================
    // ADD ANIMATION
    // ==========================================

    playerImage.classList.add(
        "player-animate"
    );


    computerImage.classList.add(
        "computer-animate"
    );


    // ==========================================
    // DETERMINE WINNER
    // ==========================================

    let result;


    // ==========================================
    // TIE
    // ==========================================

    if (
        playerChoice === computerChoice
    ) {

        result =
            "🤝 It's a tie!";

    }


    else {

        // ======================================
        // WHILE LOOP
        // ======================================
        //
        // These are the three combinations that
        // allow the player to win.
        //
        // The while loop checks each combination
        // until it finds a match or checks all 3.

        let winningMoves = [

            ["rock", "scissors"],

            ["paper", "rock"],

            ["scissors", "paper"]

        ];


        let moveIndex = 0;


        while (
            moveIndex < winningMoves.length &&
            result === undefined
        ) {

            let winningMove =
                winningMoves[moveIndex];


            // Check if the player's choice
            // beats the computer's choice.

            if (
                playerChoice === winningMove[0] &&
                computerChoice === winningMove[1]
            ) {

                playerScore++;

                result =
                    "🎉 You win this round!";

            }


            moveIndex++;

        }


        // If the player did not win and it
        // wasn't a tie, the computer wins.

        if (
            result === undefined
        ) {

            computerScore++;

            result =
                "💻 Computer wins this round!";

        }

    }


    // ==========================================
    // DISPLAY RESULT
    // ==========================================

    document.getElementById(
        "result"
    ).innerHTML =

        "You chose: <b>" +
        playerChoice +
        "</b><br>" +

        "Computer chose: <b>" +
        computerChoice +
        "</b><br><br>" +

        result;


    // ==========================================
    // DISPLAY SCORE
    // ==========================================

    document.getElementById(
        "score"
    ).innerHTML =

        "You: " +
        playerScore +

        " | Computer: " +

        computerScore;


    // ==========================================
    // CHECK MATCH WINNER
    // ==========================================

    if (
        playerScore >= 5
    ) {

        gameOver = true;


        document.getElementById(
            "result"
        ).innerHTML +=

            "<br><br>" +

            "🏆 <b>YOU WON THE MATCH!</b>";


        endGame();

    }


    else if (
        computerScore >= 5
    ) {

        gameOver = true;


        document.getElementById(
            "result"
        ).innerHTML +=

            "<br><br>" +

            "💻 <b>COMPUTER WON THE MATCH!</b>";


        endGame();

    }

}


// ==========================================
// END GAME
// ==========================================

function endGame() {

    // Disable the Rock, Paper and Scissors buttons.

    document
        .getElementById("choices")
        .classList
        .add("disabled");


    // Show the Play Again button.

    document.getElementById(
        "playAgain"
    ).style.display =
        "inline-block";

}


// ==========================================
// NEW GAME
// ==========================================

function newGame() {

    let reset = false;


    // ==========================================
    // DO-WHILE LOOP
    // ==========================================
    //
    // A do...while loop always runs at least once.
    //
    // When Play Again is clicked, the scores and
    // game status must be reset at least once.
    //
    // reset becomes true after the reset happens,
    // so the loop safely stops.

    do {

        playerScore = 0;

        computerScore = 0;

        gameOver = false;

        reset = true;

    }

    while (
        reset === false
    );


    // ==========================================
    // RESET SCORE
    // ==========================================

    document.getElementById(
        "score"
    ).innerHTML =

        "You: 0 | Computer: 0";


    // ==========================================
    // RESET RESULT
    // ==========================================

    document.getElementById(
        "result"
    ).innerHTML =

        "New game! Choose your move!";


    // ==========================================
    // RESET PLAYER IMAGE
    // ==========================================

    document.getElementById(
        "playerImage"
    ).src =
        images.rock;


    // ==========================================
    // RESET COMPUTER IMAGE
    // ==========================================

    document.getElementById(
        "computerImage"
    ).src =
        images.rock;


    // ==========================================
    // ENABLE BUTTONS
    // ==========================================

    document
        .getElementById("choices")
        .classList
        .remove("disabled");


    // ==========================================
    // HIDE PLAY AGAIN
    // ==========================================

    document.getElementById(
        "playAgain"
    ).style.display =
        "none";

}