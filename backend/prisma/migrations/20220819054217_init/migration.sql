/*
  Warnings:

  - You are about to drop the column `postReportedDate` on the `commentReport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "commentReport" DROP COLUMN "postReportedDate",
ADD COLUMN     "commentReportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
