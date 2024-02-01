// import { ServiceMessage } from '../ServiceResponse';
import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>
  findMatchesInProgress(): Promise<IMatch[]>
  findMatchesNotInProgress(): Promise<IMatch[]>
  findById(id: IMatch['id']): Promise<IMatch | null>
  update(id: IMatch['id']): Promise<IMatch | null>
}
