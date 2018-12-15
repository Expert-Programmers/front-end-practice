export const resolvers = {
  Query: {
    publishedPosts(parent, args, context) {
      return context.prisma.posts({ where: { published: true } });
    },
    post(parent, args, context) {
      return context.prisma.post({ id: args.postId });
    },
    postsByUser(parent, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts();
    }
  },
  Mutation: {
    createDraft(parent, args, context) {
      return context.prisma.createPost(
        {
          title: args.title,
          author: {
            connect: { id: args.userId }
          }
        },
      );
    },
    publish(parent, args, context) {
      return context.prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true },
        },
      );
    },
    createUser(parent, args, context) {
      return context.prisma.createUser(
        { name: args.name },
      );
    }
  },
  User: {
    posts(parent, args, context) {
      return context.prisma.user({
        id: parent.id
      }).posts();
    }
  },
  Post: {
    author(parent, args, context) {
      return context.prisma.post({
        id: parent.id
      }).author();
    }
  }
};
