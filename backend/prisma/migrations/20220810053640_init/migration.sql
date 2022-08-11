-- AlterTable
ALTER TABLE "user" ADD COLUMN     "emailVerificationOtp" VARCHAR(5),
ADD COLUMN     "forgotPasswordOtp" VARCHAR(5);
