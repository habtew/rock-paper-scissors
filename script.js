function getComputerChoice(){
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];

}
console.log(getComputerChoice());