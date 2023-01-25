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
        genre_name: 'RPG',
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