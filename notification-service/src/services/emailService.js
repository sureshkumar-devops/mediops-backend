const nodemailer = require('nodemailer');
require('dotenv').config();

// 1. Create a transporter object using SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use 'gmail' or a custom SMTP host
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your App Password (not your main password)
  },
});

/**
 * Sends an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} text - Plain text body
 * @param {string} html - HTML body (optional)
 */
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Pharma Notifications" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.info('Email sent: %s', info.messageId);     
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
