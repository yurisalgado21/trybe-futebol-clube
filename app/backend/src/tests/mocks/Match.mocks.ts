const match = {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
}

const match2 = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 1,
  "awayTeamId": 8,
  "awayTeamGoals": 1,
  "inProgress": true,
  "homeTeam": {
    "teamName": "São Paulo"
  },
  "awayTeam": {
    "teamName": "Grêmio"
  }
}

const matchUpdateGoals = {
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}

const newMatch = {
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const returnNewMatch = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamId": 8,
  "awayTeamGoals": 2,
  "inProgress": true
}

const leaderBoardHome = {
  "name": "Santos",
  "totalPoints": 9,
  "totalGames": 3,
  "totalVictories": 3,
  "totalDraws": 0,
  "totalLosses": 0,
  "goalsFavor": 9,
  "goalsOwn": 3,
  "goalsBalance": 6,
  "efficiency": "100.00"
}

const matches = [match]
const matches2 = [match2]
const leaderBoardHomeArray = [
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Bahia",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Botafogo",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Corinthians",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Ferroviária",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Flamengo",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Grêmio",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Internacional",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Palmeiras",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Real Brasília",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "Santos",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "São José-SP",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  },
  {
    "name": "São Paulo",
    "totalPoints": 0,
    "totalGames": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "goalsBalance": 0,
    "efficiency": "NaN"
  }
]

export {
    match,
    match2,
    matches,
    matches2,
    matchUpdateGoals, 
    newMatch, 
    returnNewMatch,
    leaderBoardHome,
    leaderBoardHomeArray
}