import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendPasswordResetEmail = async (Name, email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'zayed.hasan.14@gmail.com', // Update with your Gmail email address
        pass: process.env.mail_pass, // Update with your Gmail password or create an app-specific password
      },
    });

    await transporter.sendMail({
      from: 'zayed.hasan.14@gmail.com', // Update with your Gmail email address
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