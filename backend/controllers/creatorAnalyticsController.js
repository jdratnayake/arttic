const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const {
  user,
  transactionLog,
  advertisement,
  userReport,
  userSubscribe,
  post,
  postView,
} = new PrismaClient();

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

const getPostAnalytics = asyncHandler(async (req, res) => {
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

    const userCount = await post.aggregate({
      where: {
        AND: [
          {
            creatorId: userId,
          },
          { publishedDate: { lt: chartDate } },
        ],
      },

      _count: {
        postId: true,
      },
    });

    userCountList.push(userCount["_count"]["postId"]);
  }

  const newFollowers = await post.aggregate({
    where: {
      creatorId: userId,
    },

    _count: {
      postId: true,
    },
  });

  const newFollowersPreviousWeek = await post.aggregate({
    where: {
      AND: [
        {
          creatorId: userId,
        },

        { publishedDate: { lt: previousToday } },
      ],
    },

    _count: {
      postId: true,
    },
  });

  const newFollowersCount = newFollowers["_count"]["postId"];
  const newFollowersPreviousWeekCount =
    newFollowersPreviousWeek["_count"]["postId"];

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
    newPostDetails: newFollowersDetails,
    timeList,
    postCountList: userCountList,
  };

  res.json(outputData);
});

const getPostList = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const postDetails = await post.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      postId: true,
      publishedDate: true,
      imagevideo: true,
      description: true,
    },
  });

  res.json(postDetails);
});

const getSinglePostAnalytics = asyncHandler(async (req, res) => {
  const postId = parseInt(req.headers.postid);

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

    const userCount = await postView.aggregate({
      where: {
        AND: [
          {
            postId,
          },
          { postViewedDate: { lt: chartDate } },
        ],
      },

      _count: {
        postViewId: true,
      },
    });

    userCountList.push(userCount["_count"]["postViewId"]);
  }

  // End

  const outputData = {
    timeList,
    postCountList: userCountList,
  };

  res.json(outputData);
});

const getAdvertismentAnalytics = asyncHandler(async (req, res) => {
  res.json("Hi");
});

const getAdvertismentList = asyncHandler(async (req, res) => {
  res.json("Hi");
});

const getSingleAdvertismentAnalytics = asyncHandler(async (req, res) => {
  res.json("Hi");
});

module.exports = {
  getFollowerAnalytics,
  getPostAnalytics,
  getPostList,
  getSinglePostAnalytics,
  getAdvertismentAnalytics,
  getAdvertismentList,
  getSingleAdvertismentAnalytics,
};
