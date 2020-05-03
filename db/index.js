const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/teste", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ão mongo");
  })
  .catch((err) => {
    console.log("erro ao se conectar " + err);
  });
