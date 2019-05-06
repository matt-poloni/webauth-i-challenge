const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('You are cleared to access this restricted area.');
});

module.exports = router;