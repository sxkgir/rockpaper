function getHumanChoice() {

    let promptAns = prompt("Choose Rock, Paper Or Scissor")
    let choice = promptAns.toLocaleLowerCase();
    return choice;
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            console.log("Error in generating number error");
            break;
    }   
}

function playRound(){
    let HumanChoice = getHumanChoic e();

    let ComputerChoice = getComputerChoice();

    if (HumanChoice === ComputerChoice) {
        console.log("draw")
        return "draw";
        } else if ((HumanChoice === "rock" && ComputerChoice === "scissor") ||
                (HumanChoice === "paper" && ComputerChoice === "rock") ||
                (HumanChoice === "scissor" && ComputerChoice === "paper")) {
                    console.log("Human")

            return "human";
        } else {
            return "computer";
    }

}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5;i++){
        let result = playRound();
        if (result === "human"){
            humanScore++;
        }
        else if (result === "computer"){
            computerScore++;
        }
    }
    console.log(humanScore>computerScore ? "Human wins!" : "Computer wins!");

}
