const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader) {
    res.status(401).send();
  }
  const bearer = bearerHeader.split(' ');
  const token = bearer[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.status(401).send();
    }
    req.authData = authData.user;
    next();
  });
};

module.exports = verifyUser;
