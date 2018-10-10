const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import')

// The GraphQL schema
const typeDefs = importSchema('./schemas/schema.graphql')

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => {
      return 'world'
    },
  },
  AuthPayload: {
    token: (authPayLoad) => {
      return authPayLoad['token']
    }
  },  
  Mutation: {
    login: (parent, args, context, info) => {
      console.log(args['email'])
      return { token: args['email']+': this is a user token' }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.log("Error:")
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log("Reponse:")
    console.log(response);
    return response;
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});