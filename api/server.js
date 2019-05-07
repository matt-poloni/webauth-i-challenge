const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sessionConfig = require('../data/sessionConfig');
const session = require('express-session')(sessionConfig);

const mw = require('./middleware');
const registerRt = require('./register/router');
const loginRt = require('./login/router');
const usersRt = require('./users/router');
const restrictRt = require('./restricted/router');

const server = express();

server.use(session);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/register/', registerRt);
server.use('/api/login/', loginRt);
server.use('/api/users/', mw.auth, usersRt);
server.use('/api/restricted/', mw.auth, restrictRt);

server.get('/', (req, res) => {
  const client = req.session.username || 'stranger';
  res.send(`Up and running, ${client}.`);
});

module.exports = server;
