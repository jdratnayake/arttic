const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, advertisement } = new PrismaClient();

const getAdvertisments = asyncHandler(async (req, res) => {
  const today = new Date();

  const advertisementList = await advertisement.findMany({
    orderBy: {
      createdDate: "desc",
    },
  });

  const requestAdvertisement = await advertisement.aggregate({
    where: {
      AND: [{ verifyStatus: false }, { endDate: { gte: today } }],
    },

    _count: {
      advertisementId: true,
    },
  });

  const activeAdvertisement = await advertisement.aggregate({
    where: {
      AND: [
        { verifyStatus: true },
        { paymentStatus: true },
        { endDate: { gte: today } },
      ],
    },

    _count: {
      advertisementId: true,
    },
  });

  const oldAdvertisement = await advertisement.aggregate({
    where: {
      endDate: { lt: today },
    },

    _count: {
      advertisementId: true,
    },
  });

  const requestAdvertisementCount =
    parseInt(requestAdvertisement["_count"]["advertisementId"]) || 0;
  const activeAdvertisementCount =
    parseInt(activeAdvertisement["_count"]["advertisementId"]) || 0;
  const oldAdvertisementCount =
    parseInt(oldAdvertisement["_count"]["advertisementId"]) || 0;

  const outputData = {
    advertisementList,
    requestAdvertisementCount,
    activeAdvertisementCount,
    oldAdvertisementCount,
  };

  res.json(outputData);
});

const verifyAdvertisement = asyncHandler(async (req, res) => {
  const advertismentId = parseInt(req.headers.advertismentid);

  const updateAdvertisement = await advertisement.update({
    where: {
      advertisementId: advertismentId,
    },
    data: {
      verifyStatus: true,
    },
  });

  if (updateAdvertisement) {
    res.json({
      statusCode: 1,
      msg: "Successful",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Unsuccessful",
    });
  }
});

module.exports = {
  getAdvertisments,
  verifyAdvertisement,
};
