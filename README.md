# Rock Paper Scissors

A simple Rock Paper Scissors web game built using HTML, CSS, and JavaScript. The game uses a First to 5 Wins system, animated images, and both `while` and `do...while` loops.

## Features

* Rock, Paper, and Scissors choices
* First player to reach 5 wins wins the match
* Computer makes a random choice
* Live score tracking
* Animated Rock, Paper, and Scissors images
* Dark mode interface
* Play Again button
* Responsive design for smaller screens
* Uses both `while` and `do...while` loops

## Project Structure

```text
RockPaperScissors/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── rock.webp
    ├── paper.webp
    └── scissors.jpeg
```

### index.html

Contains the structure and elements of the game, including:

* Game title
* Player and computer battle area
* Rock, Paper, and Scissors buttons
* Score display
* Result display
* Play Again button

### style.css

Controls the appearance of the game, including:

* Dark mode
* Layout
* Buttons
* Battle area
* Image sizing
* Animations
* Hover effects
* Responsive design

### script.js

Contains the game's logic, including:

* Player and computer choices
* Random computer selection
* Score tracking
* Winner determination
* First-to-5 system
* Game reset
* `while` loop
* `do...while` loop
* Image animation control

## How the Loops Work

### While Loop

The `while` loop checks whether the match is still below 5 wins.

```javascript
while (
    playerScore < 5 &&
    computerScore < 5
) {

    gameOver = false;

    break;

}
```

The condition checks both scores. As long as neither the player nor the computer has reached 5 points, the game can continue.

### Do-While Loop

The `do...while` loop is used when starting a new game.

```javascript
do {

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    reset = true;

}

while (
    reset === false
);
```

A `do...while` loop always executes its code at least once before checking its condition. This allows the scores and game status to be reset when the Play Again button is pressed.

## Image Animation

The game displays the player's and computer's choices using image files.

The JavaScript changes the image depending on the selected choice:

```javascript
playerImage.src = images[playerChoice];

computerImage.src = images[computerChoice];
```

CSS animations are then applied to make the images move into the battle area.

The player's image enters from the left, while the computer's image enters from the right.

## Game Rules

Rock Paper Scissors follows these rules:

```text
Rock     beats Scissors
Paper    beats Rock
Scissors beats Paper
Same     = Tie
```

Each round awards one point to the winner.

The first player to reach 5 points wins the match.

After the match ends, the Rock, Paper, and Scissors buttons are disabled and a Play Again button appears.

## Technologies Used

* HTML5 — Game structure
* CSS3 — Styling and animations
* JavaScript — Game logic and interaction
* Google Fonts — Custom typography, if enabled

## How to Run

1. Download or clone the project.
2. Make sure the `images` folder is inside the project folder.
3. Make sure the image filenames match the names used in `script.js`.
4. Open `index.html` in a web browser.
5. Choose Rock, Paper, or Scissors to start playing.

## Objective

The purpose of this project is to demonstrate basic web development concepts while applying JavaScript programming structures such as:

* Variables
* Functions
* Conditional statements
* `while` loops
* `do...while` loops
* DOM manipulation
* Event handling
* Random number generation
* CSS animations

## Project Information

**Project:** Rock Paper Scissors — First to 5

**Languages:** HTML, CSS, JavaScript

**Purpose:** Educational and programming practice
