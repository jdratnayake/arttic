-- CreateTable
CREATE TABLE "followerCreator" (
    "userId" INTEGER NOT NULL,
    "coverPhoto" VARCHAR(256) NOT NULL DEFAULT '0',
    "blockedStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "followerCreator_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "followerCreator" ADD CONSTRAINT "followerCreator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
