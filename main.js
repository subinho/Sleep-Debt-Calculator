const getSleepHours = (day) => {
    switch(day) {
      case 'Monday': 
      return 8;
      break;
  
      case 'Tuesday':
      return 8;
      break;
  
      case 'Wednesday': 
      return 8;
      break;
  
      case 'Thursday': 
      return 8;
      break;
  
      case 'Friday':
      return 8;
      break;
  
      case "Saturday":
      return 8;
      break;
  
      case 'Sunday':
      return 8;
      break;
    }
  }
  
  const getAcutalSleepHours = () => {
    total = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
    return total;
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getAcutalSleepHours();
    const idealSleepHours = getIdealSleepHours();
    console.log(`Actual sleep hours: ${actualSleepHours}`)
    console.log(`Ideal sleep hours: ${idealSleepHours}`)
    if (actualSleepHours === idealSleepHours) {
      console.log('You have got perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You have got more sleep than you need.');
    } else {
      console.log('You should get some rest!');
    }
  }
  calculateSleepDebt();
  