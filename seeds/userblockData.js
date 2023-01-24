// user one blocks user two
const { UserBlock } = require('../models');

const userBlockData = [
    {
        user_id: 1,
        blocked_user_id: 2,
    },
];

const seedUserBlocks = () => UserBlock.bulkCreate(userBlockData);

module.exports = seedUserBlocks;