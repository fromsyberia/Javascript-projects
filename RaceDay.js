let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnersAge = 19
if (runnersAge > 18 && earlyRegister === false) {
  raceNumber += 1000
  console.log(raceNumber);
}

if (runnersAge > 18 && earlyRegister === true) {
  raceNumber += 1000
  console.log('Your race number is ' + raceNumber + ' You will race at 9:30 am');
} else if (runnersAge > 18 && earlyRegister === true) {
  console.log ('Your race number is ' + raceNumber + ' You will race at 11:00 am')
} else if (runnersAge < 18) {
  console.log ('Your race number is ' + raceNumber + ' You will race at 12:30 am')
} else if (runnersAge = 18) {
  console.log('Check registration desk')
}



