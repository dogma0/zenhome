import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { importSchema } from 'graphql-import'

const server = new GraphQLServer({
  typeDefs: importSchema('schema.graphql'), // TODO: importSchema only imports *. See: https://github.com/prisma/graphql-import/issues/235
  resolvers,
  context: req => {
    return {
      ...req,
      db: prisma,
    }
  },
} as any)

export default server.start(() => console.log('Server is running on localhost:4000'))
