// import { ServiceMessage } from '../ServiceResponse';
import { IMatch } from './IMatch';

export interface IMatchModel {
  create(homeTeamId: number, awayTeamId: number,
    homeTeamGoals: number, awayTeamGoals: number): Promise<IMatch>
  findAll(): Promise<IMatch[]>
  findMatchesInProgress(): Promise<IMatch[]>
  findMatchesNotInProgress(): Promise<IMatch[]>
  findById(id: IMatch['id']): Promise<IMatch | null>
  update(id: IMatch['id']): Promise<IMatch | null>
  updateMatchesInProgress(id: number, homeTeamGoals:
  number, awayTeamGoals: number): Promise<IMatch | null>
}
