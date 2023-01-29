//routes for the login and homepage
const router = require('express').Router();
const { User, Review } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.render('homepage', {
      layout: 'main',
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports = router;