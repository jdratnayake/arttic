const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

const { user, transactionLog, billingAddress } = new PrismaClient();

const getPurchaseHistory = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  const history = await transactionLog.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      transactionDate: "desc",
    },
  });
  //
  const newHistory = history.map((item) => {
    const newItem = {
      ...item,
      transactionDate: item.transactionDate.toLocaleDateString(),
    };
    return newItem;
  });

  // console.log(history);

  // const convertedDate = history.transactionDate.toString("YYYY-MM-dd");
  // console.log(convertedDate);
  res.json(newHistory);
});

const registerBillingAddress = asyncHandler(async (req, res) => {
  const { userId, country, addressLine1, addressLine2, city, state, zipCode } =
    req.body;

  let { isDefault } = req.body;

  // check there exist any address, if not this one will be default address
  const addressStatus = await billingAddress.findFirst({
    where: {
      userId,
    },
  });

  if (!addressStatus) {
    isDefault = true;
  }

  if (isDefault) {
    await billingAddress.updateMany({
      where: {
        userId,
      },
      data: {
        isDefault: false,
      },
    });
  }

  let newBillingAddress = await billingAddress.create({
    data: {
      userId,
      country,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      isDefault,
    },
  });

  const existUser = await user.findUnique({
    where: {
      userId,
    },
    select: {
      email: true,
      phone: true,
    },
  });

  newBillingAddress = {
    ...newBillingAddress,
    email: existUser.email,
    phone: existUser.phone,
  };

  res.json(newBillingAddress);
});

const getBillingAddresses = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  let address = await billingAddress.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      isDefault: "desc",
    },
  });

  const existUser = await user.findUnique({
    where: {
      userId,
    },
    select: {
      email: true,
      phone: true,
    },
  });

  address = address.map((item) => {
    const newItem = { ...item, email: existUser.email, phone: existUser.phone };
    return newItem;
  });

  res.json(address);
});

const payment = asyncHandler(async (req, res) => {
  const { userId, token } = req.body;
  const idempontencyKey = uuidv4();

  // console.log(userId);

  await stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      return stripe.charges.create(
        {
          amount: 5 * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "test 123",
        },
        { idempotencyKey: idempontencyKey }
      );
      // console.log(temp);
      // console.log(customer.id);
    })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((error) => console.error(error));

  // res.json("address");
});

module.exports = {
  getPurchaseHistory,
  registerBillingAddress,
  getBillingAddresses,
  payment,
};
