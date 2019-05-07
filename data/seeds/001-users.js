const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          username: 'admin',
          password: bcrypt.hashSync('admin', 10)
        },
        {
          id: 2,
          username: 'Matt',
          password: bcrypt.hashSync('password', 10)
        },
      ]);
    });
};
