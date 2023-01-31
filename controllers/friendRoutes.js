const router = require('express').Router();
const { User, Friend, Review, Game } = require('../models');
const { Op } = require('sequelize');
const withAuth = require('../utils/auth');

// GET all friends of logged in user

router.get('/', withAuth, async (req, res) => {
  try {
    const dbFriendData = await Friend.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
          attributes: ['username', 'id'],
        },
      ],
    });

    const friends = dbFriendData.map((friends) => friends.get({ plain: true }));
    // find all users but exclude the logged in user and the current user's friends
    const dbUserData = await User.findAll({
      attributes: { exclude: ['password'] },
      where: {
        id: {
          [Op.ne]: req.session.userId,
          [Op.notIn]: dbFriendData.map((friend) => friend.friend_id),
        },
      },
    });
    console.log('------friend.mapped---------------');
    console.log(dbFriendData.map((friend) => friend.friend_id));
    console.log('---------------------');
    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render('all-friends', {
      friends,
      users,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one friend by user_id include username from User table and include the user's reviews
router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbFriendData = await Friend.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    const friend = dbFriendData.get({ plain: true });
    // find all reviews by the friend
    const dbReviewData = await Review.findAll({
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: Game,
        },
      ],
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));

    res.render('friend', {
      friend,
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new friend
router.post('/', withAuth, async (req, res) => {
  try {
    const dbFriendData = await Friend.create({
      user_id: req.session.userId,
      friend_id: req.body.friend_id,
    }).catch ((err) => {
      res.json(err);
      return;
    });
    res.status(200).json(dbFriendData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
});

// DELETE friend
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbFriendData = await Friend.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dbFriendData) {
      res.status(404).json({ message: 'No friend found with this id' });
      return;
    }
    res.status(200).json(dbFriendData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
