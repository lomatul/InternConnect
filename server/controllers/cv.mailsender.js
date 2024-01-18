import nodemailer from 'nodemailer';
import AdmZip from 'adm-zip';
import fs from 'fs';
import dotenv from "dotenv";

const sendCVsEmail = async (cvFileNames, recipientEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "zayed.hasan.14@gmail.com",
        pass: process.env.mail_pass  
      },
    });

    const zip = new AdmZip();
    const tempDir = 'temp';
    const zipFile = 'cv.zip';

    const cvDirectory = 'Storage/Cv'; 

    for (const cvFileName of cvFileNames) {
      const cvPath = `${cvDirectory}/${cvFileName}`;

      if (fs.existsSync(cvPath)) {
        zip.addLocalFile(cvPath);
      } else {
        console.error(`CV file '${cvFileName}' not found.`);
      }
    }

    zip.writeZip(zipFile);

    await transporter.sendMail({
      from: 'zayed.hasan.14@gmail.com',
      to: recipientEmail,
      subject: 'CVs for internship',
      text: "Please find the CVs attached for this year's internship.",
      attachments: [
        {
          filename: 'cv.zip',
          path: zipFile,
        },
      ],
    });

    fs.unlinkSync(zipFile);

    console.log('CVs sent successfully as email attachments');
  } catch (error) {
    console.error('Error sending CVs as email attachments:', error);
  }
};

export default sendCVsEmail;
