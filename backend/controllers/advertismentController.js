const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, advertisement } = new PrismaClient();

const getAdvertismentTable = asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);

    const advertisementTable = await advertisement.findMany({
        where: {
            creatorId: userId,
        },
        // orderBy:{

        // },
    });

    res.json(advertisementTable);
});

const newAdvertisment = asyncHandler(async(req,res)=>{
    const userId = parseInt(req.params.id);

});

module.exports = { 
    getAdvertismentTable,
    newAdvertisment,
};