import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production' && !global.prisma) {
  prisma = new PrismaClient();
} else {
  prisma = global.prisma || new PrismaClient();
}

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
