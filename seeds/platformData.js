//seed the platform table
const { Platform } = require('../models');

const platformData = [
    {
        platform_name: 'Playstation 4',
    },
    {
        platform_name: 'Xbox One',
    },
    {
        platform_name: 'Nintendo Switch',
    },
    {
        platform_name: 'PC',
    },
    {
        platform_name: 'Playstation 3',
    },
    {
        platform_name: 'Xbox 360',
    },
    {
        platform_name: 'Playstation 2',
    },
    {
        platform_name: 'Xbox',
    },
    {
        platform_name: 'Gamecube',
    },
    {
        platform_name: 'Nintendo 64',
    },
    {
        platform_name: 'Playstation',
    },
    {
        platform_name: 'Dreamcast',
    },
    {
        platform_name: 'Sega Saturn',
    },
    {
        platform_name: 'Sega Genesis',
    },
    {
        platform_name: 'Super Nintendo',
    },
    {
        platform_name: 'Nintendo Entertainment System',
    },
    {
        platform_name: 'Atari 2600',
    },
];

const seedPlatforms = () => Platform.bulkCreate(platformData);

module.exports = seedPlatforms;