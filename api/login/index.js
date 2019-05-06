const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./loginModel');

router.post('/', (req, res) => {
  let { username, password } = req.body;

  db.get({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome back ${user.username}` });
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

module.exports = router;