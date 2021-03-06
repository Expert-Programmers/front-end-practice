import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma-client'
import { resolvers } from "./resolvers";


const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'))
  .catch((error) => console.error("looks like some error:", error.message));
