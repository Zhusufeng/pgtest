const Sequelize = require('sequelize');

//For local variable loading
var dotenv = require('dotenv');
dotenv.load();

const sequelize = new Sequelize(process.env.POSTGRES_URL);

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
// var db = pgp(process.env.POSTGRES_URL)

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })