// import { NewEntity } from '../Interfaces';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  async findById(id: number): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData === null) return null;
    const data = dbData;
    return data;
  }
}
