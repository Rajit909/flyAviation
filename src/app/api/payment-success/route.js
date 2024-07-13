// pages/api/payment-success.js
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    try {
      // Verify the payment signature
      const isValid = razorpay.validateWebhookSignature(
        JSON.stringify(req.body),
        razorpay_signature,
        process.env.RAZORPAY_KEY_SECRET
      );

      if (!isValid) {
        return res.status(400).json({ message: 'Invalid signature' });
      }

      // Fetch payment details from Razorpay (optional)
      const payment = await razorpay.payments.fetch(razorpay_payment_id);

      // Generate receipt (you can use a library like PDFKit or just send a simple email)
      const receipt = `Payment successful! Payment ID: ${razorpay_payment_id}`;

      // Send receipt to user via email
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: payment.email, // The email provided in the prefill object
        subject: 'Payment Receipt',
        text: receipt,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Payment successful and receipt sent' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
