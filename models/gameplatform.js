const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GamePlatform extends Model {}

GamePlatform.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: 'id',
            },
        },
        platform_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'platform',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game_platform',
    }
);

module.exports = GamePlatform;
