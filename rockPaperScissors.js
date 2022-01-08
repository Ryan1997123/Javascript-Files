/*Ryan Monaghan
01-08-22
Rock Paper Scissors Program */


/*The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a dra */

/*Code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results. */


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else { 
      console.log('Error!');
    }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0: 
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'The game was a tie';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return'Sorry the computer won';
    } else{
      return 'You win! Congratulations!';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!';
    } else {
      return 'You win! Congratulations!';
    }
  }

  if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer wins';
    } else {
      return 'You win! Congratulations!';
    }
  }
};

//Function to start the game and log the results
const playGame = () => {
    //Make a change to the selected paper' choice to change in your choice!
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
//Play the game
playGame()