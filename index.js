const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Query {
    ola: String
    HoraCerta: Date!
    usuarioLogado: Usuario
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Query: {
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Servidor rodando " + url);
});
