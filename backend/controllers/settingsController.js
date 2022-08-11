const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

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

  const newBillingAddress = await billingAddress.create({
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

module.exports = {
  getPurchaseHistory,
  registerBillingAddress,
  getBillingAddresses,
};
