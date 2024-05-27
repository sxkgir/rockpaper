let humanScore = 0;
let computerScore = 0;

const btnContainer = document.querySelector('.btn-container')
const btnStart = document.querySelector('#btnStart');
const humanScoreElement = document.querySelector('#humanScore');
const computerScoreElement = document.querySelector('#computerScore');
const humanPick = document.querySelector('#humanPick');
const computerPick = document.querySelector('#computerPick');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

restartBtn.addEventListener('click', restartGame)


btnStart.addEventListener('click', () =>{
    btnStart.remove();

    const rockBtn = document.createElement("button");
    
    const paperBtn = document.createElement("button");

    const scissorBtn = document.createElement("button");

    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorBtn);

    const rockImg = new Image();
    rockImg.src = 'rock.png';
    rockImg.classList.add('buttonChoices')
    rockImg.setAttribute('id','rockBtn')
    rockBtn.appendChild(rockImg);

    const paperImg = new Image();
    paperImg.src = 'paper.png';
    paperImg.classList.add('buttonChoices')

    paperImg.setAttribute('id','paperBtn')
    paperBtn.appendChild(paperImg);

    const scissorImg = new Image();
    scissorImg.src = 'scissors.png';
    scissorImg.classList.add('buttonChoices')
    scissorImg.setAttribute('id','scissorBtn')
    scissorBtn.appendChild(scissorImg);
    
    playGame(); 
});

function getHumanChoice(callback) {
    const buttons = document.querySelectorAll('.buttonChoices');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let choice = '';
            switch (button.id) {
                case 'rockBtn':
                    choice = 'rock';
                    break;
                case 'paperBtn':
                    choice = 'paper';
                    break;
                case 'scissorBtn':
                    choice = 'scissors';
                    break;
                default:
                    console.log('Error in button');
                    break;
            }
            callback(choice);
        });
    });
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error in generating number error");
            break;
    }   
}

function playRound(humanChoice){
    let ComputerChoice = getComputerChoice();
    humanPick.src = `${humanChoice}.png`;
    computerPick.src = `${ComputerChoice}.png`;


    if (humanChoice === ComputerChoice) {
        console.log("draw")
        return "draw";
        } else if ((humanChoice === "rock" && ComputerChoice === "scissors") ||
                (humanChoice === "paper" && ComputerChoice === "rock") ||
                (humanChoice === "scissors" && ComputerChoice === "paper")) {
            return "human";
        } else {
            return "computer";
    }

}

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}
  
function setFinalMessage(humanScore) {
    return humanScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    humanPick.src = 'questionMark.jpg';
    computerPick.src = 'questionMark.jpg';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
  }

function playGame(){

    getHumanChoice((humanChoice) => {
        let result = playRound(humanChoice);
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        humanScoreElement.textContent = `${humanScore}`;
        computerScoreElement.textContent = ` ${computerScore}`;

        console.log(humanScore > computerScore ? "Human is leading!" : (computerScore > humanScore ? "Computer is leading!" : "It's a tie!"));
        
        if (humanScore === 5 || computerScore === 5){
            setFinalMessage(humanScore);
            openEndgameModal();
        }
        // To continue the game, call playGame() again or implement additional logic as needed.
    }); 
        

}




