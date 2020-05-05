const Usuario = require("../../models/Usuarios");
const bcrypt = require("bcryptjs");

module.exports = {
  novoUsuario(_, args) {
    return new Usuario({
      nome: args.nome,
      email: args.email,
      senha: bcrypt.hashSync(args.senha, bcrypt.genSaltSync()),
      idade: args.idade,
      salario: args.salario,
      vip: args.vip,
    })
      .save()
      .then((el) => {
        return el;
      });
  },
  deleteUsuario(_, { id }) {
    return Usuario.findById(id)
      .then((doc) => {
        doc.deleteOne();
        return doc;
      })
      .catch((err) => null);
  },
  updateUsuario(_, { id, dados }) {
    return Usuario.findById(id)
      .then((doc) => {
        if (dados.nome) doc.nome = dados.nome;
        if (dados.email) doc.email = dados.email;
        if (dados.idade) doc.idade = dados.idade;
        if (dados.salario) doc.salario = dados.salario;
        if (dados.vip) doc.vip = dados.vip;
        return doc.save();
      })
      .catch((err) => null);
  },
};
