const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./usersModel');

router.get('/', (req, res) => {
  return db.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve from the users database.' })
    });
})

module.exports = router;