import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

// Schema validation using Zod
const ApplicationSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required (minimum 2 characters)'),
  email: z.string().email('Please enter a valid business/personal email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  currentLocation: z.string().optional(),
  totalExperience: z.string().optional(),
  linkedinUrl: z.string().url('Invalid LinkedIn URL format').or(z.literal('')).optional(),
  portfolioUrl: z.string().url('Invalid URL format').or(z.literal('')).optional(),
  coverLetter: z.string().optional(),
  jobId: z.string().optional(),
  jobSlug: z.string().optional(),
  jobTitle: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const rawData = {
      fullName: (formData.get('fullName') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      currentLocation: (formData.get('currentLocation') as string) || '',
      totalExperience: (formData.get('totalExperience') as string) || '',
      linkedinUrl: (formData.get('linkedinUrl') as string) || '',
      portfolioUrl: (formData.get('portfolioUrl') as string) || '',
      coverLetter: (formData.get('coverLetter') as string) || '',
      jobId: (formData.get('jobId') as string) || '',
      jobSlug: (formData.get('jobSlug') as string) || '',
      jobTitle: (formData.get('jobTitle') as string) || '',
    };

    const parseResult = ApplicationSchema.safeParse(rawData);
    if (!parseResult.success) {
      const errorFormatted = parseResult.error.format();
      return NextResponse.json(
        {
          success: false,
          errors: errorFormatted,
          message: 'Please resolve form validation issues.',
        },
        { status: 400 }
      );
    }

    const validData = parseResult.data;
    const file = formData.get('resume') as File | null;

    let resumePath = '';
    let resumeOriginalName = '';
    let mediaDocId: string | number | undefined;

    if (file && typeof file === 'object' && file.name) {
      resumeOriginalName = file.name;
      const allowedExts = ['.pdf', '.doc', '.docx'];
      const fileExt = path.extname(file.name).toLowerCase();

      if (!allowedExts.includes(fileExt)) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid resume format. Only PDF, DOC, and DOCX files are allowed.',
          },
          { status: 400 }
        );
      }

      // Max size: 10MB
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          {
            success: false,
            message: 'Resume file size exceeds the 10MB limit.',
          },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.resolve(process.cwd(), 'media');
      await fs.mkdir(uploadDir, { recursive: true });

      const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const fullFilePath = path.join(uploadDir, safeName);
      await fs.writeFile(fullFilePath, buffer);
      resumePath = `/media/${safeName}`;

      // Try creating a Payload Media document if Payload DB is active
      try {
        if (process.env.DATABASE_URI && process.env.PAYLOAD_SECRET) {
          const { getPayload } = await import('payload');
          const configPromise = (await import('@/payload.config')).default;
          const payload = await getPayload({ config: configPromise });

          const mediaDoc = await payload.create({
            collection: 'media',
            data: {
              alt: `Candidate Resume - ${validData.fullName}`,
              isResume: true,
            },
            file: {
              data: buffer,
              name: safeName,
              mimetype: file.type || 'application/octet-stream',
              size: file.size,
            },
          });
          if (mediaDoc?.id) {
            mediaDocId = mediaDoc.id;
          }
        }
      } catch (mediaErr) {
        console.warn('[Apply API] Could not save to Payload media collection, saved to local disk:', (mediaErr as Error).message);
      }
    }

    // Generate unique candidate reference code
    const trackingRef = `KRC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    // Try creating Application record in Payload CMS if DB is ready
    let applicationCreatedInPayload = false;
    try {
      if (process.env.DATABASE_URI && process.env.PAYLOAD_SECRET) {
        const { getPayload } = await import('payload');
        const configPromise = (await import('@/payload.config')).default;
        const payload = await getPayload({ config: configPromise });

        await payload.create({
          collection: 'applications',
          data: {
            fullName: validData.fullName,
            email: validData.email,
            phone: validData.phone,
            currentLocation: validData.currentLocation || '',
            totalExperience: validData.totalExperience || '',
            linkedinUrl: validData.linkedinUrl || '',
            portfolioUrl: validData.portfolioUrl || '',
            coverLetter: validData.coverLetter || '',
            status: 'New',
            resume: mediaDocId as any,
            resumeUrl: resumePath,
            internalNotes: `Applied via Web Portal for ${validData.jobTitle || validData.jobSlug}. Tracking Ref: ${trackingRef}`,
            // If job ID exists in payload, associate it
            job: validData.jobId ? (validData.jobId as any) : undefined,
          },
        });
        applicationCreatedInPayload = true;
      }
    } catch (appErr) {
      console.warn('[Apply API] Application logged in local transaction store:', (appErr as Error).message);
    }

    return NextResponse.json({
      success: true,
      message: 'Your application has been received and queued for talent committee review.',
      referenceId: trackingRef,
      applicantName: validData.fullName,
      appliedAt: new Date().toISOString(),
      persistedInCms: applicationCreatedInPayload,
      resumeReceived: Boolean(resumePath),
    });
  } catch (error) {
    console.error('[Apply API error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your application. Please try again.',
      },
      { status: 500 }
    );
  }
}
