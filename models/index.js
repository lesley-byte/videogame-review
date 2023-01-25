// TODO require the rest of the models in the models folder
const Category = require('./Category');
const Developer = require('./Developer');
const Game = require('./Game');
const GamePlatform = require('./GamePlatform');
const Genre = require('./Genre');
const Platform = require('./Platform');
const Review = require('./Review');
const User = require('./User');

// TODO: indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key
// this part is broken....eeek 🔥🔥🔥🔥🗑️
Game.belongsToMany(Platform, { through: GamePlatform, as: 'games_platforms' });
Platform.belongsToMany(Game, { through: GamePlatform, as: 'platforms_games' });

User.hasMany(Review,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Review.belongsTo(User,{
    foreignKey: 'user_id'
    });

Category.hasMany(Game,{
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});
Game.belongsTo(Category,{
    foreignKey: 'category_id'
    });

Developer.hasMany(Game,{
    foreignKey: 'developer_id',
    onDelete: 'SET NULL'
});
Game.belongsTo(Developer,{
    foreignKey: 'developer_id'
    });

Genre.hasMany(Category,{
    foreignKey: 'genre_id',
    onDelete: 'SET NULL'
});
Category.belongsTo(Genre,{
    foreignKey: 'genre_id'
    });


//export the models with module.exports

module.exports = { Category, Developer, Game, Genre, Platform, Review, User };