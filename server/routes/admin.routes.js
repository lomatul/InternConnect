import express from 'express';
import { postlogin, logout, register, sendmailtoall,sendmailtoindividual, getMatchedStudentForCompany,sendCvsToCompany, postGuideline, postReportMarks} from '../controllers/admin.controller.js';
import upload from '../middlewares/multer.js';
import { ulpoadfiledata, ulpoadCompanydata } from '../controllers/filecontroller.js';



const router = express.Router();

router.post('/postlogin', postlogin)
router.get("/logout", logout);
router.post("/register", register)
router.post('/uploadfile', upload.single('file'), ulpoadfiledata)
router.post('/uploadcompanyfile', upload.single('file'), ulpoadCompanydata)
router.post('/sendtoall', sendmailtoall)
router.post('/sendtoone', sendmailtoindividual)

//testing 
router.post('/getMatchedStudents', getMatchedStudentForCompany)
router.post('/sendcvtocompany', sendCvsToCompany)
router.post('/uploadGuideline', postGuideline)

router.post('/postReportMarks/:student_id', postReportMarks);

export default router;