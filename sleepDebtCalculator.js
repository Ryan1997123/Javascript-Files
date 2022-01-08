/*Ryan Monaghan
01/08/2022
Sleep Debt Calculator*/

/*Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */


const getSleepHours = day => {
    switch(day){
      case 'monday':
      return 10
      break;
  
      case 'tuesday':
      return 9
      break;
  
      case 'wednesday':
      return 9
      break;
  
      case 'thursday':
      return 10
      break;
  
      case 'friday':
      return 4
      break;
  
      case 'saturday':
      return 2
      break;
      
      case 'sunday':
      return 12
      break;
  
      default:
      return 'Error!'
    }
  };
  
  /*Total the number of sleep hours by their return values.*/
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') + 
    getSleepHours('friday') +
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
    //Output the case if we pick monday
  console.log(getSleepHours('monday'));
  //Output the total actual sleep hours I need
  console.log(getActualSleepHours());
  
  //Calculate an ideal sleep hour total
  // 8 hours x 7 days in a week.
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  //Calculate how much sleep I am missing or have.
  const calculateSleepDebt = () => {
      //Set variable actualSleepHours to the actual sleep hours function
    const actualSleepHours = getActualSleepHours();
    //Set variable idealSleepHours to the actual get ideal sleep hours function
    const idealSleepHours = getIdealSleepHours();
  
  //If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
  if (actualSleepHours === idealSleepHours)
  {
    console.log("You've got the perfect amount of sleep!");
  } 
  //if i get more sleep than ideal
  else if (actualSleepHours > idealSleepHours)
  {
    console.log("You've got " + (actualSleepHours - idealSleepHours)+ " more hours of sleep this week");
  } 
  //if i get less sleep than ideal
  else if (actualSleepHours < idealSleepHours)
  {
    console.log("You should get some rest, because you've slept " + (idealSleepHours - actualSleepHours) +
  " hours less than you should have this week");
  }
  //otherwise output an error. something has gone wrong.
  else
  {
    console.log("Error! Something went wrong, check your code.");
  }
  };

//call my function to see how much sleep i have / will need.
  calculateSleepDebt();
  
  
