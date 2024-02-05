import { ITeam } from '../Interfaces/teams/ITeam';
import { order, orderFinal } from '../utils/leaderBoarderFunctions';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import MatchModel from '../models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { totalPointsAway, totalGamesAway,
  totalVictoriesAway, totalDrawsAway, totalLossesAway,
  goalsFavorAway, goalsOwnAway,
  efficiencyAway, orderAway } from '../utils/leaderBoardAwayFunctions';

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
      totalPoints: totalPointsAway(team.id, matches),
      totalGames: totalGamesAway(team.id, matches),
      totalVictories: totalVictoriesAway(team.id, matches),
      totalDraws: totalDrawsAway(team.id, matches),
      totalLosses: totalLossesAway(team.id, matches),
      goalsFavor: goalsFavorAway(team.id, matches),
      goalsOwn: goalsOwnAway(team.id, matches),
      goalsBalance: goalsFavorAway(team.id, matches) - goalsOwnAway(team.id, matches),
      efficiency: efficiencyAway(team.id, matches).toFixed(2),
    }));
    const result = orderAway(leaderBoardAway);
    return { status: 'SUCCESSFUL', data: result };
  }

  public async leaderBoard() {
    const matches = await this.matchModel.findMatchesNotInProgress();
    const teams: ITeam[] = await this.teamModel.findAll();
    const result = orderFinal(teams, matches);
    const resultFinal = order(result);
    return { status: 'SUCCESSFUL', data: resultFinal };
  }
}
