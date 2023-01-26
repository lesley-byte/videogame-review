//routes to search for a specific genre or all the genres
//routes to search for a specific genre or all the genres

const router = require('express').Router();
const { Genre, Review, User } = require('../models');
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
    res.render('all-genres', { genres });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one genre
router.get('/:id', async (req, res) => {
  try {
    const genreData = await Genre.findByPk(req.params.id, 
        // {include: [{ model: Review }, { model: User }],}
      );
    if (!genreData) {
      res.status(404).json({ message: 'no genre found with this id!' });
    }
    const genre = genreData.get({ plain: true });
    res.render('genre', { genre });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
