import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reportsDir = path.join(__dirname, '../Storage/Report');

// Ensure that the directory exists, create it if not
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, reportsDir);
  },
  filename: function (req, file, cb) {
    const studentID = req.params.student_id;
    const filename = `${studentID}_report${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const uploadInternshipReport = multer({ storage: storage });

export default uploadInternshipReport;
