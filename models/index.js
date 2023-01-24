// TODO require the rest of the models in the models folder
const Category = require('./Category');
const Developer = require('./Developer');
const Game = require('./Game');
const GamePlatform = require('./GamePlatform');
const Genre = require('./Genre');
const Platform = require('./Platform');
const Review = require('./Review');
const User = require('./User');
const UserBlock = require('./UserBlock');
const UserFriend = require('./UserFriend');

// TODO: indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key
// this part is broken....eeek 🔥🔥🔥🔥🗑️

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Game, {
    foreignKey: 'game_id',
});

Platform.hasMany(Game, {
    foreignKey: 'platform_id',
    onDelete: 'CASCADE',
});

Game.belongsToMany(Platform, {
    //Define the third table needed to store the foreign keys
    through: {
        model: GamePlatform,
        unique: false,
    },
    //Define an alias for when data is retrieved
    as: 'game_platform',
});

Platform.belongsToMany(Game, {
    //Define the third table needed to store the foreign keys
    through: {
        model: GamePlatform,
        unique: false,
    },
    //Define an alias for when data is retrieved
    as: 'platform_game',
});

Developer.hasMany(Game, {
    foreignKey: 'developer_id',
    onDelete: 'CASCADE',
});

Game.belongsTo(Developer, {
    foreignKey: 'developer_id',
});

Category.hasMany(Game, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Game.belongsTo(Category, {
    foreignKey: 'category_id',
});

Genre.hasMany(Category, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE',
});

Category.belongsTo(Genre, {
    foreignKey: 'genre_id',
});



User.belongsToMany(User, { 
    through: {
        model: UserFriend,
        unique: false,
    },
    as: 'friends',
});

User.belongsToMany(User, {
    through: {
        model: UserBlock,
        unique: false,
    },
    as: 'blocked',
});


//export the models with module.exports

module.exports = { Category, Developer, Game, GamePlatform, Genre, Platform, Review, User, UserBlock, UserFriend };