//This for the games table
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //foreign key connected to developer table
        developer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'developer',
                key: 'id',
            },
        },
        //foreign key references category table
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
       
//If the reviwer does not include the date when the game was made then the date is automatically the date when the review was posted
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;