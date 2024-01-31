import {Model, QueryInterface, DataTypes} from 'sequelize';
import { IMatch } from '../../Interfaces/matches/IMatch';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IMatch>>('matches', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            homeTeamId: {
                field: 'home_team_id',
                type: DataTypes.INTEGER,

            },
            homeTeamGoals: {
                field: 'home_team_goals',
                type: DataTypes.INTEGER,
            },
            awayTeamId: {
                field: 'away_team_id',
                type: DataTypes.INTEGER,
            },
            awayTeamGoals: {
                field: 'away_team_goals',
                type: DataTypes.INTEGER,
            },
            inProgress: {
                field: 'in_progress',
                type: DataTypes.BOOLEAN,
            }
        })
    },
    down(queryInterface: QueryInterface){
        return queryInterface.dropTable('matches')
    }
}