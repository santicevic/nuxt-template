const Router = require('express').Router;
const bodyParser = require('body-parser');
const authentication = require('./authentication');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use('/authentication', authentication);

module.exports = router;
