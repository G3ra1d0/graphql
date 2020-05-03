const Usuario = require("../../models/Usuarios");

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
        if (dados.vip) doc.nome = dados.nome;
        return doc.save();
      })
      .catch((err) => null);
  },
};
