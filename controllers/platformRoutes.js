//search by a single platform or all the platforms in the database
const router = require('express').Router();
const { Platform, Review, User } = require('../models');
const withAuth = require('../utils/auth');

// get all platforms
router.get('/', withAuth, async (req, res) => {
  try {
    const platformData = await Platform
      .findAll
      // {include: [{ model: Review}, {model: User }],}
      ()
      .catch((err) => {
        res.json(err);
      });
    const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
    );
    res.render('all-platforms', { platforms });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one platform
router.get('/:id', withAuth, async (req, res) => {
  try {
    const platformData = await Platform.findByPk(
      req.params.id,
      // {include: [{ model: Review, include: [{ model: User }] }],}
    ).catch((err) => {
      res.json(err);
    });
    if (!platformData) {
      res.status(404).json({ message: 'no platform found with this id!' });
    }
    const platform = platformData.get({ plain: true });
    res.render('platform', { platform });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
