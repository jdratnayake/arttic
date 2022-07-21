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

-- CreateTable
CREATE TABLE "followerCreator" (
    "userId" INTEGER NOT NULL,
    "coverPhoto" VARCHAR(256) NOT NULL DEFAULT '0',
    "blockedStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "followerCreator_pkey" PRIMARY KEY ("userId")
);

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
CREATE TABLE "userBlock" (
    "userBlockId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userBlockedId" INTEGER NOT NULL,
    "userBlockedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userBlock_pkey" PRIMARY KEY ("userBlockId")
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
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
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

-- CreateTable
CREATE TABLE "post" (
    "postId" SERIAL NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "description" VARCHAR(512),
    "imagevideo" VARCHAR(256) DEFAULT '0',
    "publishedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reactCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "blockedStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "postSave" (
    "postSaveId" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "postSavedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postSave_pkey" PRIMARY KEY ("postSaveId")
);

-- CreateTable
CREATE TABLE "postReaction" (
    "postReactionId" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "reactType" INTEGER NOT NULL DEFAULT 1,
    "reacteddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postReaction_pkey" PRIMARY KEY ("postReactionId")
);

-- CreateTable
CREATE TABLE "comment" (
    "commentId" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" VARCHAR(512) NOT NULL,
    "commentedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "commentReaction" (
    "commentReactionId" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "commentReactedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commentReaction_pkey" PRIMARY KEY ("commentReactionId")
);

-- CreateTable
CREATE TABLE "advertisement" (
    "advertisementId" SERIAL NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "category" INTEGER NOT NULL,
    "description" VARCHAR(256),
    "contentLink" VARCHAR(256) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(3,2) NOT NULL,
    "blockedStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "advertisement_pkey" PRIMARY KEY ("advertisementId")
);

-- CreateTable
CREATE TABLE "creatorView" (
    "creatorProfileViewID" SERIAL NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "followerCreatorId" INTEGER NOT NULL,
    "creatorViewedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "creatorView_pkey" PRIMARY KEY ("creatorProfileViewID")
);

-- CreateTable
CREATE TABLE "postView" (
    "postViewId" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "followerCreatorId" INTEGER NOT NULL,
    "postViewedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postView_pkey" PRIMARY KEY ("postViewId")
);

-- CreateTable
CREATE TABLE "advertisementView" (
    "advertisementViewId" SERIAL NOT NULL,
    "advertisementId" INTEGER NOT NULL,
    "followerCreatorId" INTEGER NOT NULL,
    "advertisementViewedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "advertisementView_pkey" PRIMARY KEY ("advertisementViewId")
);

-- CreateTable
CREATE TABLE "userReport" (
    "userReportedId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reportedUserId" INTEGER NOT NULL,
    "userReportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportCategory" INTEGER NOT NULL,
    "description" VARCHAR(512),
    "resolveStatus" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAdminID" INTEGER,

    CONSTRAINT "userReport_pkey" PRIMARY KEY ("userReportedId")
);

-- CreateTable
CREATE TABLE "postReport" (
    "postReportId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reportedPostId" INTEGER NOT NULL,
    "postReportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportCategory" INTEGER NOT NULL,
    "description" VARCHAR(512),
    "resolveStatus" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAdminID" INTEGER,

    CONSTRAINT "postReport_pkey" PRIMARY KEY ("postReportId")
);

-- CreateTable
CREATE TABLE "advertisementReport" (
    "advertisementReportId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "advertisementId" INTEGER NOT NULL,
    "postReportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportCategory" INTEGER NOT NULL,
    "description" VARCHAR(512),
    "resolveStatus" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAdminID" INTEGER,

    CONSTRAINT "advertisementReport_pkey" PRIMARY KEY ("advertisementReportId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "creator_pageName_key" ON "creator"("pageName");

-- CreateIndex
CREATE UNIQUE INDEX "creator_walletAddress_key" ON "creator"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "creator_openSeaUsername_key" ON "creator"("openSeaUsername");

-- CreateIndex
CREATE UNIQUE INDEX "userBlock_userId_userBlockedId_key" ON "userBlock"("userId", "userBlockedId");

-- CreateIndex
CREATE UNIQUE INDEX "premiumPackage_name_key" ON "premiumPackage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userSubscribe_followerId_creatorId_key" ON "userSubscribe"("followerId", "creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "postSave_postId_userId_key" ON "postSave"("postId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "postReaction_postId_userId_key" ON "postReaction"("postId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "commentReaction_commentId_userId_key" ON "commentReaction"("commentId", "userId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_blockedAdminID_fkey" FOREIGN KEY ("blockedAdminID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followerCreator" ADD CONSTRAINT "followerCreator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creator" ADD CONSTRAINT "creator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userBlock" ADD CONSTRAINT "userBlock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userBlock" ADD CONSTRAINT "userBlock_userBlockedId_fkey" FOREIGN KEY ("userBlockedId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billingAddressFollowerCreator" ADD CONSTRAINT "billingAddressFollowerCreator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premiumPackageSubscribe" ADD CONSTRAINT "premiumPackageSubscribe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premiumPackageSubscribe" ADD CONSTRAINT "premiumPackageSubscribe_packageID_fkey" FOREIGN KEY ("packageID") REFERENCES "premiumPackage"("packageID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSubscribe" ADD CONSTRAINT "userSubscribe_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSubscribe" ADD CONSTRAINT "userSubscribe_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postSave" ADD CONSTRAINT "postSave_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postSave" ADD CONSTRAINT "postSave_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReaction" ADD CONSTRAINT "postReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReaction" ADD CONSTRAINT "postReaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReaction" ADD CONSTRAINT "commentReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReaction" ADD CONSTRAINT "commentReaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comment"("commentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisement" ADD CONSTRAINT "advertisement_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creatorView" ADD CONSTRAINT "creatorView_followerCreatorId_fkey" FOREIGN KEY ("followerCreatorId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creatorView" ADD CONSTRAINT "creatorView_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postView" ADD CONSTRAINT "postView_followerCreatorId_fkey" FOREIGN KEY ("followerCreatorId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postView" ADD CONSTRAINT "postView_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisementView" ADD CONSTRAINT "advertisementView_followerCreatorId_fkey" FOREIGN KEY ("followerCreatorId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisementView" ADD CONSTRAINT "advertisementView_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "advertisement"("advertisementId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userReport" ADD CONSTRAINT "userReport_resolvedAdminID_fkey" FOREIGN KEY ("resolvedAdminID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userReport" ADD CONSTRAINT "userReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userReport" ADD CONSTRAINT "userReport_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_resolvedAdminID_fkey" FOREIGN KEY ("resolvedAdminID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postReport" ADD CONSTRAINT "postReport_reportedPostId_fkey" FOREIGN KEY ("reportedPostId") REFERENCES "post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisementReport" ADD CONSTRAINT "advertisementReport_resolvedAdminID_fkey" FOREIGN KEY ("resolvedAdminID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisementReport" ADD CONSTRAINT "advertisementReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisementReport" ADD CONSTRAINT "advertisementReport_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "advertisement"("advertisementId") ON DELETE RESTRICT ON UPDATE CASCADE;
