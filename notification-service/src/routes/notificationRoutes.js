const express = require('express');
const router = express.Router();
const { sendEmail } = require('../services/emailService');

router.post('/send-alert', async (req, res) => {
  const { email, message } = req.body;
  try {
    await sendEmail(email, 'New Pharma Alert', message);
    res.status(200).json({ success: true, message: 'Alert sent!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
