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
        return;
      });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render('all-reviews', { reviews,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
    return;
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
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'no review found with this id' });
      return;
    }
    const review = reviewData.get({ plain: true });
    res.render('review', { review,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

// add a review
router.post('/', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.create(
      {
        review_title: req.body.review_title,
        review_text: req.body.review_text,
        user_id: req.session.userId,
        game_id: req.body.game_id,
      }
    ).catch((err) => {
      res.json(err);
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    console.log
    res.status(500).json(err);
    return;
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
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }
    res.status(200).json(readerData);

  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.update(
//       {
//         review_text: req.body.review_text,
//       },
//       { where: { id: req.params.id } }
//     ).catch((err) => {
//       res.json(err);
//     });
//     if (!reviewData) {
//       res.status(404).json({ message: 'No review found with that id!' });
//       return;
//     }
//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// reviews/add to add a review for the game in the url
router.get('/add/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findByPk(
      req.params.id, 
    ).catch((err) => {
      res.json(err);
      return;
    });
    if (!gameData) {
      res.status(404).json({ message: 'no game found with this id' });
      return;
    }
    const game = gameData.get({ plain: true });
    res.render('add-reviews', { game,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});



//reviews/update/:id
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
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
    }).catch((err) => {
      res.json(err);
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'no review found with this id' });
      return;
    }
    const review = reviewData.get({ plain: true });
    res.render('updatereview', { review,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/delete/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
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
    }).catch((err) => {
      res.json(err);
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'no review found with this id' });
      return;
    }
    const review = reviewData.get({ plain: true });
    res.render('delete-review', { review,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username, });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.update(
      {
        review_text: req.body.text,
        review_title: req.body.title,
      },
      { where: { id: req.params.id } }
    ).catch((err) => {
      res.json(err);
      return;
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});
module.exports = router;
