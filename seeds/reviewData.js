// seeds the table of game reviews
const { Review } = require('../models');

const reviewData = [
    {
        review_rating: 5,
        review_title: 'awesome game!',
        review_text: 'This game is awesome!',
        user_id: 1,
        game_id: 1,
        review_date: '2021-01-01',
    },
    {
        review_rating: 3,
        review_title: 'awesome game!',
        review_text: 'This game is awesome!',
        user_id: 1,
        game_id: 1,
        review_date: '2021-01-01',
    },
    {
        review_rating: 4,
        review_title: 'awesome game!',
        review_text: 'This game is awesome!',
        user_id: 2,
        game_id: 2,
        review_date: '2021-01-01',
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;

