import { ITeam } from '../Interfaces/teams/ITeam';
import { IMatch, LeaderBoarderResponse } from '../Interfaces/matches/IMatch';
import { totalPointsAway, totalDrawsAway, totalGamesAway,
  totalLossesAway, totalVictoriesAway,
  goalsFavorAway, goalsOwnAway } from './leaderBoardAwayFunctions';

const totalPoints = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match: IMatch) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      total += 3;
    } else if (match.homeTeamGoals === match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalGames = (id: number, matches: IMatch[]) => {
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);

  return filteredMatch.length;
};

const totalVictories = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalDraws = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalLosses = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const goalsFavor = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match) => {
    total += match.homeTeamGoals;
  });
  return total;
};

const goalsOwn = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.homeTeamId === id);
  filteredMatch.forEach((match) => {
    total += match.awayTeamGoals;
  });
  return total;
};

const efficiency = (id: number, matches: IMatch[]) =>
  (totalPoints(id, matches) / (totalGames(id, matches) * 3)) * 100;

const order = (leaderBoardHome: LeaderBoarderResponse[]) => {
  const result = [...leaderBoardHome]
    .sort((a, b) => b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor);
  return result;
};

const efficiencyFinal = (
  pointsAway: number,
  points: number,
  gamesAway: number,
  games: number,
) => {
  const totalP = pointsAway + points;
  const totalG = gamesAway + games;
  return ((totalP / (totalG * 3)) * 100).toFixed(2);
};

const orderFinal = (teams: ITeam[], matches: IMatch[]) => {
  const leaderBoardFinal = teams.map((team: ITeam) => ({ name: team.teamName,
    totalPoints: totalPoints(team.id, matches) + totalPointsAway(team.id, matches),
    totalGames: totalGames(team.id, matches) + totalGamesAway(team.id, matches),
    totalVictories: totalVictories(team.id, matches) + totalVictoriesAway(team.id, matches),
    totalDraws: totalDraws(team.id, matches) + totalDrawsAway(team.id, matches),
    totalLosses: totalLosses(team.id, matches) + totalLossesAway(team.id, matches),
    goalsFavor: goalsFavor(team.id, matches) + goalsFavorAway(team.id, matches),
    goalsOwn: goalsOwn(team.id, matches) + goalsOwnAway(team.id, matches),
    goalsBalance: (goalsFavor(team.id, matches) - goalsOwn(team.id, matches))
     + (goalsFavorAway(team.id, matches) - goalsOwnAway(team.id, matches)),
    efficiency: efficiencyFinal(
      totalPointsAway(team.id, matches),
      totalPoints(team.id, matches),
      totalGamesAway(team.id, matches),
      totalGames(team.id, matches),
    ),
  }));
  return leaderBoardFinal;
};

export {
  totalPoints,
  totalGames,
  totalVictories,
  totalDraws,
  totalLosses,
  goalsFavor,
  goalsOwn,
  efficiency,
  efficiencyFinal,
  order,
  orderFinal,
};
