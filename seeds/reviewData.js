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
  {
    review_rating: 4,
    review_title: 'great game!',
    review_text: 'Totally worth the money!',
    user_id: 3,
    game_id: 5,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'such a cool game',
    review_text: 'I enjoyed playing this with my friends!',
    user_id: 1,
    game_id: 6,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'not bad but not great!',
    review_text:
      'I expeected better but at the same time I was not disappointed',
    user_id: 2,
    game_id: 7,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'just WOW!',
    review_text: 'I was blown away. Did not expect it to be this good!',
    user_id: 4,
    game_id: 8,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'This game was a MONEY Grab!!',
    review_text:
      'I can not believe that they are actually selling this as a game! SMH',
    user_id: 1,
    game_id: 9,
    review_date: '2021-01-01',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
