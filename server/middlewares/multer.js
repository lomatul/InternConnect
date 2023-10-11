import multer from 'multer';
import express from 'express';

// const fs = require('fs');
// const path = require('path');


// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, tempDir);
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });

// const upload = multer({ storage: storage });
const upload = multer();
export default upload;
