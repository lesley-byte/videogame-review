//to search for one review or all reviews. Will also have post, get, put, delete routes for reviews
const router = require('express').Router();
const { Review, User, Category, Game } = require('../../models');
const withAuth = require('../../utils/auth');


// add a review
router.post('/', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.create(
      {
        review_rating: req.body.review_rating,
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



router.put('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.update(
      {
        review_rating: req.body.review_rating,
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
