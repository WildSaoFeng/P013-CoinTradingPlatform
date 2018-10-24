var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.post('/', function (req, res, next) {
  console.log(req.body);
  const userUsername = req.body.username;
  const userPassword = req.body.password;
  const configUsername = config.user;
  const configPassword = config.password;
  if (userUsername == configUsername && userPassword == configPassword) {
    return res.json({ success: true, msg: 'Success!', cert: '4j32fj39we2y34' });
  } else {
    return res.json({ success: false, msg: 'Wrong password' });
  }
});

module.exports = router;
