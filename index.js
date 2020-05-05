const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const { verify } = require("./middleware/auth/jwt");

require("./db");

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers,
  context: ({ req }) => {
    const usuario = null;
    const auth = req.headers.authorization;
    if (auth) {
      const token = auth.split(" ")[1];
      if (token) {
        try {
          let decoded = verify(token);
          usuario = decoded;
        } catch (err) {
          // console.log(err);
        }
      }
    }

    return usuario;
  },
});

server.listen().then(({ url }) => {
  console.log("Servidor rodando " + url);
});
