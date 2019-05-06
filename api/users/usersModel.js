const tbl = 'users';
const basic = require('../basicModel')(tbl);
const db = require('../../data/dbConfig');

module.exports = {
  get: basic.get,
}