import { prisma, hashPassword } from "../src/helpers/utils.js";

const userData = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: "12345",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  let users = await prisma.user.findMany({
    select: { email: true },
  });
  if (!!users.length) {
    console.log(`Nothing to do here`);
    return;
  }
  for (const u of userData) {
    const hashedPassword = await hashPassword(u.password);
    const userData = { ...u, password: hashedPassword };
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
