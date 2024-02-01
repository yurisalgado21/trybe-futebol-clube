import { Request, Response } from 'express';
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
}
