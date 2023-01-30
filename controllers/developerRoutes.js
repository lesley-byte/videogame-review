//routes to search for one developer or all developers
const router = require('express').Router();
const { Developer, Review, User, Game } = require('../models');
const withAuth = require('../utils/auth');

// get all developers
router.get('/', withAuth, async (req, res) => {
  try {
    const developerData = await Developer
      .findAll
      // {include: [{ model: Review}, {model: User}],}
      ()
      .catch((err) => {
        res.json(err);
      });
    const developers = developerData.map((developer) =>
      developer.get({ plain: true })
    );
    res.render('all-developers', {
      developers,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one developer and include all games by that developer
router.get('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      where: {
        developer_id: req.params.id,
      },
    });
    const games = gameData.map((game) => game.get({ plain: true }));
    const developerData = await Developer.findByPk(req.params.id,
      

      // {include: [{ model: Review}, { model: User }],}
    ).catch((err) => {
      res.json(err);
    });
    if (!developerData) {
      res.status(404).json({ message: 'no developer found with this id!' });
    }
    const developer = developerData.get({ plain: true });
    res.status(200).render('developer', {
      developer,
      games,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
