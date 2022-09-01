const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, transactionLog, advertisement, userReport, userSubscribe } =
  new PrismaClient();

const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const getFollowerAnalytics = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const previousToday = new Date();
  previousToday.setDate(previousToday.getDate() - 7);

  // Start
  const timeList = [];
  const userCountList = [];
  const chartDate = new Date();
  chartDate.setDate(chartDate.getDate() - 7);

  for (let i = 0; i < 7; i++) {
    chartDate.setDate(chartDate.getDate() + 1);
    timeList.push(chartDate.getMonth() + 1 + "/" + chartDate.getDate());

    const userCount = await userSubscribe.aggregate({
      where: {
        AND: [
          {
            creatorId: userId,
          },
          { subscribedDate: { lt: chartDate } },
        ],
      },

      _count: {
        userSubscribeId: true,
      },
    });

    userCountList.push(userCount["_count"]["userSubscribeId"]);
  }

  const newFollowers = await userSubscribe.aggregate({
    where: {
      creatorId: userId,
    },

    _count: {
      userSubscribeId: true,
    },
  });

  const newFollowersPreviousWeek = await userSubscribe.aggregate({
    where: {
      AND: [
        {
          creatorId: userId,
        },

        { subscribedDate: { lt: previousToday } },
      ],
    },

    _count: {
      userSubscribeId: true,
    },
  });

  const newFollowersCount = newFollowers["_count"]["userSubscribeId"];
  const newFollowersPreviousWeekCount =
    newFollowersPreviousWeek["_count"]["userSubscribeId"];

  const newFollowersDetails = [
    newFollowersCount,
    round(
      ((newFollowersCount - newFollowersPreviousWeekCount) /
        (newFollowersPreviousWeekCount || 1)) *
        100,
      2
    ),
  ];
  // End

  const outputData = {
    newFollowersDetails,
    timeList,
    followerCountList: userCountList,
  };

  res.json(outputData);
});

module.exports = {
  getFollowerAnalytics,
};
