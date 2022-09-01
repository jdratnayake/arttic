/*
  Warnings:

  - You are about to drop the column `otherTableUniqueId` on the `transactionLog` table. All the data in the column will be lost.
  - Added the required column `stripeId` to the `transactionLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactionLog" DROP COLUMN "otherTableUniqueId",
ADD COLUMN     "stripeId" VARCHAR(64) NOT NULL;
