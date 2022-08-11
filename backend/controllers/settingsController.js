const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { transactionLog } = new PrismaClient();

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

module.exports = {
  getPurchaseHistory,
};
