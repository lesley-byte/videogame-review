//This is to seed genre table

const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Action',
    },
    {
        genre_name: 'Adventure',
    },
    {
        genre_name: 'Casual',
    },
    {
        genre_name: 'Indie',
    },
    {
        genre_name: 'Multiplayer',
    },
    {
        genre_name: 'Racing',
    },
    {
        genre_name: 'Fighting',
    },
    {
        genre_name: 'Shooters',
    },
    {
        genre_name: 'Shmups',
    },
    {
        genre_name: 'Medieval',
    },
    {
        genre_name: 'Match3',
    },
    {
        genre_name: 'Virtual Reality',
    },
    {
        genre_name: 'RPG',
    },
    {
        genre_name: 'Educational',
    },
    {
        genre_name: 'Walking',
    },
    {
        genre_name: 'Open World',
    },
    {
        genre_name: 'Crafting',
    },
    {
        genre_name: 'Building',
    },
    {
        genre_name: 'Simulation',
    },
    {
        genre_name: 'Sports',
    },
    {
        genre_name: 'Strategy',
    }
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;