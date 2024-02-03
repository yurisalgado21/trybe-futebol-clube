import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceMessage, ServiceResponse,
  ServiceResponseCreated,
  ServiceResponseError } from '../Interfaces/ServiceResponse';
import { totalPoints, totalGames,
  totalVictories, totalDraws, totalLosses,
  goalsFavor, goalsOwn, efficiency, order } from '../utils/leaderBoarderFunctions';

export default class MatchService {
  private static readonly notFoundResponse: ServiceResponseError = {
    status: 'NOT_FOUND',
    data: { message: 'There is no team with such id!' } };

  private static readonly ivalidEqualMatches: ServiceResponseError = {
    status: 'UNPROCESSABLE ENTITY',
    data: { message: 'It is not possible to create a match with two equal teams' } };

  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async leaderBoardHome() {
    const matches = await this.matchModel.findMatchesNotInProgress();
    const teams = await this.teamModel.findAll();

    const leaderBoardHome = teams.map((team) => ({
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
    const result = order(leaderBoardHome);
    return { status: 'SUCCESSFUL', data: result };
  }

  public async createMatches(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<ServiceResponseCreated<IMatch> | ServiceResponseError> {
    const homeTeam = await this.teamModel.findById(homeTeamId);
    const awayTeam = await this.teamModel.findById(awayTeamId);
    if (!homeTeam?.teamName || !awayTeam?.teamName) return MatchService.notFoundResponse;
    if (homeTeam.teamName === awayTeam.teamName) return MatchService.ivalidEqualMatches;
    const matchesCreated = await this.matchModel.create(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return { status: 'CREATED', data: matchesCreated };
  }

  public async findAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async findMatchesInProgress(): Promise<ServiceResponse<IMatch[]>> {
    const matchesInProgress = await this.matchModel.findMatchesInProgress();
    return { status: 'SUCCESSFUL', data: matchesInProgress };
  }

  public async findMatchesNotInProgress(): Promise<ServiceResponse<IMatch[]>> {
    const matchesNotInProgress = await this.matchModel.findMatchesNotInProgress();
    return { status: 'SUCCESSFUL', data: matchesNotInProgress };
  }

  public async updateMatch(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const matchFound = await this.matchModel.findById(id);
    if (!matchFound) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };

    const updatedMatch = await this.matchModel.update(id);
    if (!updatedMatch) {
      return { status: 'CONFLICT',
        data: { message: 'There are no updates to perform in this Match' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updatedMatchInProgress(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<ServiceResponse<ServiceMessage>> {
    const matchFound = await this.matchModel.findById(id);
    if (!matchFound) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    const updatedMatch = await this.matchModel
      .updateMatchesInProgress(id, homeTeamGoals, awayTeamGoals);
    if (!updatedMatch) {
      return { status: 'CONFLICT',
        data: { message: 'There are no updates to perform in this Match' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }
}
