const crypto = require("crypto");
const config = require("../config");

function decrypt(text) {
  var decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(config.SECRET),
    Buffer.from(config.IV)
  );
  var decrypted = decipher.update(text, "hex", "utf8");

  decrypted += decipher.final("utf8");

  return decrypted;
}

function encrypt(text) {
  var cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(config.SECRET),
    Buffer.from(config.IV)
  );
  var crypted = cipher.update(text, "utf8", "hex");

  crypted += cipher.final("hex");

  return crypted;
}

function hashString(text) {
  var sha = crypto.createHash("sha512");
  sha.update(text);

  return sha.digest("hex");
}

module.exports = { encrypt, decrypt, hashString };
