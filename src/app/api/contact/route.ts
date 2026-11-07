import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().min(8, 'Phone number is required'),
  serviceRequired: z.string().min(1, 'Please select a service'),
  urgency: z.string().optional(),
  message: z.string().min(10, 'Please provide context regarding your hiring requirement'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.format() },
        { status: 400 }
      );
    }

    const inquiryRef = `KRC-CORP-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to Kautilya Research and Consulting. A Senior Talent Partner will connect with you within 4 business hours.',
      inquiryRef,
      data: result.data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
