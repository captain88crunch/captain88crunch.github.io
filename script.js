// JavaScript for your Wordle-like game

// Define your game variables and logic here

// Example: Generate a random word for the player to guess
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const randomWord = words[Math.floor(Math.random() * words.length)];

// Example: Initialize the game state
const gameState = {
    wordToGuess: randomWord,
    remainingAttempts: 6,
    guessedWord: "_____",
};

// Example: Function to update the word display
function updateWordDisplay() {
    const wordDisplay = document.querySelector(".word-display span");
    wordDisplay.textContent = gameState.guessedWord;
}

// Example: Function to handle a player's guess
function handleGuess(guess) {
    // Check if the guess is correct
    // Update the guessedWord if the guess is correct
    // Update remainingAttempts if the guess is incorrect

    // Example: Check if the guess is in the word
    if (gameState.wordToGuess.includes(guess)) {
        for (let i = 0; i < gameState.wordToGuess.length; i++) {
            if (gameState.wordToGuess[i] === guess) {
                gameState.guessedWord =
                    gameState.guessedWord.substring(0, i) +
                    guess +
                    gameState.guessedWord.substring(i + 1);
            }
        }
    } else {
        gameState.remainingAttempts--;
    }

    // Update the word display
    updateWordDisplay();

    // Check for win/loss conditions and handle them
    // You can add more game logic here
}

// Example: Add a click event listener to the Guess button
const guessButton = document.querySelector(".guess-input button");
guessButton.addEventListener("click", function () {
    const guessInput = document.querySelector(".guess-input input");
    const guess = guessInput.value.toLowerCase();

    if (guess.length === 1 && /[a-z]/.test(guess)) {
        handleGuess(guess);
        guessInput.value = "";
    } else {
        alert("Please enter a single letter guess.");
    }
});
