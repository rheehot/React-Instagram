const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const db = require('./models');
db.sequelize.sync()
  .then(() => console.log('DB connection succeeded!'))
  .catch(err => {
    console.log('DB connection failed!');
    process.exit();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to server on port ${port}!`));