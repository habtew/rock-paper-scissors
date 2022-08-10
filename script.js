function getComputerChoice(){
    const pick = ['rock', 'paper', 'scissor'];
    return pick[Math.floor(Math.random() * pick.length)];

}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" &&  computerSelection === "paper"){
        return "You Lose! Paper beats rock"
    }
    else if(playerSelection==="rock" && computerSelection==="scissor"){
        return "You win! rock breaks scissor"
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You win! paper covers rock"
    }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        return "You Lose! scissor cuts paper"
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock breaks scissor"
    }
    else if(playerSelection==="scissor" && computerSelection==="paper"){
        return "You win! scissor cuts paper"
    }
    else if(playerSelection === computerSelection){
        return "draw"
    }
    else{
        return "invalid input"
    }
  }
   


function game(){
    
    
    for(let i= 0; i<5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Your choice").toLowerCase();
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()