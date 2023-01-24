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
        developer_name: 'Ubisoft',
    },
    {
        developer_name: 'Valve',
    },
];

const seedDeveloper = () => Developer.bulkCreate(developerData);

module.exports = seedDeveloper;
