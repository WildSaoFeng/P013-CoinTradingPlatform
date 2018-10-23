const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');
const moment = require('moment');

router.post('/:cert', (req, res, next) => {
    const secureCertificate = config.secureCertificate;
    const userCertificate = req.params.cert;
    if(userCertificate == secureCertificate) {

    }
});

module.exports = router;


