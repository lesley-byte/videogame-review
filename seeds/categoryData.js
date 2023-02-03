//information for category table

const { Category } = require('../models')

const categoryData = [
    {
        category_name: 'Arcade & Rhythm',
        genre_id: 1,
    },
    {
        category_name: 'Fighgting & Martial Arts',
        genre_id: 1,
    },
    {
        category_name: 'First Person Shooter',
        genre_id: 1,
    },
    {
        category_name: 'Sports',
        genre_id: 1,
    },
    {
        category_name: 'Platformer & Runner',
        genre_id: 1,
    },
    {
        category_name: 'Third Person Shooter',
        genre_id: 1,
    },
    {
        category_name: 'Adventure RPG',
        genre_id: 2,
    },
    {
        category_name: 'Casual RPG',
        genre_id: 2,
    },
    {
        category_name: 'Hidden Object',
        genre_id: 2,
    },
    {
        category_name: 'Metroidvania',
        genre_id: 2,
    },
    {
        category_name: 'Puzzle',
        genre_id: 2,
    },
    {
        category_name: 'Story Rich',
        genre_id: 2,
    },
    {
        category_name: 'Visual Novel',
        genre_id: 2,
    },
    {
        category_name: 'Point & Click',
        genre_id: 3,
    },
    {
        category_name: 'Unconventional',
        genre_id: 4,
    },
    {
        category_name: 'Co-op',
        genre_id: 5,
    },
    {
        category_name: 'MMO',
        genre_id: 5,
    },
    {
        category_name: 'LAN',
        genre_id: 5,
    },
    {
        category_name: 'Local and Party',
        genre_id: 5,
    },
    {
        category_name: 'Online Competitive',
        genre_id: 5,
    },
    {
        category_name: 'Racing',
        genre_id: 6,
    },
    {
        category_name: 'Action RPG',
        genre_id: 7,
    },
    {
        category_name: 'JRPG',
        genre_id: 7,
    },
    {
        category_name: 'Party Based RPG',
        genre_id: 7,
    },
    {
        category_name: 'Roguelike',
        genre_id: 7,
    },
    {
        category_name: 'Strategy RPG',
        genre_id: 7,
    },
    {
        category_name: 'Turn Based RPG',
        genre_id: 7,
    },
    {
        category_name: 'Building and Automation',
        genre_id: 8,
    },
    {
        category_name: 'Dating Sim',
        genre_id: 8,
    },
    {
        category_name: 'Farming and Crafting',
        genre_id: 8,
    },
    {
        category_name: 'Hobby & Job Sim',
        genre_id: 8,
    },
    {
        category_name: 'Life Sim',
        genre_id: 8,
    },
    {
        category_name: 'Sand Box',
        genre_id: 8,
    },
    {
        category_name: 'Space and flight',
        genre_id: 8,
    },
    {
        category_name: 'Hack & Slash',
        genre_id: 9,
    },
    {
        category_name: 'Baseball',
        genre_id: 9,
    },
    {
        category_name: 'Fishing & Hunting',
        genre_id: 9,
    },
    {
        category_name: 'Individial Sports',
        genre_id: 9,
    },
    {
        category_name: 'Team Sports',
        genre_id: 9,
    },
    {
        category_name: 'Card & Board',
        genre_id: 10,
    },
    {
        category_name: 'City & Settlement',
        genre_id: 10,
    },
    {
        category_name: 'Grand & 4X',
        genre_id: 10,
    },
    {
        category_name: 'Military',
        genre_id: 10,
    },
    {
        category_name: 'Real Time Strategy',
        genre_id: 10,
    },
    {
        category_name: 'Tower Defense',
        genre_id: 10,
    },
    {
        category_name: 'Turn Based Strategy',
        genre_id: 10,
    }
]

const seedCategory = () => Category.bulkCreate(categoryData)

module.exports = seedCategory


