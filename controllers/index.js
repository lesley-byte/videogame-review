//This tells what route file to go to 


const router = require('express').Router();

const apiRoutes = require('./api');
const categoryRoutes = require('./categoryRoutes');
const developerRoutes = require('./developerRoutes');
const gameRoutes = require('./gameRoutes');

const genreRoutes = require('./genreRoutes');
const platformRoutes = require('./platformRoutes');
const reviewRoutes = require('./reviewRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/developers', developerRoutes);
router.use('/games', gameRoutes);

router.use('/genres', genreRoutes);
router.use('/platforms', platformRoutes);
router.use('/reviews', reviewRoutes);
router.use('/', homeRoutes);

module.exports = router;
