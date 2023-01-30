//search by a single platform or all the platforms in the database
const router = require('express').Router();
const { Game, GamePlatform, Platform, Review, User } = require('../models');
const withAuth = require('../utils/auth');

// get all platforms
router.get('/', withAuth, async (req, res) => {
  try {
    const platformData = await Platform
      .findAll
      // {include: [{ model: Review}, {model: User }],}
      ()
      .catch((err) => {
        res.json(err);
      });
    const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
    );
    res.render('all-platforms', { platforms,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one platform and show all games for that platform
router.get('/:id', withAuth, async (req, res) => {
  try {
    const gameplatformData = await GamePlatform.findAll({
      where: {
        platform_id: req.params.id,
      },
      include: [
        {
          model: Platform,
          attributes: ['platform_name'],
        },
        {
          model: Game,
          attributes: ['game_name'],
        },
      ],
    }).catch((err) => {
      res.json(err);
      return;
    });
    if (!gameplatformData) {
      res.status(404).json({ message: 'No game found with this id!' });
      return;
    }
    const platformData = await Platform.findByPk(req.params.id).catch((err) => {
      res.json(err);
      return;
    });
    if (!platformData) {
      res.status(404).json({ message: 'No platform found with this id!' });
      return;
    }

    const platform = platformData.get({ plain: true });
    const gameplatforms = gameplatformData.map((gameplatform) =>
      gameplatform.get({ plain: true })
    );
    res.render('platform', { platform, gameplatforms,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;