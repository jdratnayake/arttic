const { Client } = require("pg");
const asyncHandler = require("express-async-handler");

const test = asyncHandler(async (req, res) => {
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

  const result = await client.query({
    text: 'SELECT * FROM "transactionLog"',
  });

  res.json(result.rows);
  await client.end();
});

module.exports = {
  test,
};
