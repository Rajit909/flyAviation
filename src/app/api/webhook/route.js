// app/api/webhook/route.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];
  const body = await req.text();

  // Verify the signature
  const isValid = razorpay.validateWebhookSignature(body, signature, secret);

  if (isValid) {
    const event = JSON.parse(body);
    console.log(event)

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;

      // Generate receipt content
      const receipt = `Payment successful!\n\nPayment ID: ${payment.id}\nAmount: ₹${(payment.amount / 100).toFixed(2)}\nOrder ID: ${payment.order_id}`;

      // Send receipt via email
      // Configure Nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP server
      port: 465, // Port for TLS
      secure: true, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email
        pass: process.env.EMAIL_PASS // Your Hostinger email password
      }
    });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: payment.notes.email, // Use the email stored in the notes
        subject: 'Payment Receipt | from Fly aviation Academy.',
        text: receipt,
      };
      console.log(payment.notes.email)


      try { 
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ status: 'success', message: 'Receipt sent successfully' });
      } catch (error) {
        return NextResponse.json({ status: 'error', message: error.message });
      }
    } else {
      return NextResponse.json({ status: 'ignored', message: 'Event not handled' });
    }
  } else {
    return NextResponse.json({ status: 'error', message: 'Invalid signature' });
  }
}
