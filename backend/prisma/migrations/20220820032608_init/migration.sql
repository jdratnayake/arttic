-- CreateTable
CREATE TABLE "chatHistory" (
    "messageId" SERIAL NOT NULL,
    "chatId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "message" VARCHAR(1024) NOT NULL,
    "sendDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chatHistory_pkey" PRIMARY KEY ("messageId")
);
