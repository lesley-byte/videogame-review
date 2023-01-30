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
} = require('../models');
const withAuth = require('../utils/auth');

// get all games and also get all developers and categories
router.get('/', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [
        {
          model: Developer,
        },
        {
          model: Category,
        },
      ],
    });
    const games = gameData.map((game) => game.get({ plain: true }));
    const developerData = await Developer.findAll();
    const developers = developerData.map((developer) =>
      developer.get({ plain: true })
    );
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('all-games', {
      games,
      categories,
      developers,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
    console.log(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

// get one game
router.get('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: {
        game_id: req.params.id,
      },
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Developer,
          attributes: ['developer_name'],
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
      ],
    }).catch((err) => {
      res.json(err);
      return;
    });

    if (!gameData) {
      res.status(404).json({ message: 'no game found with this id!' });
    }
    const gamePlatformData = await GamePlatform.findAll(
      {
        where: {
          game_id: req.params.id,
        },
        include: [
          {
            model: Platform,
            attributes: ['platform_name'],
          },
          {
            model: Game,
          },
        ],
      }
      // {include: [{ model: User }, { model: Category }],}
    ).catch((err) => {
      res.json(err);
      return;
    });
    if (!gamePlatformData) {
      res.status(404).json({ message: 'no game found with this id!' });
    }
    const gamePlatforms = gamePlatformData.map((gamePlatform) =>
      gamePlatform.get({ plain: true })
    );
    const game = gameData.get({ plain: true });
    console.log(game);
    res.render('game', {
      game,
      gamePlatforms,
      reviews,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
