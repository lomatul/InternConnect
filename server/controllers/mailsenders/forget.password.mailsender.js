import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendPasswordResetEmail = async (Name, email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'internconnect.swe@gmail.com', 
        pass: process.env.mail_pass,
      },
    });

    await transporter.sendMail({
      from: 'internconnect.swe@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Hi ${Name}, Your OTP is ${otp}`,
    });

    console.log('Password reset email sent successfully');

  } catch (error) {
    console.log('Email not sent!');
    console.log(error);
    return error;
  }
};

export default sendPasswordResetEmail;
