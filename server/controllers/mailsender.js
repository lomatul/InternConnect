import nodemailer from 'nodemailer';


const Mailfunction = async (Name, email, otp) =>{
    try
    {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            host: "smtp.gmail.com",
            auth: {
                user: "zayed.hasan.14@gmail.com",
                pass:"bbbbccpqgkcporyk"
            }
        })
        await transporter.sendMail({
            from: "zayed.hasan.14@gmail.com",
            to: email,
            subject:  'Email Verification',
            text:`Hi ${Name}, Please, Click the following link to verify your email. And your OTP is '${otp}'`
            
        }, function(error, info){
            if(error){
                throw error
            }
            console.log("email send succsesfully inner")
            console.log(info)
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
