const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, advertisement } = new PrismaClient();

const getAdvertismentTable = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  const advertisementTable = await advertisement.findMany({
    where: {
      creatorId: userId,
    },
    // orderBy:{

    // },
  });

  res.json(advertisementTable);
});

const newAdvertisment = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  let { category, description, startDate, endDate, price } = req.body;
  category = parseInt(category);
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  price = parseInt(price).toFixed(2);
  const contentLink = req.file.filename;

  //   console.log(startDate);
  //   console.log(description);
  //   console.log(userId);
  //   console.log(req.headers);

  const newAdvertisement = await advertisement.create({
    data: {
      creatorId: userId,
      category,
      description,
      contentLink,
      startDate,
      endDate,
      price,
    },
  });

  res.json(newAdvertisement);
});

module.exports = {
  getAdvertismentTable,
  newAdvertisment,
};
