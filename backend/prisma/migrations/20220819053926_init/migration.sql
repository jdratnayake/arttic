-- AlterTable
ALTER TABLE "premiumPackageSubscribe" ADD COLUMN     "showAd" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "commentReport" (
    "commentReportId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reportedCommentId" INTEGER NOT NULL,
    "postReportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportCategory" INTEGER NOT NULL,
    "description" VARCHAR(512),
    "resolveStatus" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAdminID" INTEGER,

    CONSTRAINT "commentReport_pkey" PRIMARY KEY ("commentReportId")
);

-- AddForeignKey
ALTER TABLE "commentReport" ADD CONSTRAINT "commentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "followerCreator"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReport" ADD CONSTRAINT "commentReport_reportedCommentId_fkey" FOREIGN KEY ("reportedCommentId") REFERENCES "comment"("commentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReport" ADD CONSTRAINT "commentReport_resolvedAdminID_fkey" FOREIGN KEY ("resolvedAdminID") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
