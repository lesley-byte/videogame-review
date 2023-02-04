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
const { Op } = require('sequelize');

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


// get one game and show all possible platforms 
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
            // exclude platforms that are already in gamePlatforms.platform_id
          //   where: {
          //     id: {
          //       [Op.notIn]:gamePlatformData.map((gamePlatform) => gamePlatform.platform_id),
          //       },
          // },
          },
          {
            model: Game,
          },
        ],
      }
      // {include: [{ model: User }, { model: Category }],}
    ).catch((err) => {
      res.json(err);
      console.log(err)
      return;
    });
    if (!gamePlatformData) {
      res.status(404).json({ message: 'no game found with this id!' });
    }
    const gamePlatforms = gamePlatformData.map((gamePlatform) =>
    gamePlatform.get({ plain: true })
    );
    const game = gameData.get({ plain: true });
    // exclude platforms that are already in gamePlatforms.platform_id
    const platformData = await Platform.findAll({
      where: {
        id: {
            [Op.notIn]:gamePlatformData.map((gamePlatform) => gamePlatform.platform_id),
            },
        },
      });
      
      const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
      );
      console.log(platformData.map((platform) => platform.id));
      console.log(gamePlatformData.map((gamePlatform) => gamePlatform.platform_id));
    res.render('game', {
      game,
      gamePlatforms,
      platforms,
      reviews,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a new platform to a game with post request

// router.post('/addplatform', withAuth, async (req, res) => {
//   try {
//     const newGamePlatform = await GamePlatform.create({
//       game_id: req.body.game_id,
//       platform_id: req.body.platform_id,
//     }).catch((err) => {
//       res.json(err);
//       return;
//     });
//     if (!newGamePlatform) {
//       res.status(404).json({ message: 'Cannot add new platform' });
//       return;
//     }
//     res.status(200).json(newGamePlatform);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//     return;
//   }
// });

module.exports = router;









