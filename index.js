const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Query {
    ola: String
    HoraCerta: Date!
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Hello Word!";
    },
    HoraCerta() {
      return new Date;
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
