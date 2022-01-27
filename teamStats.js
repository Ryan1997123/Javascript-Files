/**
 * Ryan Monaghan
 * Codecademy Javascript Objects Lesson
 * Team Stats Program
 * TASK:
 * We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
 */

const team = {
    _players: [
      {firstName:'Pablo', lastName:'Sanchez', age: 11},
      {firstName:'Ryan', lastName:'Monaghan', age: 24},
      {firstName:'Kazu', lastName:'Nori', age: 25}
    ],
    _games: [
      {opponent:'Broncos', teamPoints: 42, opponentPoints: 27},
      {opponent:'Jets', teamPoints: 30, opponentPoints: 10},
      {opponent:'Giants', teamPoints: 20, opponentPoints: 7}
    ],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
  },
  
    addGame(oppName, points, oppPoints){
      const game = {
        opponent: oppName,
        points: points,
        opponentsPoints: oppPoints
      }
      this.games.push(game);
    }
  }
  
  
    team.addPlayer('Steph','Curry',28);
    team.addPlayer('Lisa','Leslie',44);
    team.addPlayer('Bugs','Bunny',76);
  
  console.log(team.players);
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolves", 50, 100);
  team.addGame("Tigers", 30, 47);
  
  console.log(team.games);