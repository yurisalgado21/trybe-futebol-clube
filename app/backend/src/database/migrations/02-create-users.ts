import {Model, QueryInterface, DataTypes} from 'sequelize';
import { IUser } from '../../Interfaces/users/IUser'; 

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IUser>>('users', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            userName: {
                field: 'username',
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            }
        })
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('users')
    }
}