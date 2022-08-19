const multer = require("multer");
const path = require("path");

// 1 = profile picture
// 2 = cover picture
// 3 = post image
// 5 = advertisment picture

// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFileType = req.headers.uploadfiletype;

    if (uploadFileType === "1") {
      cb(null, "./assets/profilePic");
    } else if (uploadFileType === "2") {
      cb(null, "./assets/coverPic");
    }  else if (uploadFileType === "3") {
      cb(null, "./assets/postPic");
    }
    else if (uploadFileType === "5") {
      cb(null, "./assets/advertismentPic");
    }
  },
  filename: (req, file, cb) => {
    const uploadFileType = req.headers.uploadfiletype;

    if (uploadFileType === "1" || uploadFileType === "2" || uploadFileType === "5") {
      const userId = req.headers.userid;
      cb(null, userId + path.extname(file.originalname));
    }else if( uploadFileType === "3" ){
      cb(null, Date.now() + path.extname(file.originalname));
    }
  },
});

// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// You can create multiple middleware each with a different storage engine config so save different files in different locations on server
const upload = multer({ storage: fileStorageEngine });

module.exports = { upload };
