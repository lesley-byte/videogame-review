//to search for one review or all reviews. Will also have post, get, put, delete routes for reviews
const router = require('express').Router();
const { Review, User, Category, Game } = require('../models');
const withAuth = require('../utils/auth');

// get all reviews
router.get('/', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
       {
          model: Game,
          attributes: ['game_name'],
       },
    ],
    })
      // .findAll
      // // {include: [{ model: User }, { model: Category }],}
      // ()
      .catch((err) => {
        res.json(err);
      });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render('all-reviews', { reviews });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one review
router.get('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findByPk(
      req.params.id,
      {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Game,
            attributes: ['game_name'],
          },
        ],
      }
      // {include: [{ model: User }, { model: Category }],}
    ).catch((err) => {
      res.json(err);
    });
    if (!reviewData) {
      res.status(404).json({ message: 'no review found with this id' });
    }
    const review = reviewData.get({ plain: true });
    res.render('review', { review });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.json(err);
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reviewData = await Review.update(
      {
        review_text: req.body.review_text,
      },
      { where: { id: req.params.id } }
    ).catch((err) => {
      res.json(err);
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
