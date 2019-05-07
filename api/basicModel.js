const db = require('../data/dbConfig');

module.exports = function(tbl) {
  return {
    get: function(val) {
      // When invoking, wrap passed value in curly brackets
      return val
        ? db(tbl).where(val).first()
        : db(tbl);
    },    
    post: function(entry) {
      return db(tbl).insert(entry);
    },
    put: function(id, changes) {
      return db(tbl).where({id}).update(changes);
    },
    del: function(id) {
      return db(tbl).where({id}).del();
    }
  }
}