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
                user: 'internconnect.swe@gmail.com',
                pass:process.env.mail_pass
            }
        })
        try{
            await transporter.sendMail({
                from: 'internconnect.swe@gmail.com',
                to: email,
                subject:  'Email Verification',
                text:`Hi ${Name}, Please, Click the following link to Login using your OTP. And update the password to activate your account. And your OTP is '${otp}'`,
                html: `<p>Hi ${Name},</p><p>Please click the following link to login using your OTP. And update the password to activate your account. Your OTP is '${otp}'</p><a href="${FRONTEND_URL}/login">Login</a>`
                
            })
            console.log("email send succsesfully")
        }catch (sendMailError) {
            console.log('Error sending email!');
            console.log(sendMailError.message);
            // Handle the error or log it as needed
        }
        

    }catch(error)
    {
        console.log("email not sent!");
		console.log(error);

    }
}

export default Mailfunction;
