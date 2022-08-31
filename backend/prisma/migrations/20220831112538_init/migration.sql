-- AlterTable
ALTER TABLE "user" ADD COLUMN     "premiumPackageEndDate" TIMESTAMP(3),
ADD COLUMN     "premiumPackageStartDate" TIMESTAMP(3),
ADD COLUMN     "premiumUser" BOOLEAN NOT NULL DEFAULT false;
