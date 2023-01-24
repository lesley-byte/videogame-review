// require sequelize and the models
const sequelize = require('../config/connection');
// require the seed files
const seedUsers = require('./userData');
// create a function to seed the database
// use the sequelize.sync() and the bulkCreate() or create() methods to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();

  // close the connection to the database
  process.exit(0);
};
// call the function to seed the database
seedAll();