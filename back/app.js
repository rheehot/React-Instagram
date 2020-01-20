const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Connected to server!'));