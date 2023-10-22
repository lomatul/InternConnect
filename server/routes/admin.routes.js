import express from 'express';
import { postlogin, logout, register} from '../controllers/admin.controller.js';
import upload from '../middlewares/multer.js';
import { ulpoadfiledata } from '../controllers/filecontroller.js';


const router = express.Router();

router.post('/postlogin', postlogin)
router.get("/logout", logout);
router.post("/register", register)
router.post('/uploadfile', upload.single('file'), ulpoadfiledata)


export default router;