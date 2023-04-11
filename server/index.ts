import { PrismaClient, Question_type } from "@prisma/client";

const client = new PrismaClient();

console.log(Question_type.ADDRESS);
