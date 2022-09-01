const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, transactionLog, advertisement, userReport } = new PrismaClient();

const getDashboardDetails = asyncHandler(async (req, res) => {
  const round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  };

  const userCountList = [];
  const revenueList = [];
  const timeList = [];

  const chartDate = new Date();
  chartDate.setDate(chartDate.getDate() - 7);

  for (let i = 0; i < 7; i++) {
    chartDate.setDate(chartDate.getDate() + 1);
    timeList.push(chartDate.getMonth() + 1 + "/" + chartDate.getDate());

    const userCount = await user.aggregate({
      where: {
        AND: [
          {
            OR: [{ type: 3 }, { type: 4 }],
          },
          { joinedDate: { lt: chartDate } },
        ],
      },

      _count: {
        userId: true,
      },
    });

    const revenue = await transactionLog.aggregate({
      where: {
        transactionDate: { lt: chartDate },
      },

      _sum: {
        amount: true,
      },
    });

    userCountList.push(userCount["_count"]["userId"]);
    revenueList.push(revenue["_sum"]["amount"] || 0);
  }

  const creator = await user.aggregate({
    where: {
      type: 3,
    },
    _count: {
      userId: true,
    },
  });

  const follower = await user.aggregate({
    where: {
      type: 4,
    },
    _count: {
      userId: true,
    },
  });

  const creatorCount = creator["_count"]["userId"];
  const followerCount = follower["_count"]["userId"];

  const userDiversity = [
    round((creatorCount / (creatorCount + followerCount)) * 100, 1),
    round((followerCount / (creatorCount + followerCount)) * 100, 1),
  ];

  // Card data - START
  //   const today = new Date();
  const previousToday = new Date();
  previousToday.setDate(previousToday.getDate() - 7);
  //   console.log(today);
  //   console.log(yesterday);

  //   const previousToday = new Date();
  //   previousToday.setDate(previousToday.getDate() - 8);
  //   const previousYesterday = new Date();
  //   previousYesterday.setDate(previousYesterday.getDate() - 15);

  const newUserAccount = await user.aggregate({
    where: {
      OR: [{ type: 3 }, { type: 4 }],
    },

    _count: {
      userId: true,
    },
  });

  const newUserAccountPreviousWeek = await user.aggregate({
    where: {
      AND: [
        {
          OR: [{ type: 3 }, { type: 4 }],
        },

        { joinedDate: { lt: previousToday } },
      ],
    },

    _count: {
      userId: true,
    },
  });

  const newUserAccountCount = newUserAccount["_count"]["userId"];
  const newUserAccountPreviousWeekCount =
    newUserAccountPreviousWeek["_count"]["userId"];

  const newUserAccountDetails = [
    newUserAccountCount - newUserAccountPreviousWeekCount,
    round(
      ((newUserAccountCount - newUserAccountPreviousWeekCount) /
        (newUserAccountPreviousWeekCount || 1)) *
        100,
      2
    ),
  ];

  const newAdvertisement = await advertisement.aggregate({
    _count: {
      advertisementId: true,
    },
  });

  const newAdvertisementPreviousWeek = await advertisement.aggregate({
    where: {
      createdDate: { lt: previousToday },
    },

    _count: {
      advertisementId: true,
    },
  });

  const newAdvertisementCount = newAdvertisement["_count"]["advertisementId"];
  const newAdvertisementPreviousWeekCount =
    newAdvertisementPreviousWeek["_count"]["advertisementId"];

  const newAdvertisementDetails = [
    newAdvertisementCount - newAdvertisementPreviousWeekCount,
    round(
      ((newAdvertisementCount - newAdvertisementPreviousWeekCount) /
        (newAdvertisementPreviousWeekCount || 1)) *
        100,
      2
    ),
  ];

  const newSubscription = await transactionLog.aggregate({
    _count: {
      transactionId: true,
    },
  });

  const newSubscriptionPreviousWeek = await transactionLog.aggregate({
    where: {
      transactionDate: { lt: previousToday },
    },

    _count: {
      transactionId: true,
    },
  });

  const newSubscriptionCount = newSubscription["_count"]["transactionId"];
  const newSubscriptionPreviousWeekCount =
    newSubscriptionPreviousWeek["_count"]["transactionId"];

  const newSubscriptionDetails = [
    newSubscriptionCount - newSubscriptionPreviousWeekCount,
    round(
      ((newSubscriptionCount - newSubscriptionPreviousWeekCount) /
        (newSubscriptionPreviousWeekCount || 1)) *
        100,
      2
    ),
  ];

  const newUserComplaints = await userReport.aggregate({
    _count: {
      userReportedId: true,
    },
  });

  const newUserComplaintsPreviousWeek = await userReport.aggregate({
    where: {
      userReportedDate: { lt: previousToday },
    },

    _count: {
      userReportedId: true,
    },
  });

  const newUserComplaintsCount = newUserComplaints["_count"]["userReportedId"];
  const newUserComplaintsPreviousWeekCount =
    newUserComplaintsPreviousWeek["_count"]["userReportedId"];

  const newUserComplaintsDetails = [
    newUserComplaintsCount - newUserComplaintsPreviousWeekCount,
    round(
      ((newUserComplaintsCount - newUserComplaintsPreviousWeekCount) /
        (newUserComplaintsPreviousWeekCount || 1)) *
        100,
      2
    ),
  ];
  // Card data - END

  const outputData = {
    userCountList,
    revenueList,
    timeList,
    userDiversity,
    newUserAccountDetails,
    newAdvertisementDetails,
    newSubscriptionDetails,
    newUserComplaintsDetails,
  };

  res.json(outputData);
});

module.exports = {
  getDashboardDetails,
};
