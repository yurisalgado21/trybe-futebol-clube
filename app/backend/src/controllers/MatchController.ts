import { Request, Response } from 'express';
// import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async findAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    // console.log(inProgress);

    if (inProgress === undefined) {
      const serviceResponse = await this.matchService.findAllMatches();
      return res.status(200).json(serviceResponse.data);
    }

    if (inProgress === 'false') {
      const serviceResponse = await this.matchService.findMatchesNotInProgress();
      return res.status(200).json(serviceResponse.data);
    }

    if (inProgress === 'true') {
      const serviceResponse = await this.matchService.findMatchesInProgress();
      return res.status(200).json(serviceResponse.data);
    }
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchService.updateMatch(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updatedMatchInProgress(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this.matchService
      .updatedMatchInProgress(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json(serviceResponse.data);
  }
}
