const Usuario = require("../models/Usuarios");

module.exports = {
  novoUsuario(_, args) {
    return new Usuario({
      nome: args.nome,
      email: args.email,
      idade: args.idade,
      salario: args.salario,
      vip: args.vip,
    })
      .save()
      .then((el) => {
        console.log(el);
        return el;
      });
  },
};
