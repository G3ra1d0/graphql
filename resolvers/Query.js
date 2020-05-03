const Usuario = require("../models/Usuarios");

module.exports = {
  ola() {
    return "Hello Word!";
  },
  HoraCerta() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Beatriz",
      email: "beatriz123@gmail.com",
      idade: 22,
      salario_real: 1045.5,
      vip: true,
    };
  },
  usuarios() {
    return Usuario.find().then((doc) => {
      return doc;
    });
  },
  usuario(_, { id }) {
    return Usuario.findById(id).then((doc) => {
      return doc;
    });
  },
};
