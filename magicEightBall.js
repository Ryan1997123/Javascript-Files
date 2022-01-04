/* Ryan Monaghan
Magic Eight Ball Program 
01-03-2022*/


let userName = '';

/*a ternary expression that decides what to do if the user enters a name or not.*/
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello! Welcome to the Magic Eight Ball');

//User asked a question
const userQuestion = 'Will I become a millionaire this year?';

//States what the user asked.
console.log(`The user asked: ${userQuestion}`);

//A random number generator between 0 and 7
/*Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.

Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor(). */
const randomNumber = Math.floor(Math.random() * 8);

//Save a value to this variable depending on the  value of randomNumber
let eightBall = '';

/*Switch statement to create a control flow that takes in the randomNumber, and then assigns an eightBall to a reply that a Magic Eight Ball would return 

If the randomNumber is 0, then save an answer to the eightBall variable. If randomNumber is 1, then save the next answer, and so on.*/


switch(randomNumber){
  case 0: 
  eightBall = 'It is certain';
  break;

  case 1:
  eightBall = 'It is decidely so :)!!';
  break;

  case 2:
  eightBall = 'Not a chance >:(';
  break;

  case 3:
  eightBall = 'Reply hazy try again .-.';
  break;

  case 4:
  eightBall = 'Probably :_)';
  break;

  case 5:
  eightBall = 'Cannot predict now .-.';
  break;

  case 6:
  eightBall = 'Signs point to yes :)';
  break;

  case 7: 
  eightBall = 'Do not count on it! :()';
  break;
}


/*Prints the Magic Eight Ball's answer, the value of the eightBall variable*/
console.log(`The eight ball answered: ${eightBall}`);
