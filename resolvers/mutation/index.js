const usuario = require("./Usuario");
const auth = require("./Auth");

module.exports = {
  ...usuario,
  ...auth,
};
