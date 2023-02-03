//routes to search for a specific game or all the games
const router = require('express').Router();
const {
  Game,
  Developer,
  Review,
  User,
  Category,
  Genre,
  Platform,
  GamePlatform,
} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGame = await Game.create({
      game_name: req.body.game_name,
      developer_id: req.body.developer_id,
      category_id: req.body.category_id,
      date: req.body.date,
    }).catch((err) => {
      res.json(err);
      return;
    });
    if (!newGame) {
      res.status(404).json({ message: 'Cannot create new game' });
      return;
    }
    res.status(200).json(newGame);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
});


// add a new platform to a game with post request

router.post('/addplatform', withAuth, async (req, res) => {
  try {
    const newGamePlatform = await GamePlatform.create({
      game_id: req.body.game_id,
      platform_id: req.body.platform_id,
    }).catch((err) => {
      res.json(err);
      return;
    });
    if (!newGamePlatform) {
      res.status(404).json({ message: 'Cannot add new platform' });
      return;
    }
    res.status(200).json(newGamePlatform);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
});

module.exports = router;









