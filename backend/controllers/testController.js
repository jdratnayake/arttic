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

  const result =  await client.query(
    'SELECT post."postId","creatorId","description","imagevideo","publishedDate","reactCount","commentCount" FROM (SELECT "followerId" FROM "userSubscribe" WHERE "creatorId" = $1) AS subscribers INNER JOIN post ON subscribers."followerId" = post."creatorId";',
    [1]
  );

  res.json(result.rows);
  await client.end();
});

module.exports = {
  test,
};
