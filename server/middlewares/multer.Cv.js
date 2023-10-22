import multer from 'multer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tempDir = path.join(__dirname, '../Storage/Cv');
// console.log("dirname", tempDir)
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, tempDir);//"../Storage/Cv"
    },
    filename: function (req, file, cb) {
        const userID=req.params.student_id
        // console.log("userId",userID)
        const filename=userID+path.extname(file.originalname)
        console.log("filename", filename)
      cb(null, filename);
    },
  });

const Upload = multer({ storage: storage });

export default Upload;
