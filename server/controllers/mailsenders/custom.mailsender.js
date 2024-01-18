import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const Mailfunction = async (sub, email, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'zayed.hasan.14@gmail.com',
        pass: process.env.mail_pass,
      },
    });

    try {
      await transporter.sendMail({
        from: 'zayed.hasan.14@gmail.com',
        to: email,
        subject: `${sub}`,
        text: `${text}`,
        html: `<p>${text}</p>`,
      });

      console.log('Email sent successfully');
    } catch (sendMailError) {
      console.log('Error sending email!');
      console.log(sendMailError.message);
      // Handle the error or log it as needed
    }
  } catch (transporterError) {
    console.log('Error creating transporter!');
    console.log(transporterError.message);
    // Handle the error or log it as needed
  }
};

export default Mailfunction;
