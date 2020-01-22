const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes/index');
const passport = require('passport');
const passportConfig = require('./passport');
const databaseConfig = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
databaseConfig();
passportConfig();
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to server on port ${port}!`));