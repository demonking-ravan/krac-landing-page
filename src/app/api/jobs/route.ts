import { NextRequest, NextResponse } from 'next/server';
import { getAllJobs } from '@/lib/jobs';

export async function GET(req: NextRequest) {
  try {
    const jobs = await getAllJobs();
    return NextResponse.json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: 'Failed to retrieve jobs', error: err.message },
      { status: 500 }
    );
  }
}
