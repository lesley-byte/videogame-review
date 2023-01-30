//routes to search for a specific genre or all the genres
//routes to search for a specific genre or all the genres

const router = require('express').Router();
const { Genre, Review, User, Category } = require('../models');
const withAuth = require('../utils/auth');

// get all genres
router.get('/', async (req, res) => {
  try {
    const genreData = await Genre
      .findAll
      // {include: [{ model: Review},  {model: User }],}
      ()
      .catch((err) => {
        res.json(err);
      });
    const genres = genreData.map((genre) => genre.get({ plain: true }));
    res.render('all-genres', { genres,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one genre
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      where: {
        genre_id: req.params.id,
      },
    });
    const categories = categoryData.map((category) => category.get({ plain: true }));
    const genreData = await Genre.findByPk(req.params.id,
      {
        include: [
          {
            model: Category,
            attributes: ['category_name'],
          },
        ],
      }
    ).catch((err) => {
      res.json(err);
    });

    if (!genreData) {
      res.status(404).json({ message: 'no genre found with this id!' });
    }
    const genre = genreData.get({ plain: true });
    res.render('genre', { genre,
      categories,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
