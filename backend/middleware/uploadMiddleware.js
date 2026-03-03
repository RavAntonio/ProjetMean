const multer = require("multer");

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Format d'image non supporté"));
  }
  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

module.exports = {
  upload
};
