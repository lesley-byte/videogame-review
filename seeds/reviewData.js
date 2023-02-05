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
  },
  {
    review_rating: 3,
    review_title: 'okay game!',
    review_text: 'This game was average!',
    user_id: 3,
    game_id: 3,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'horrible game!',
    review_text: 'worst game that I have played!',
    user_id: 4,
    game_id: 4,
    review_date: '2021-01-01',
  },
  {
    review_rating: 2,
    review_title: 'disappointing!',
    review_text: 'It thought it would be better but I was wrong!',
    user_id: 3,
    game_id: 4,
    review_date: '2021-01-01',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
