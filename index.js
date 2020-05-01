const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ola: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Hello Word!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Servidor rodando " + url);
});
