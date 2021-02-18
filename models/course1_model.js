const db = require('../database');

const course1 = {
  get: function(callback) {
    return db.query('select * from course1 order by id_course1 desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from course1 where id_course1=?', [id], callback);
  },
  add: function(course1, callback) {
    return db.query(
      'insert into course1 (name,credits,) values(?,?)',
      [course1.name, course1.credits],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from course1 where id_course1=?', [id], callback);
  },
  update: function(id, course1, callback) {
    return db.query(
      'update course1 set name=?,credits=? where id_course1=?',
      [course1.name, course1.credits, id],
      callback
    );
  }
};
module.exports = course1;