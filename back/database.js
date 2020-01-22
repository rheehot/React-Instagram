const db = require('./models');

module.exports = () => {
  db.sequelize.sync()
  .then(() => console.log('DB connection succeeded!'))
  .catch(err => {
    console.log('DB connection failed!');
    process.exit();
  });
}