
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { nonAccentVietnamese } = require('../utils');

const SCV_FILE_LIMIT = process.env.SCV_FILE_LIMIT || '100MB';

function renameFileName (file) {
  let fileExtension = path.extname(file.originalname);
  let fileName = path.basename(file.originalname, fileExtension);
  fileName = nonAccentVietnamese(fileName);
  fileName = fileName.replace(/\s/gi, '-'); // eslint-disable-line no-useless-escape

  // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript?answertab=votes#tab-top
  fileName = fileName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  fileExtension = fileExtension.toLowerCase();

  return `${fileName.toLowerCase()}-${Date.now()}${fileExtension}`;
}

const csvFilter = (req, file, cb) => {
  const fileExtension = path.extname(file?.originalname);

  if (file?.mimetype.includes('csv') || fileExtension === '.csv') {
    cb(null, true);
  } else {
    cb('Please upload only csv file.', false);
  }
};

const localStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = __basedir + '/assets/upload/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, renameFileName(file));
  }
});

const uploadFile = multer({
  storage: localStorage,
  fileFilter: csvFilter,
  limits: { fileSize: SCV_FILE_LIMIT }
});

module.exports = {
  uploadFile,
  handleUploadSingle: uploadFile.single('file'),
};
