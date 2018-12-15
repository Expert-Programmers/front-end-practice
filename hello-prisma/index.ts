import { prisma } from "./generated/prisma-client";

async function main() {

  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  // Read all users from the database and print them on the console
  const allUser = await prisma.users();
  console.log(allUser);
}

main().catch(e => console.error(e));
