import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

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
}
