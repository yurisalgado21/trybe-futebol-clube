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
}
