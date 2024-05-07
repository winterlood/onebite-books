import { PrismaClient } from '@prisma/client';
import { seedBooks } from './book';
import { seedComments } from './comment';
const prisma = new PrismaClient();

async function truncateAllTable() {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  const tables = tablenames
    .map(({ tablename }) => tablename)
    .filter((name) => name !== '_prisma_migrations')
    .map((name) => `"public"."${name}"`)
    .join(', ');

  try {
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE ${tables} RESTART IDENTITY;`,
    );
  } catch (error) {
    console.log({ error });
  }
}

async function createSeedData() {
  await prisma.book.createMany({
    data: seedBooks,
  });
  await prisma.comment.createMany({
    data: seedComments.map((comment) => ({
      ...comment,
      bookId: +comment.bookId,
    })),
  });
}

async function main() {
  await truncateAllTable();
  await createSeedData();
}

main();
