//manages all the seed and makes sure they are added to their appropriate tables
// require sequelize and the models
const sequelize = require('../config/connection');
// require the seed files
const seedCategory = require('./categoryData');
const seedDeveloper = require('./developerData');
const seedFriend = require('./friendData');
const seedGame = require('./gameData');
const seedGamePlatform = require('./gameplatformData');
const seedGenre = require('./genreData');
const seedPlatform = require('./platformData');
const seedReview = require('./reviewData');
const seedUser = require('./userData');
// create a function to seed the database
// use the sequelize.sync() and the bulkCreate() or create() methods to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedGenre();
  await seedDeveloper();
  await seedCategory();
  await seedGame();
  await seedPlatform();
  await seedGamePlatform();
  await seedReview();
  await seedFriend();
  process.exit(0);
};

  // close the connection to the database
 
// call the function to seed the database
seedAll();