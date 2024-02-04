import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import MatchModel from '../models/MatchModel';
// import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
// import { ServiceMessage, ServiceResponse,
//   ServiceResponseCreated,
//   ServiceResponseError } from '../Interfaces/ServiceResponse';
import { totalPoints, totalGames,
  totalVictories, totalDraws, totalLosses,
  goalsFavor, goalsOwn, efficiency, order } from '../utils/leaderBoardAwayFunctions';

export default class LeaderBoard {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async leaderBoardAway() {
    const matches = await this.matchModel.findMatchesNotInProgress();
    const teams = await this.teamModel.findAll();

    const leaderBoardAway = teams.map((team) => ({
      name: team.teamName,
      totalPoints: totalPoints(team.id, matches),
      totalGames: totalGames(team.id, matches),
      totalVictories: totalVictories(team.id, matches),
      totalDraws: totalDraws(team.id, matches),
      totalLosses: totalLosses(team.id, matches),
      goalsFavor: goalsFavor(team.id, matches),
      goalsOwn: goalsOwn(team.id, matches),
      goalsBalance: goalsFavor(team.id, matches) - goalsOwn(team.id, matches),
      efficiency: efficiency(team.id, matches).toFixed(2),
    }));
    const result = order(leaderBoardAway);
    return { status: 'SUCCESSFUL', data: result };
  }
}
