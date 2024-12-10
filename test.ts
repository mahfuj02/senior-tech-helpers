import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Fetch all users from the database
  const users = await prisma.users.findMany();
  console.log("Users:", users);

  // Insert a test user
  const newUser = await prisma.users.create({
    data: {
      first_name: "Jane",
      last_name: "Doe",
      email: "jane.doe@example.com",
      password: "password123",
      role: "senior",
    },
  });
  console.log("New User:", newUser);
}

// Run the script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
