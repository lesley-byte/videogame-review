const { Friend } = require('../models');

const friendData = [
  {
    user_id: 1,
    friend_id: 2,
  },
  {
    user_id: 2,
    friend_id: 1,
  },
];

const seedFriends = () => Friend.bulkCreate(friendData);

module.exports = seedFriends;
