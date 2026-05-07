import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Gmail SMTP transporter — explicit host config
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Error:', error.message);
  } else {
    console.log('✅ Gmail SMTP Connected! Ready to send emails.');
  }
});

// POST /api/send-email
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, country, address, message } = req.body;

  console.log('📨 New form submission from:', name, email);

  if (!name || !email || !phone || !country || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  const mailOptions = {
    from: `"Tesseract Labz" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📬 New Contact: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #09637E; border-bottom: 2px solid #09637E; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold; width: 30%;">Name</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Phone</td>
            <td style="padding: 10px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Country</td>
            <td style="padding: 10px;">${country}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Address</td>
            <td style="padding: 10px;">${address || 'N/A'}</td>
          </tr>
        </table>
        <h3 style="color: #09637E; margin-top: 20px;">Message</h3>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #09637E; border-radius: 4px;">
          ${message}
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Sent from Tesseract Labz contact form.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent! Message ID:', info.messageId);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Catch-all route to serve the React app for any other request
app.get('*any', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
