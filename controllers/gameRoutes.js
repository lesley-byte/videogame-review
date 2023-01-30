//routes to search for a specific game or all the games
const router = require('express').Router();
const { Game, Developer, Review, User, Category, Genre, Platform, GamePlatform } = require('../models');
const withAuth = require('../utils/auth');

// get all games
router.get('/', withAuth, async (req, res) => {
  try {
    const gameData = await Game
      .findAll
      (
      {include: [
        
        {
          model: Developer,
          attributes:['developer_name']
        },
        {
          model: Category,
          attributes:['category_name']
        },
      ]
    })
      // {include: [{ model: Review}, { model: User }, { model: Category }, { model: Genre }, { model: Platform }],}
      .catch((err) => {
        res.json(err);
      });
    const games = gameData.map((game) => game.get({ plain: true }));
    res.render('all-games', { games,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
    console.log(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one game
router.get('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: {
        game_id: req.params.id,
      }
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    const gameData = await Game.findByPk(req.params.id,
      {
        include: [
          {
            model: Developer,
            attributes: ['developer_name'],
          },
          {
            model: Category,
            attributes: ['category_name'],
          }
        ],
      }).catch((err) => {
        res.json(err);
        return;
        });

        if (!gameData) {
          res.status(404).json({ message: 'no game found with this id!' });
        }
        const gamePlatformData = await GamePlatform.findAll({
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
                  }
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
            const gamePlatforms = gamePlatformData.map((gamePlatform) => gamePlatform.get({ plain: true }));
    const game = gameData.get({ plain: true });
    console.log(game);
    res.render('game', { game,
      gamePlatforms,
      reviews,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
