const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
require("./db");

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Servidor rodando " + url);
});
