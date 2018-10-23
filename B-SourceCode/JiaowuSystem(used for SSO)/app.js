const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const moment = require('moment');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.static(path.join(__dirname, "./build")));

const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server Started on Port ' + PORT);
});

module.exports = app;