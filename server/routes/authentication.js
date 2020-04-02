const Router = require('express').Router;

const router = Router();

router.post('/register', (req, res) => {
  res.send('Thanks');
});

router.post('/login', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  res.send('Thanks');
});

module.exports = router;
