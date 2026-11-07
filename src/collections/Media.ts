import type { CollectionConfig } from 'payload';
import path from 'path';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(process.cwd(), 'media'),
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
    ],
  },
  access: {
    read: () => true,
    create: () => true, // Allows candidates to upload resumes during job application
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'isResume',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Marks if this file is a confidential candidate CV',
      },
    },
  ],
};
