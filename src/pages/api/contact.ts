import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a transporter for nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER, // Recipient email address
        subject: `Message from ${name}`,
        text: message,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
