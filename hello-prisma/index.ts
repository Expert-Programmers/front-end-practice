import { prisma, User } from "./generated/prisma-client";

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  // const newUser: User = await prisma.createUser({
  //   name: "Bob",
  //   email: "bob@prisma.io",
  //   posts: {
  //     create: {
  //       title: "The data layer for modern apps"
  //     }
  //   }
  // });
  //
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);
  //
  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users();
  // console.log(allUsers);
  //
  // const allPosts = await prisma.posts();
  // console.log(allPosts);

  // Read the previously created user from the database and print their posts to the console
  const postByUser = await prisma
    .user({ email: "bob@prisma.io" })
    .posts();
  console.log(`All posts by that user: ${JSON.stringify(postByUser)}`);

}

main().catch(e => console.error(e));
