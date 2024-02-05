import { IMatch, LeaderBoarderResponse } from '../Interfaces/matches/IMatch';

const totalPointsAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match: IMatch) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      total += 3;
    } else if (match.homeTeamGoals === match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalGamesAway = (id: number, matches: IMatch[]) => {
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);

  return filteredMatch.length;
};

const totalVictoriesAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalDrawsAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const totalLossesAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const goalsFavorAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match) => {
    total += match.awayTeamGoals;
  });
  return total;
};

const goalsOwnAway = (id: number, matches: IMatch[]) => {
  let total = 0;
  const filteredMatch = matches.filter((match: IMatch) => match.awayTeamId === id);
  filteredMatch.forEach((match) => {
    total += match.homeTeamGoals;
  });
  return total;
};

const efficiencyAway = (id: number, matches: IMatch[]) =>
  (totalPointsAway(id, matches) / (totalGamesAway(id, matches) * 3)) * 100;

const orderAway = (leaderBoardAway: LeaderBoarderResponse[]) => {
  const result = [...leaderBoardAway]
    .sort((a, b) => b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor);
  return result;
};

export {
  totalPointsAway,
  totalGamesAway,
  totalVictoriesAway,
  totalDrawsAway,
  totalLossesAway,
  goalsFavorAway,
  goalsOwnAway,
  efficiencyAway,
  orderAway,
};
