const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

db.authenticate()
.then(() => {
    console.log(`Connection database has been established successfully.`)
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
})

module.exports = db