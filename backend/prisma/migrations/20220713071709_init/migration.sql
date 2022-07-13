-- CreateTable
CREATE TABLE "user" (
    "userId" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "accountStatus" INTEGER NOT NULL,
    "joinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilePhoto" VARCHAR(255) NOT NULL,
    "password" VARCHAR(72) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);
