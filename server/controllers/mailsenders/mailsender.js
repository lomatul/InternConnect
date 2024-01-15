import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL

const Mailfunction = async (Name, email, otp) =>{
    try
    {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            host: "smtp.gmail.com",
            auth: {
                user: "internconnect.swe@gmail.com",
                pass:process.env.mail_pass
            }
        })
        await transporter.sendMail({
            from: "internconnect.swe@gmail.com",
            to: email,
            subject:  'Email Verification',
            text:`Hi ${Name}, Please, Click the following link to Login using your OTP. And update the password to activate your account. And your OTP is '${otp}'`,
            html: `<p>Hi ${Name},</p><p>Please click the following link to login using your OTP. And update the password to activate your account. Your OTP is '${otp}'</p><a href="${FRONTEND_URL}/login">Login</a>`
            
        }, function(error, info){
            if(error){
                throw error
            }
            console.log("email send succsesfully inner")
            // console.log(info)
        })
        console.log("email send succsesfully")

    }catch(error)
    {
        console.log("email not sent!");
		console.log(error);
		return error;
    }
}

export default Mailfunction;
