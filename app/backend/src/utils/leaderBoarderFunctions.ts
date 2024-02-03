import { IMatch } from '../Interfaces/matches/IMatch';

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

export {
  totalPoints,
  totalGames,
  totalVictories,
  totalDraws,
  totalLosses,
  goalsFavor,
  goalsOwn,
  efficiency,
};
