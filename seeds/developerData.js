// Purpose: To seed the developer table with game developers
const { Developer } = require('../models');

const developerData = [
    {
        developer_name: 'Activision',
    },
    {
        developer_name: 'Avalanche Software',
    },
    {
        developer_name: 'Bandai Namco',
    },
    {
        developer_name: 'Bethesda',
    },
    {
        developer_name: 'Blizzard',
    },
    {
        developer_name: 'Capcom',
    },
    {
        developer_name: 'EA',
    },
    {
        developer_name: 'Konami',
    },
    {
        developer_name: 'Nintendo',
    },
    {
        developer_name: 'Sega',
    },
    {
        developer_name: 'Square Enix',
    },
    {
        developer_name: 'The Pokemon Company International',
    },
    {
        developer_name: 'Play VS',
    },
    {
        developer_name: 'Mythical Games',
    },
    {
        developer_name: 'Take Two Interactive Software',
    },
    {
        developer_name: 'Private Division',
    },
    {
        developer_name: 'Double Down Interactive',
    },
    {
        developer_name: 'Jam City',
    },
    {
        developer_name: 'Gearbox Software',
    },
    {
        developer_name: 'Ubisoft',
    },
    {
        developer_name: 'Valve',
    },
    {
        developer_name: 'Tecmo',
    },
    {
        developer_name: 'Naughty Dog',
    },
    {
        developer_name: 'Insomniac Games'
    },
    {
        developer_name: '343 Industries'
    },
    {
        developer_name: 'SNK'
    },

];

const seedDeveloper = () => Developer.bulkCreate(developerData);

module.exports = seedDeveloper;
