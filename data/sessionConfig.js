module.exports = {
  name: 'cookie',
  secret: 'What is the air-speed velocity of an unladen swallow?',
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 30, // 30 minutes
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
};