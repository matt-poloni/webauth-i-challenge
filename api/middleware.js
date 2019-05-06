const bcrypt = require('bcryptjs');

const db = require('./basicModel');

module.exports = {
  auth,
};

function auth(req, res, next) {
  const { username, password } = req.headers;
  if(username && password) {
    db('users').get({username})
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: 'You shall not pass!' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Could not check credentials against users database.' });
      });
  } else {
    res.status(400).json({message: 'Please provide both a username and password'});
  }
}
