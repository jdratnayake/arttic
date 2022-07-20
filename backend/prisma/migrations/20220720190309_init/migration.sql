-- CreateTable
CREATE TABLE "creator" (
    "userId" INTEGER NOT NULL,
    "pageName" VARCHAR(64) NOT NULL,
    "description" VARCHAR(512),
    "creatorJoinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "walletAddress" VARCHAR(64),
    "openSeaUsername" VARCHAR(64),
    "followerCount" INTEGER NOT NULL DEFAULT 0,
    "isfollowerCountVisible" BOOLEAN NOT NULL DEFAULT true,
    "loyaltyCategory" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "creator_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "billingAddressFollowerCreator" (
    "billingId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "country" VARCHAR(32) NOT NULL,
    "addressLine1" VARCHAR(64) NOT NULL,
    "addressLine2" VARCHAR(64) NOT NULL,
    "city" VARCHAR(32) NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    "zipCode" VARCHAR(16) NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "billingAddressFollowerCreator_pkey" PRIMARY KEY ("billingId")
);

-- CreateTable
CREATE TABLE "premiumPackage" (
    "packageID" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "price" DECIMAL(3,2) NOT NULL,

    CONSTRAINT "premiumPackage_pkey" PRIMARY KEY ("packageID")
);

-- CreateTable
CREATE TABLE "premiumPackageSubscribe" (
    "subscribeId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "packageID" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "premiumPackageSubscribe_pkey" PRIMARY KEY ("subscribeId")
);

-- CreateTable
CREATE TABLE "userSubscribe" (
    "userSubscribeId" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "subscribedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userSubscribe_pkey" PRIMARY KEY ("userSubscribeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "creator_pageName_key" ON "creator"("pageName");

-- CreateIndex
CREATE UNIQUE INDEX "creator_walletAddress_key" ON "creator"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "creator_openSeaUsername_key" ON "creator"("openSeaUsername");

-- CreateIndex
CREATE UNIQUE INDEX "premiumPackage_name_key" ON "premiumPackage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "premiumPackageSubscribe_userId_packageID_key" ON "premiumPackageSubscribe"("userId", "packageID");

-- CreateIndex
CREATE UNIQUE INDEX "userSubscribe_followerId_creatorId_key" ON "userSubscribe"("followerId", "creatorId");

-- AddForeignKey
ALTER TABLE "creator" ADD CONSTRAINT "creator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billingAddressFollowerCreator" ADD CONSTRAINT "billingAddressFollowerCreator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premiumPackageSubscribe" ADD CONSTRAINT "premiumPackageSubscribe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premiumPackageSubscribe" ADD CONSTRAINT "premiumPackageSubscribe_packageID_fkey" FOREIGN KEY ("packageID") REFERENCES "premiumPackage"("packageID") ON DELETE RESTRICT ON UPDATE CASCADE;
