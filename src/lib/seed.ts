import { getPayload } from 'payload';
import configPromise from '../payload.config';
import { sampleJobs } from './sampleJobs';

export async function seedDatabase() {
  console.log('--- Starting Kautilya Database Seed ---');
  const payload = await getPayload({ config: configPromise });

  // 1. Check or create Super Admin User
  const existingUsers = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@kautilyaresearch.com',
      },
    },
    limit: 1,
  });

  if (existingUsers.totalDocs === 0) {
    console.log('Creating initial admin user: admin@kautilyaresearch.com');
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@kautilyaresearch.com',
        password: 'KautilyaSecurePass2025!',
        name: 'Executive Managing Partner',
        role: 'admin',
      },
    });
    console.log('✓ Admin user created successfully.');
  } else {
    console.log('Admin user already exists.');
  }

  // 2. Seed Jobs
  for (const job of sampleJobs) {
    const existing = await payload.find({
      collection: 'jobs',
      where: {
        slug: {
          equals: job.slug,
        },
      },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      console.log(`Seeding job: ${job.title}`);
      await payload.create({
        collection: 'jobs',
        data: {
          title: job.title,
          slug: job.slug,
          department: job.department,
          location: job.location,
          type: job.type,
          experienceLevel: job.experienceLevel,
          salaryRange: job.salaryRange,
          description: job.description,
          responsibilities: job.responsibilities.map((r) => ({ item: r })),
          requirements: job.requirements.map((r) => ({ item: r })),
          benefits: job.benefits.map((b) => ({ item: b })),
          status: 'published',
          publishedDate: new Date().toISOString(),
        },
      });
      console.log(`✓ Seeded ${job.title}`);
    }
  }

  console.log('--- Seed process completed successfully ---');
}

if (process.argv[1]?.includes('seed')) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Seed error:', err);
      process.exit(1);
    });
}
