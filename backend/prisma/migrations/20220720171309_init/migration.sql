/*
  Warnings:

  - You are about to drop the `kser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "kser";

-- CreateTable
CREATE TABLE "user" (
    "userId" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "emailStatus" BOOLEAN NOT NULL DEFAULT false,
    "username" VARCHAR(64) NOT NULL,
    "joinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilePhoto" VARCHAR(256) NOT NULL DEFAULT '0',
    "password" VARCHAR(128) NOT NULL,
    "blockedStatus" BOOLEAN NOT NULL DEFAULT false,
    "blockedDate" TIMESTAMP(3),
    "blockedAdminID" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_blockedAdminID_fkey" FOREIGN KEY ("blockedAdminID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
