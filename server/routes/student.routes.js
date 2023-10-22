import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  loginStudent,
  updatePasswordById,
  postlogin,
  logout,
  sendOTPForPasswordReset,
  resetPasswordWithOTP,
  uploadcvfile,
  getcvfile
} from '../controllers/student.controller.js';
import Upload from '../middlewares/multer.Cv.js'; 


const router = express.Router();

router.post('/createStudent', createStudent);

router.get('/students', getAllStudents);

router.get('/getStudent/:student_id ', getStudentById);

router.patch('/updateStudent/:student_id', updateStudentById);

router.delete('/deleteStudent/:student_id ', deleteStudentById);


router.post('/login', loginStudent);

router.post('/postlogin', postlogin)

router.post('/updatePassword/:student_id', updatePasswordById);

router.get("/logout", logout);

router.post("/forgetPassword", sendOTPForPasswordReset);

router.post("/resetPassword/:student_id", resetPasswordWithOTP);


router.post('/uploadCV/:student_id', Upload.single('file'), uploadcvfile);

router.get('/getcv/:student_id', getcvfile)


export default router;