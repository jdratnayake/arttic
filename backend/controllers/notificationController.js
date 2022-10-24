//controller
const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, notification } = new PrismaClient();

const getNotifications = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const notificationList = await notification.findMany({
    where: {
      AND: [
        {
          userId,
        },
        { readStatus: false },
      ],
    },
  });

  const updateNotificationList = await notification.updateMany({
    where: {
      AND: [
        {
          userId,
        },
        { readStatus: false },
      ],
    },
    data: {
      readStatus: true,
    },
  });

  //   const unreadNotificationCount = notificationList.length;

  res.json(notificationList);
});

const getUnreadNotificationCount = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const notificationList = await notification.aggregate({
    where: {
      AND: [
        {
          userId,
        },
        { readStatus: false },
      ],
    },

    _count: {
      notificationId: true,
    },
  });

  const unreadCount = notificationList["_count"]["notificationId"];

  res.json(unreadCount);
});

module.exports = {
  getNotifications,
  getUnreadNotificationCount,
};
