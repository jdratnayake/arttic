const { PrismaClient } = require("@prisma/client");
const { Client } = require("pg");
const asyncHandler = require("express-async-handler");

const { user, transactionLog, billingAddress } = new PrismaClient();

const getChatHistory = asyncHandler(async (req, res) => {
  const chatId = parseInt(req.params.id);

  const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  const result = await client.query(
    'SELECT "messageId", "chatId", "senderId", "message", "sendDate", "profilePhoto" FROM "chatHistory" INNER JOIN "user" ON "user"."userId"="chatHistory"."senderId" WHERE "chatId"=$1',
    [chatId]
  );

  res.json(result.rows);
});

module.exports = {
  getChatHistory,
};
