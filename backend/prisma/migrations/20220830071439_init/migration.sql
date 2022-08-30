-- CreateTable
CREATE TABLE "advertisementGlobalVariables" (
    "advertisementGlobalVariableId" SERIAL NOT NULL,
    "nextAdvertisementToDisplay" INTEGER NOT NULL,

    CONSTRAINT "advertisementGlobalVariables_pkey" PRIMARY KEY ("advertisementGlobalVariableId")
);
