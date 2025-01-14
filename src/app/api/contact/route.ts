import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Your Gmail address where you want to receive notifications
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL as string;

if (!NOTIFICATION_EMAIL) {
  throw new Error('Missing NOTIFICATION_EMAIL environment variable');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}\n` : ''}
Budget Range: ${validatedData.budget}
Timeline: ${validatedData.timeline}
${validatedData.selectedPackage ? `Selected Package: ${validatedData.selectedPackage}\n` : ''}

Project Details:
${validatedData.projectDetails}
    `.trim();

    // Send the email notification
    await resend.emails.send({
      from: 'Contact Form <contact@wyveo.com>',
      to: [NOTIFICATION_EMAIL],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: emailContent,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 