const router = require('express').Router();
const { User, Friend, Review, Game } = require('../../models');
const { Op } = require('sequelize');
const withAuth = require('../../utils/auth');

// CREATE new friend
router.post('/', withAuth, async (req, res) => {
  try {
    const dbFriendData = await Friend.create({
      user_id: req.session.userId,
      friend_id: req.body.friend_id,
    }).catch((err) => {
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
    }).catch((err) => {
      res.json(err);
      return;
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
