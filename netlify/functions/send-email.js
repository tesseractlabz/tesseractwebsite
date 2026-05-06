import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, country, address, message } = JSON.parse(event.body);

    if (!name || !email || !phone || !country || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Missing required fields.' }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

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

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
