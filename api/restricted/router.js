const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`You are cleared to access this restricted area, ${req.session.username}.`);
});

module.exports = router;