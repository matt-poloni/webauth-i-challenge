const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./loginModel');

router.post('/', (req, res) => {
  let { username, password } = req.body;
  db.get({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `Welcome back ${user.username}` });
      } else {
        res.status(401).json({ error: 'You shall not pass!' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not check credentials against users database.' });
    });
})

module.exports = router;