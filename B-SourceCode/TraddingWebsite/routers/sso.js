const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const moment = require('moment');
const config = require('../config/keypairs');
const crypto = require('crypto');


router.post('/:cert', (req, res, next) => {

  const key = config.key;
  const secureCert = config.cert;

  const userCertificate = req.params.cert;

  console.log(userCertificate);

  var decrypt = crypto.createDecipheriv('des-ede3', key, "");
  var s = decrypt.update(userCertificate, 'base64', 'utf8');
  const decodedCertificate = s + decrypt.final('utf8')

  console.log(decodedCertificate);

  if (secureCert == decodedCertificate) {
    return res.json({ success: true, msg: 'Success!' });
  } else {
    return res.json({ success: false, msg: 'Wrong password' });
  }
});

module.exports = router;


