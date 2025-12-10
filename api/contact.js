// Serverless function for sending contact form emails using SendGrid
// Deploy on Vercel (api/contact.js) or any platform that exposes an /api route.

const sgMail = require("@sendgrid/mail");

// Note: Make sure to set SENDGRID_API_KEY, SENDGRID_TO and SENDGRID_FROM in your environment.
// Example (Vercel):
// SENDGRID_API_KEY = <your key>
// SENDGRID_TO = your@recipient.email
// SENDGRID_FROM = verified-sender@your-domain.com

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Recipient (where messages are delivered). Defaults to the email you asked to add.
    const to = process.env.SENDGRID_TO || "devilprakashdas@gmail.com";
    // Sender must be a verified sender in SendGrid (keep as env var).
    const from = process.env.SENDGRID_FROM;

    if (!from) {
      console.error("SENDGRID_FROM not configured");
      return res.status(500).json({ error: "Email sender not configured" });
    }

    const msg = {
      to,
      from,
      subject: `Portfolio contact from ${name} <${email}>`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><pre style="white-space:pre-wrap">${message}</pre>`,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
