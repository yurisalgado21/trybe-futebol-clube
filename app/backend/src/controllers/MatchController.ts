import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchService from '../services/MatchService';
import LeaderBoard from '../services/LeaderBoardService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
    private leaderBoardService = new LeaderBoard(),
  ) { }

  public async leaderBoardHome(_req: Request, res: Response) {
    const serviceResponse = await this.matchService.leaderBoardHome();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async leaderBoardAway(_req: Request, res: Response) {
    const serviceResponse = await this.leaderBoardService.leaderBoardAway();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async leaderBoard(_req: Request, res: Response) {
    const home = await this.matchService.leaderBoardHome();
    console.log(home);

    const serviceResponse = await this.leaderBoardService.leaderBoard();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createMatches(req: Request, res: Response) {
    const { homeTeamId, awayTeamId,
      homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this.matchService.createMatches(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

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
