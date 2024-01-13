import express from 'express';
import { postlogin, logout, register, sendmailtoall,sendmailtoindividual, getMatchedStudentForCompany,sendCvsToCompany, postGuideline, sendMentorsForm, postReportMarks,
    postCvdeadline,
    getCvdeadline,
    getGradeExcel,
    postReportdeadline,
    getReportdeadline, 
    postMarks
} from '../controllers/admin.controller.js';
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
router.post('/postCvdeadline', postCvdeadline);
router.get("/getCvdeadline", getCvdeadline);
router.post('/postReportdeadline', postReportdeadline);
router.get("/getReportdeadline", getReportdeadline);
router.get("/getGradeExcel", getGradeExcel);

//testing 
router.post('/getMatchedStudents', getMatchedStudentForCompany)
router.post('/sendcvtocompany', sendCvsToCompany)
router.post('/uploadGuideline', postGuideline)
router.get('/sendFroms', sendMentorsForm)
router.post('/postMarks/:student_id', postMarks);

export default router;