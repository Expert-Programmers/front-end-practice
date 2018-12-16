const { GraphQLServer } = require("graphql-yoga");

const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    publishedPosts(root, {}, context, info) {
      return context.prisma.posts({ where: { published: true } });
    },
    post(root, { postId }, context, info) {
      return context.prisma.post({ id: postId });
    },
    postsByUser(root, { userId }, context, info) {
      return context.prisma.user({
        id: userId
      }).posts();
    }
  },
  Mutation: {
    createUser(root, { name }, context, info) {
      return context.prisma.createUser({ name });
    },
    createDraft(root, { title, userId }, context, info) {
      return context.prisma.createPost(
        {
          title,
          author: {
            connect: {
              id: userId
            }
          }
        }
      );
    },
    publish(root, { postId }, context, info) {
      return context.prisma.updatePost(
        {
          where: { id: postId },
          data: { published: true }
        }
      );
    }
  },
  User: {},
  Post: {}
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

server.start(() => console.log('Server is running on http://localhost:4000'))
  .catch(e => console.error(e));
