const crypto = require('crypto');

// const config = require('../TraddingWebsite/config/keypairs');

// const sign = crypto.createSign('SHA256');

// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 4096,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'top secret'
//   }
// });

// sign.update('WildSaoFeng');

// console.log(sign.sign(privateKey, 'hex'));

var key = "wildsaofengwrotethiskeyy";

var pt = "4j32fj39we2y34";

var encrypt = crypto.createCipheriv('des-ede3', key, "");
var theCipher = encrypt.update(pt, 'utf8', 'base64');
theCipher += encrypt.final('base64');

console.log(theCipher);

var decrypt = crypto.createDecipheriv('des-ede3', key, "");
var s = decrypt.update(theCipher, 'base64', 'utf8');
console.log(s + decrypt.final('utf8'));