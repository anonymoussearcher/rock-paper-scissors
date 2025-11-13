function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        let choices = Math.random()

        function getComputerChoice() {
            if (0 <= choices && choices < 0.33) {
                return "rock";
            }
            else if (0.33 >= choices && choices < 0.66) {
                return "scissors";
            }
            else{
                return "paper";
            }
        }

        let choiceins = prompt("Rock, paper, scissors...");
        let choice = choiceins.toLocaleLowerCase()
        console.log("The computer chose: " + getComputerChoice() + "\n" + "Your choice was: " + choice);

        function resultingScore() {
            if (choice === getComputerChoice()) {
                return "draw";
            }
            else if (choice === "rock" && getComputerChoice() === "scissors") {
                return "human win"
            }
            else if (choice === "scissors" && getComputerChoice() === "paper") {
                return "human win"
            }
            else if (choice === "paper" && getComputerChoice() === "rock") {
                return "human win"
            }
            else {
                return "computer win"
            }
        }

        function score() {
            if (resultingScore() === "draw") {
                humanScore = humanScore + 1;
                computerScore = computerScore + 1;
                return "Draw! "
            }
            else if (resultingScore() === "human win") {
                humanScore = humanScore + 1;
                return "You Win! \n" + choiceins[0].toUpperCase() + choiceins.substring(1) + " beats " + getComputerChoice()[0].toUpperCase() + getComputerChoice().substring(1);
            }
            else {
                computerScore = computerScore +1;
                return "You Lose! \n" + getComputerChoice()[0].toUpperCase() + getComputerChoice().substring(1) + " beats " + choiceins[0].toUpperCase() + choiceins.substring(1);
            }
        }

        console.log(score() + "\n" + "Human: " + humanScore + " " + "Computer: " + computerScore);
    }
    if (humanScore > computerScore) {
        return "Congratulations! You Won"
    }
    else if (humanScore === computerScore) {
        return "Try again! It's a Draw!"
    }
    else {
        return "Too Bad! You lost!"
    }
}
console.log(playGame());