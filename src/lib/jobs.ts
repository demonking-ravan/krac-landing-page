import { sampleJobs } from './sampleJobs';
import { JobPost } from './types';

export async function getAllJobs(): Promise<JobPost[]> {
  try {
    if (process.env.DATABASE_URI && process.env.PAYLOAD_SECRET) {
      const { getPayload } = await import('payload');
      const configPromise = (await import('@/payload.config')).default;
      const payload = await getPayload({ config: configPromise });

      const result = await payload.find({
        collection: 'jobs',
        where: {
          status: {
            equals: 'published',
          },
        },
        sort: '-publishedDate',
        limit: 100,
      });

      if (result.docs && result.docs.length > 0) {
        return result.docs.map((doc: any) => ({
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          department: doc.department,
          departmentLabel: getDepartmentLabel(doc.department),
          location: doc.location,
          type: doc.type,
          typeLabel: getTypeLabel(doc.type),
          experienceLevel: doc.experienceLevel,
          experienceLabel: getExperienceLabel(doc.experienceLevel),
          salaryRange: doc.salaryRange || 'Competitive compensation',
          description: typeof doc.description === 'string' ? doc.description : 'Position details available upon review.',
          responsibilities: Array.isArray(doc.responsibilities)
            ? doc.responsibilities.map((r: any) => (typeof r === 'string' ? r : r.item))
            : [],
          requirements: Array.isArray(doc.requirements)
            ? doc.requirements.map((r: any) => (typeof r === 'string' ? r : r.item))
            : [],
          benefits: Array.isArray(doc.benefits)
            ? doc.benefits.map((b: any) => (typeof b === 'string' ? b : b.item))
            : [],
          status: doc.status || 'published',
          publishedDate: doc.publishedDate ? new Date(doc.publishedDate).toISOString().split('T')[0] : '2026-10-20',
          featured: Boolean(doc.featured),
        }));
      }
    }
  } catch (err) {
    console.warn('[Jobs Service] Using fallback sample jobs (Payload DB not connected yet):', (err as Error).message);
  }

  // Graceful fallback to verified curated job posts
  return sampleJobs;
}

export async function getJobBySlug(slug: string): Promise<JobPost | null> {
  try {
    if (process.env.DATABASE_URI && process.env.PAYLOAD_SECRET) {
      const { getPayload } = await import('payload');
      const configPromise = (await import('@/payload.config')).default;
      const payload = await getPayload({ config: configPromise });

      const result = await payload.find({
        collection: 'jobs',
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      });

      if (result.docs && result.docs.length > 0) {
        const doc: any = result.docs[0];
        return {
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          department: doc.department,
          departmentLabel: getDepartmentLabel(doc.department),
          location: doc.location,
          type: doc.type,
          typeLabel: getTypeLabel(doc.type),
          experienceLevel: doc.experienceLevel,
          experienceLabel: getExperienceLabel(doc.experienceLevel),
          salaryRange: doc.salaryRange || 'Competitive compensation',
          description: typeof doc.description === 'string' ? doc.description : 'Position details available upon review.',
          responsibilities: Array.isArray(doc.responsibilities)
            ? doc.responsibilities.map((r: any) => (typeof r === 'string' ? r : r.item))
            : [],
          requirements: Array.isArray(doc.requirements)
            ? doc.requirements.map((r: any) => (typeof r === 'string' ? r : r.item))
            : [],
          benefits: Array.isArray(doc.benefits)
            ? doc.benefits.map((b: any) => (typeof b === 'string' ? b : b.item))
            : [],
          status: doc.status || 'published',
          publishedDate: doc.publishedDate ? new Date(doc.publishedDate).toISOString().split('T')[0] : '2026-10-20',
          featured: Boolean(doc.featured),
        };
      }
    }
  } catch (err) {
    console.warn('[Jobs Service] Falling back to sample job detail:', (err as Error).message);
  }

  const found = sampleJobs.find((j) => j.slug === slug);
  return found || null;
}

function getDepartmentLabel(dept: string): string {
  const map: Record<string, string> = {
    tech: 'Technology & Engineering',
    finance: 'Banking & Financial Services',
    operations: 'Operations & Supply Chain',
    healthcare: 'Healthcare & Pharma',
    executive: 'Executive & C-Suite',
    hr: 'Human Resources',
    sales: 'Sales & Business Development',
  };
  return map[dept] || dept;
}

function getTypeLabel(type: string): string {
  const map: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    contract: 'Contract',
    internship: 'Internship',
  };
  return map[type] || type;
}

function getExperienceLabel(level: string): string {
  const map: Record<string, string> = {
    entry: 'Entry Level (0-2 yrs)',
    mid: 'Mid Level (3-6 yrs)',
    senior: 'Senior Level (7-10 yrs)',
    executive: 'Lead / Executive (10+ yrs)',
  };
  return map[level] || level;
}
