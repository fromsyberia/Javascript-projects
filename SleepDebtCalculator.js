const getSleepHours = day => {

    switch(day) {
      case 'monday':
        return 7
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 5
        break;
      case 'thursday':
        return 6
        break;
      case 'friday':
        return 9
        break;
      case 'saturday':
        return 8
        break;
      case 'sunday':
        return 5
        break;
  
        default:
         return "Error!"
  
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
    console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = 
    getActualSleepHours()
    const idealSleepHours = 
    getIdealSleepHours()
  
  if(actualSleepHours === idealSleepHours){
      console.log('user got the perfect amount of sleep.') } 
      else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.')
    } else if(actualSleepHours < idealSleepHours){
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.')
    } else {
      console.log('error something wrong')
    }
  
  }
    
    calculateSleepDebt();