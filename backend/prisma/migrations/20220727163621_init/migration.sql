/*
  Warnings:

  - The `openSeaStatus` column on the `creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "creator" DROP COLUMN "openSeaStatus",
ADD COLUMN     "openSeaStatus" INTEGER NOT NULL DEFAULT 0;
