const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Users = require('./routes/users');

const app = express();
app.use(express.static(path.join(__dirname, "./build")));

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', Users);

app.listen(PORT, () => {
    console.log('SSO Server Started on Port ' + PORT);
});

module.exports = app;