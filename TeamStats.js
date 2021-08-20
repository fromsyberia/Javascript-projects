var team = {
    _players: [
      {
        firstName: 'Pablo', lastName: 'Sanchez', age: 11
      },
      {
        firstName: 'Rikardo', lastName: 'Milos', age: 13
      },
      {
        firstName: 'Pablo', lastName: 'Vatashi', age: 21
      }
    ],
    _games: [
      {
      opponent: 'Yugen', teamPoints: 40, opponentPoints: 13 
      },
      {
      opponent: 'Huylo', teamPoints: 30, opponentPoints: 12 
      },
      {
      opponent: 'Jojo', teamPoints: 42, opponentPoints: 18 
      }
    ],
    get games(){
        return this._games
    },
    get players(){
        return this._players
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player)
    },
    addGame(oppName, points, oppPoints) {
      const game = {
      opponent: oppName,
      teamPoints: points,
      opponentPoints: oppPoints,
      }
      this.games.push(game)
    }
   
  };
  
  team.addPlayer("Steph", "22", "28")
  team.addPlayer("Lisa", "44", "44")
  team.addPlayer("Bugs", "33", "76")
  
  
  team.addGame("s", "fd", "22")
  team.addGame("d", "gg", "11")
  team.addGame("z", "dd", "33")
  console.log(team.games)