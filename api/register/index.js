const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('./registerModel');

router.post('/', (req, res) => {
  let creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;
  db.post(creds)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not create the new user.' });
    });
})

module.exports = router;