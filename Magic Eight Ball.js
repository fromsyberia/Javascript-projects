let userName = ''
userName ? console.log('Hello ' + userName)
: console.log('You need to enter your name or nickname');
let userQuestion = 'What country are you from?'
console.log(userName + ' ' + userQuestion)
const randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
switch(randomNumber) {
  case 1:
    eightBall = 'Russia';
    break;
  case 2:
    eightBall = 'Belgium';
    break;
  case 3:
    eightBall = 'Cyprus';
    break;
  case 4:
    eightBall = 'Switzerland';
    break;
  case 5:
    eightBall = 'Germany';
    break;
  case 6:
    eightBall = 'Poland';
    break;
  case 7:
    eightBall = 'Netherlands';
    break;
  case 8:
    eightBall = 'Czechia';
    break;
}

console.log(`The eight ball answered: ${eightBall}`); 