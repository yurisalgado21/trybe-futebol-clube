import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>
  findMatchesInProgress(): Promise<IMatch[]>
  findMatchesNotInProgress(): Promise<IMatch[]>
}
