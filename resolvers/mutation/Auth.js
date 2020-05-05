const bcrypt = require("bcryptjs");
const Usuario = require("../../models/Usuarios");
const { sign } = require("../../middleware/auth/jwt");

module.exports = {
  async login(_, args) {
    return await Usuario.findOne({ email: args.email })
      .then((usuario) => {
        // comparando as senhas
        return bcrypt
          .compare(args.senha, usuario.senha)
          .then((result) => {
            if (result) {
              const token = sign({ _id: usuario.id });

              return { usuario, token };
            } else {
              return null;
            }
          })
          .catch((err) => null);
      })
      .catch((err) => null);
  },
};
