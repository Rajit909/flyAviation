
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


// Helper function to save file to disk and return its path
async function saveFile(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const filePath = path.join(process.cwd(), 'public', 'uploads', file.name);
  fs.writeFileSync(filePath, bytes);
  return filePath;
}

// Named export for the POST method
export async function POST(request) {
  try {
    // Parse the request body to extract form data
    const formData = await request.formData();

    // Extract fields from formData
    const fields = {};
    const files = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files[key] = value;
      } else {
        fields[key] = value;
      }
    }

    // Save files and get their paths
    const photoPath = await saveFile(files['photo']);
    const aadharPath = await saveFile(files['aadhar']);
    const highmarkPath = await saveFile(files['highmark']);
    const intermarkPath = await saveFile(files['intermark']);

    

    const {
    name,
    fname,
    mname,
    gender,
    email,
    phone,
    qfn,
    address,
    state,
    country,
    course,
    } = fields;

    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
    console.log('EMAIL_TO:', process.env.EMAIL_TO);


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


    

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your Hostinger email)
      to: process.env.EMAIL_TO, // Recipient address
      subject: 'New Admission Application- FlyAviation Academy.', // Subject line
      text: `
        Name: ${name}
        Father's Name: ${fname}
        Mother's Name: ${mname}
        Gender: ${gender}
        Email: ${email}
        Phone No. : ${phone}
        Qualification: ${qfn}          
        Adderess: ${address}
        State: ${state}
        Country: ${country}
        Course: ${course}
      `,
      attachments: [
        {
          filename: path.basename(photoPath),
          path: photoPath,
        },
        {
          filename: path.basename(aadharPath),
          path: aadharPath,
        },
        {
          filename: path.basename(highmarkPath),
          path: highmarkPath,
        },
        {
          filename: path.basename(intermarkPath),
          path: intermarkPath,
        },
        
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

  
    
    // Return a success response
    return NextResponse.json({ success: true, message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    // Log the error details for debugging
    console.error('Error in API route:', error.message);
    console.error('Full error details:', error);

    // Return an error response
    return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
  }
}
