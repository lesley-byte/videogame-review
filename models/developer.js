const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Developer extends Model {}

Developer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        developer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'developer',
    }
);

module.exports = Developer;