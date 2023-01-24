const router = require('express').Router();
// also require the routes from the api folder
const userRoutes = require('./user-routes'); // this is the user-routes.js file
// and add them to the router with router.use()
router.use('/users', userRoutes);

module.exports = router;