const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const { User } = require('../models');
const verifyUser = require('../helpers/authorizationHelper');

const router = Router();

router.post(
  '/register',
  [
    check('email')
      .isEmail()
      .normalizeEmail(),
    check('password').isLength({ min: 6, max: 35 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    if (await User.findOne({ where: { email: req.body.email } })) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    try {
      const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10));
      const hash = await bcrypt.hash(req.body.password, salt);
      await User.create({
        email: req.body.email,
        password: hash
      });
      res.status(201).send();
    } catch (err) {
      res.status(500).send();
    }
  }
);

router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    res.status(404).send();
  }

  try {
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(401).send();
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: '90 days'
    });

    return res.status(200).send({
      token,
      id: user.id,
      email: user.email
    });
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/user', verifyUser, async (req, res) => {
  const user = await User.findOne({
    where: { email: req.authData.email }
  });

  if (!user) {
    res.status(404).send();
  }

  res.status(200).json(user);
});

module.exports = router;
