import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const Mailfunction = async (sub, email, text) =>{
    try
     {   //console.log("in mail sender", sub, email, text)
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
            subject: `${sub}`,
            text:`${text}`,
            html: `<p>${text}</p>`
            
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
