const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(403).json({ message: 'forbidden' });

    const token = req.headers.authorization.split(' ').pop();
    const parsedToken = jwt.verify(token, "Admin");
    req.token = parsedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: 'forbidden' });
  }
};

module.exports = auth;