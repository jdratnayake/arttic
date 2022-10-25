const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

const { user, advertisement, transactionLog, creator } = new PrismaClient();

const getAdvertismentTable = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  const advertisementTable = await advertisement.findMany({
    where: {
      creatorId: userId,
    },
    orderBy: {
      createdDate: "desc",
    },
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

const deleteAdvertisment = asyncHandler(async (req, res) => {
  const advertismentId = parseInt(req.headers.advertismentid);

  const deleteAdvertisment = await advertisement.delete({
    where: {
      advertisementId: advertismentId,
    },
  });

  if (deleteAdvertisment) {
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

const payment = asyncHandler(async (req, res) => {
  const writeLog = async (userId, stripeId, advertisementId, price) => {
    const transaction = await transactionLog.create({
      data: {
        userId,
        transactionType: 1,
        stripeId,
        amount: price,
      },
    });

    const updateAdvertisement = await advertisement.update({
      where: {
        advertisementId,
      },
      data: {
        paymentStatus: true,
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
  };

  const { userId, advertisementId, price, token } = req.body;
  const idempontencyKey = uuidv4();
  // console.log("Hi");

  // console.log(userId);
  // console.log(token);
  // console.log(premiumStatus);
  // console.log(typeof premiumStatus);

  await stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      return stripe.charges.create(
        {
          amount: price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "Premium package subscribed.",
        },
        { idempotencyKey: idempontencyKey }
      );
      // console.log(temp);
      // console.log(customer.id);
    })
    .then((result) => {
      // console.log(result);

      writeLog(userId, result.id, advertisementId, price);
    })
    .catch((error) => console.error(error));

  // res.json("address");
});

const cryptoPaymentSubscription = asyncHandler(async (req, res) => {
  const { userId, advertisementId, price } = req.body;

  const transaction = await transactionLog.create({
    data: {
      userId,
      transactionType: 1,
      amount: price,
    },
  });

  const updateAdvertisement = await advertisement.update({
    where: {
      advertisementId,
    },
    data: {
      paymentStatus: true,
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

const getAdvertismentDiscountRate = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const user = await creator.findUnique({
    where: {
      userId,
    },
  });

  const followerCount = user.followerCount;

  let discountRate = 1;

  if (followerCount > 10000) {
    discountRate = 0.5;
  } else if (followerCount > 5000) {
    discountRate = 0.75;
  } else if (followerCount > 1000) {
    discountRate = 0.875;
  }

  res.json({
    discountRate,
  });
});

module.exports = {
  getAdvertismentTable,
  newAdvertisment,
  deleteAdvertisment,
  payment,
  cryptoPaymentSubscription,
  getAdvertismentDiscountRate,
};
