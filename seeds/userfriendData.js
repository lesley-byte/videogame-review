// user 2 friends user 1
const { UserFriend } = require('../models');

const userFriendData = [
    {
        user_id: 2,
        friend_id: 1,
    },
];

const seedUserFriends = () => UserFriend.bulkCreate(userFriendData);

module.exports = seedUserFriends;