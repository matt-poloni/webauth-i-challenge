module.exports = {
  auth,
};

function auth(req, res, next) {
  req.session && req.session.username
    ? next()
    : res.status(401).json({ error: 'You shall not pass!' })
}
