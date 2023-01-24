// require sequelize and the models
const sequelize = require('../config/connection');
// require the seed files
const seedCategory = require('./categoryData');
const seedDeveloper = require('./developerData');
const seedGame = require('./gameData');
const seedGamePlatform = require('./gameplatformData');
const seedGenre = require('./genreData');
const seedPlatform = require('./platformData');
const seedReview = require('./reviewData');
const seedUser = require('./userData');
const seedUserBlock = require('./userblockData');
const seedUserFriend = require('./userfriendData');
const seedUsers = require('./userData');
// create a function to seed the database
// use the sequelize.sync() and the bulkCreate() or create() methods to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategory();
  await seedDeveloper();
  await seedGame();
  await seedGamePlatform();
  await seedGenre();
  await seedPlatform();
  await seedReview();
  await seedUser();
  await seedUserBlock();
  await seedUserFriend();
  await seedUsers();

  // close the connection to the database
  process.exit(0);
};
// call the function to seed the database
seedAll();