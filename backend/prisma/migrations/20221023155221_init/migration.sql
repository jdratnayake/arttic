-- CreateTable
CREATE TABLE "notification" (
    "notificationId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "notificationType" INTEGER NOT NULL,
    "message" VARCHAR(1024) NOT NULL,
    "readStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("notificationId")
);
