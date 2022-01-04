/*Ryan Monaghan
Race Day Program
01-04-2022 */


/*Task:

CodeCademy’s annual race is just around the corner! This year, we have a lot of participants. 
I have been hired to write a program that will register runners for the race and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration). */


let raceNumber = Math.floor(Math.random() * 1000);


/* A variable that indicates whether a runner registered early or not. */
const registeredEarly = true;

/*A variable for the runner's age*/
const age = 26;

/*A control flow statement that checks whether the runner is an adult AND registered early - Add 1000 to their raceNumber if this is true*/
if (registeredEarly === true && age >= 18){
  raceNumber += 1000;
} 
/*Another control flow statement to check age and registration time - to determine race time 

For runners > 18 who registered early, we tell them they will race at 9:30 am. Including their raceNumber*/
if( registeredEarly === true && age > 18){
  console.log(`Your race will start at 9:30 am. Your number is ${raceNumber}`);
} /*Runner is over 18 AND did not register early race at 11:00 am*/
else if(!registeredEarly && age > 18){
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} /*Youth registrants run at 12:30 pm. race number included*/
else if(age < 18){
  console.log(`Youth registrant. You will run at 12:30 pm. Your race number is ${raceNumber}`);
}
/*Runners who are exactly 18 years old*/
else{
  console.log('Please see the registration desk.');
};

