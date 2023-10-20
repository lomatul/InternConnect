import express from 'express';
import { postlogin, logout, register} from '../controllers/admin.controller.js';


const router = express.Router();

router.post('/postlogin', postlogin)
router.get("/logout", logout);
router.post("/register", register)

export default router;