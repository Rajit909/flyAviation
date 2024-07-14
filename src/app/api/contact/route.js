
import { NextResponse } from 'next/server';


// handle conatct routes


export async function POST(request) {
    try {
    
   
    // Parse the request body to extract form data
    const formData = await request.formData();

    // Extract fields from formData
    const fields = {};
    
    for (const [key, value] of formData.entries()) {
        fields[key] = value;
    }

    const {
        name,
        email,
        message,
        subject
    } = fields;

    console.log(`name: ${name.value}, email: ${email.value}, message: ${message.value}, subject: ${subject.value}`)
    return NextResponse.json({ success: true, message: 'Application submitted successfully!' }, { status: 200 });

} catch (error) {
    console.log('Error:', error);
    return NextResponse.error(error);
}
}