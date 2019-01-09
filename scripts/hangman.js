const Hangman = function(word,remainingGuesses){
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
}
Hangman.prototype.calculatingStatus = function(){

    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter) || letter === " ";
    });

    if(this.remainingGuesses === 0){
        this.status = "Failed";
    }
    else if(finished){
        this.status = "Finished";
    }else{
        this.status = "playing";
    }
}

Hangman.prototype.getStatus = function(){
    
    if(this.status == "playing"){
        return `Guesses left: ${this.remainingGuesses}`;
    }else if(this.status == "Failed"){
        return `Nice try the word was "${this.word.join("")}"`;
    }else{
        return "Great Work! You Guessed the word";
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = "";
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === " "){
            puzzle += letter;
        }else{
            puzzle += "*";
        }
    });
    return puzzle;
}

Hangman.prototype.guess = function(guessLetter){

    if(this.status !== "playing"){
        return;
    }

    guessLetter = guessLetter.toLowerCase();
    if(this.word.includes(guessLetter)){
        this.guessedLetters.push(guessLetter);
    }else{
        this.remainingGuesses--;
    }
    this.calculatingStatus();
}

