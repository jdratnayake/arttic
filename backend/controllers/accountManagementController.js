const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const bycrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");

const { user, followerCreator } = new PrismaClient();

const { generateOtp, otpEmail } = require("./helpers/accountManagementHelper");

const initial = asyncHandler(async (req, res) => {
  //   Admin1 details
  const admin1 = await user.findMany({
    orderBy: [
      {
        userId: "desc",
      },
    ],
    where: {
      type: 2,
    },
    select: {
      userId: true,
      name: true,
      email: true,
      joinedDate: true,
      profilePhoto: true,
      blockedStatus: true,
    },
  });

  const filterDate = new Date();
  filterDate.setDate(filterDate.getDate() - 14);

  const blockedUsers = await user.findMany({
    orderBy: [
      {
        blockedDate: "desc",
      },
    ],
    where: {
      AND: [
        {
          OR: [{ type: 3 }, { type: 4 }],
        },
        { blockedStatus: true },
        { blockedDate: { gt: filterDate } },
      ],
    },
    select: {
      userId: true,
      type: true,
      name: true,
      email: true,
      joinedDate: true,
      profilePhoto: true,
      blockedStatus: true,
    },
  });

  const adminCount = await user.aggregate({
    where: {
      type: 2,
    },
    _count: {
      userId: true,
    },
  });

  const creatorCount = await user.aggregate({
    where: {
      type: 3,
    },
    _count: {
      userId: true,
    },
  });

  const followerCount = await user.aggregate({
    where: {
      type: 4,
    },
    _count: {
      userId: true,
    },
  });

  // Creator growth chart - START
  const creatorCountList = [];
  const followerCountList = [];
  const timeList = [];

  const chartDate = new Date();
  chartDate.setDate(chartDate.getDate() - 7);

  for (let i = 0; i < 7; i++) {
    chartDate.setDate(chartDate.getDate() + 1);
    timeList.push(chartDate.getMonth() + 1 + "/" + chartDate.getDate());

    const creatorCount = await user.aggregate({
      where: {
        AND: [
          {
            type: 3,
          },

          { joinedDate: { lt: chartDate } },
        ],
      },
      _count: {
        userId: true,
      },
    });

    const followerCount = await user.aggregate({
      where: {
        AND: [
          {
            type: 4,
          },

          { joinedDate: { lt: chartDate } },
        ],
      },
      _count: {
        userId: true,
      },
    });

    creatorCountList.push(creatorCount["_count"]["userId"]);
    followerCountList.push(followerCount["_count"]["userId"]);
  }

  // Creator growth chart - END

  const outputData = {
    adminCount: adminCount["_count"]["userId"],
    creatorCount: creatorCount["_count"]["userId"],
    followerCount: followerCount["_count"]["userId"],
    blockedUsers: blockedUsers,
    admin1: admin1,
    creatorCountList,
    followerCountList,
    timeList,
  };
  res.json(outputData);
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userType = 2;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });

  if (emailStatus) {
    res.json({ error: "Email Already Registered! Please Login" });
  } else {
    bycrypt.hash(password, 10).then(async (hash) => {
      // add data to the user table
      const newAdmin = await user.create({
        data: {
          type: userType,
          name,
          email,
          username: email,
          password: hash,
        },
      });

      //email - START
      const htmlEmail = otpEmail(name, email, password);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
          user: "alec.software.cooperation@gmail.com",
          pass: "lbwzzqktlqaicniu",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "alec.software.cooperation@gmail.com",
        to: email,
        replyTo: email,
        subject: "Admin account creation - ARTTIC",
        html: htmlEmail,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("error in sending mail", err);
          return res.status(400).json({
            message: `error in sending the mail${err}`,
          });
        }
      });
      //email test - END

      res.status(StatusCodes.CREATED).json(newAdmin);
    });
  }
});

module.exports = {
  initial,
  registerAdmin,
};
