// routes to view one category and all categories
const router = require('express').Router();
const { Category, Review, User, Genre, Game } = require('../models');
const withAuth = require('../utils/auth');

// get all categories for
router.get('/', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Genre,
          attributes: ['genre_name'],
        },
      ],
    })
      // .findAll
      //   {
      //   include: [{ model: Review}, {model: User }],
      // }
      // ()
      .catch((err) => {
        res.json(err);
      });
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('all-categories', {
      categories,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one category and if it has any games then show them
router.get('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    const games = gameData.map((game) => game.get({ plain: true }));
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [
          {
            model: Genre,
            attributes: ['genre_name'],
          },
        ],
      }
    ).catch((err) => {
      res.json(err);
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category was found with this id!' });

    }
    const category = categoryData.get({ plain: true });
    res.status(200).render('category', {
      category,
      games,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
