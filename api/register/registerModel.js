const tbl = 'users';
const basic = require('../basicModel')(tbl);
const db = require('../../data/dbConfig');

module.exports = {
  post: async function(creds) {
    const [id] = await basic.post(creds);
    return basic.get({id});
  },
}