import { IMatch } from '../Interfaces/matches/IMatch';
import SequelizeMatches from '../database/models/SequelizeMatches';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      attributes: ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId',
        'awayTeamGoals', 'inProgress'],
      include: [{ model: SequelizeTeam,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, { model: SequelizeTeam,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    return dbData;
  }

  async findMatchesInProgress(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      where: { inProgress: true },
      attributes: ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId',
        'awayTeamGoals', 'inProgress'],
      include: [{ model: SequelizeTeam,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, { model: SequelizeTeam,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    return dbData;
  }

  async findMatchesNotInProgress(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      where: { inProgress: false },
      attributes: ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId',
        'awayTeamGoals', 'inProgress'],
      include: [{ model: SequelizeTeam,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, { model: SequelizeTeam,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    return dbData;
  }
}
