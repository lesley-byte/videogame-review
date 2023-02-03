//This directs to the userRoutes file in order to search for a user

const router = require('express').Router();
// also require the routes from the api folder
const userRoutes = require('./user-routes'); // this is the user-routes.js file
// and add them to the router with router.use()
router.use('/users', userRoutes);


const friendRoutes = require('./friend-routes');
const gameRoutes = require('./game-routes');

const reviewRoutes = require('./review-routes');

router.use('/friends', friendRoutes);
router.use('/games', gameRoutes);


router.use('/reviews', reviewRoutes);


module.exports = router;
