//all the relationships between the tables/models

// TODO require the rest of the models in the models folder
const Category = require('./category');
const Developer = require('./developer');
const Friend = require('./friend');
const Game = require('./game');
const GamePlatform = require('./gameplatform');
const Genre = require('./genre');
const Platform = require('./platform');
const Review = require('./review');
const User = require('./user');

// TODO: indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key
// this part is broken....eeek 🔥🔥🔥🔥🗑️
// Game.belongsToMany(Platform, { through: GamePlatform, as: 'games_platforms' });
// Platform.belongsToMany(Game, { through: GamePlatform, as: 'platforms_games' });
Game.hasMany(GamePlatform,{
    foreignKey: 'game_id',
    onDelete: 'SET NULL'
    });
GamePlatform.belongsTo(Game,{
    foreignKey: 'game_id'
    });
Platform.hasMany(GamePlatform,{
    foreignKey: 'platform_id',
    onDelete: 'SET NULL'
    });
GamePlatform.belongsTo(Platform,{
    foreignKey: 'platform_id'
    });

User.hasMany(Friend,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    });
Friend.belongsTo(User,{
    foreignKey: 'user_id'
    });
User.hasMany(Friend,{
    foreignKey: 'friend_id',
    onDelete: 'SET NULL'
    });
Friend.belongsTo(User,{
    foreignKey: 'friend_id'
    });

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

    Game.hasMany(Review,{
        foreignKey: 'game_id',
        onDelete: 'SET NULL'
    });
    
    Review.belongsTo(Game,{
        foreignKey: 'game_id'
    })

//export the models with module.exports

module.exports = { Category, Developer, Friend, Game, GamePlatform, Genre, Platform, Review, User };