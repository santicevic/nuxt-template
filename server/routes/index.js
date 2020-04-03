const Router = require('express').Router;
const bodyParser = require('body-parser');
const authentication = require('./auth');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use('/auth', authentication);

module.exports = router;
