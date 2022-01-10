/*
Ryan Monaghan
01-10-2022
Training Days program (Learning to fix scope issues).
Codecademy.


Task:
As a seasoned athlete, one of your favorite activities is running marathons. 
You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: 
The program currently uses the wrong scope for its variables. 
They know this can be troublesome as their service evolves. 
In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.

Expected Output (may vary): 
Nala's event is: Pentathlon
Nala's time to train is: 200 days
Warren's event is: Marathon
Warren's time to train is: 50 days*/



// The scope of `random` is too loose - move to getRandEvent(). DONE

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  
  
  // The scope of `days` is too tight 
  /*TASK: To avoid the ReferenceError, declare days within the getTrainingDays function, before the if statement. */
  
  /*TASK: Run the program again: no error, but days is undefined! 
  New days variables are being defined in the scope of each if/else if statement.
  
  Delete the three let‘s within the if/else if statements. */
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
      }else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }
  
    return days;
  };
  //TASK: Move the name variable to global scope.
  const name = 'Nala';
  // The scope of `name` is too tight 
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  /*TASK: 
  Pass name as the first argument to logEvent() and logTime(). */
  logEvent(name, event);
  logTime(name, days);
  
  
  //TASK: Try the functions for another competitor.
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);