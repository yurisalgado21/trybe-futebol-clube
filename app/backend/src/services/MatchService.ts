import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

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
