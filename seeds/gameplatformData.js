// this is the table that connects the game to the platform
const { GamePlatform } = require('../models');

const gamePlatformData = [
    {
        game_id: 1,
        platform_id: 1,
    },
    {
        game_id: 1,
        platform_id: 2,
    },
    {
        game_id: 1,
        platform_id: 3,
    },
    {
        game_id: 1,
        platform_id: 4,
    },
    {
        game_id: 2,
        platform_id: 1,
    },
    {
        game_id: 2,
        platform_id: 2,
    },
    {
        game_id: 2,
        platform_id: 3,
    },
    {
        game_id: 2,
        platform_id: 4,
    },
    {
        game_id: 3,
        platform_id: 1,
    },
    {
        game_id: 3,
        platform_id: 2,
    }
];

const seedGamePlatforms = () => GamePlatform.bulkCreate(gamePlatformData);

module.exports = seedGamePlatforms;