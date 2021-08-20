
const getUserChoice = userInput => 
{
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
   return userInput;
} else {
   console.log('rock, paper or scissors please');
  }
}

 getUserChoice('rock')


const getComputerChoice = () => {
let temp = (Math.floor(Math.random() * 3)) 
if (temp === 0) {
  return 'scissors'
}
if (temp === 2) {
  return 'rock'
}
if (temp === 1) {
  return 'paper'
}

};


 const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return 'The game is a tie'
} 
if(userChoice === 'rock' && computerChoice === 'paper') { 
  return 'computer won'
}
if(userChoice === 'paper' && computerChoice === 'scissors') {
  return 'computer win' 
}
if(userChoice === 'scissors' && computerChoise === 'rock') { 
  return 'computer win' 
}
return "user win"
};

const playGame = () => {
  let userChoice = getUserChoice('paper')
  let computerChoice = getComputerChoice()
console.log(determineWinner(userChoice, computerChoice))
}

playGame()