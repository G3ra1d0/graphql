const Usuario = require("../../models/Usuarios");

module.exports = {
  usuarios() {
    return Usuario.find().then((doc) => {
      return doc;
    });
  },
  usuario(_, { id }) {
    return Usuario.findById(id)
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        return null;
      });
  },
};
