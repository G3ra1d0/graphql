const jwt = require("jsonwebtoken");

const sign = (payload) => jwt.sign(payload, "G3ra1d0", { expiresIn: "3 days" });

const verify = (token) => jwt.verify(token, "G3ra1d0");

const decode = () => (toke) => jwt.decode(token);

module.exports = {
  sign,
  verify,
  decode,
};
