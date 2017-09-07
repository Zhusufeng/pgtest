const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:test@localhost:5433/postgres');

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;

// var pgp = require('pg-promise')(/*options*/)
// var db = pgp('postgres://postgres:test@127.0.0.1:5433/postgres')

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })