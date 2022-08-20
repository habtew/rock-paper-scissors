const buttons = document.querySelectorAll(".button");
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const Results = document.querySelector('#result')

const resetBtn = document.querySelector('#reset');

let playerScore = 0;
let compScore = 0;

resetBtn.addEventListener('click',() => location.reload());  


let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerChoice;

buttons.forEach(button => { button.addEventListener('click',getPlayerChoice) });

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
  
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      Results.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        Results.textContent = `You win! ${playerSelection.value} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        Results.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}
const winnerResults ={
    computer: ["You Lost the game to a computer!"],
    player: ["You Win the game!!!!"],
    tie: ["The game is a Tie!"]
}


function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner];
  buttons.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
  //console.log(playerChoice)
}

