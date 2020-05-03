const mongoose = require("mongoose");

const Usuario = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
  },
  salario: {
    type: Number,
  },
  vip: {
    type: Boolean,
  },
});

module.exports = mongoose.model("usuarios", Usuario);
