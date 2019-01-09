const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.guess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = "";
    guessesEl.textContent = game1.getStatus();
    game1.getPuzzle().split("").forEach((letter) => {
        const letterEl = document.createElement("span");
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
    
}

const startGame = async () => {
    const puzzle = await getPuzzle(2);
    game1 = new Hangman(puzzle, 5);
    render();
}

startGame();
document.getElementById("reset").addEventListener("click", startGame);  
