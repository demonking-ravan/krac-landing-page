import type { CollectionConfig } from 'payload';

export const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'job', 'email', 'phone', 'currentLocation', 'status', 'createdAt'],
  },
  access: {
    // Anyone can apply without candidate login
    create: () => true,
    // Only authenticated admin/recruiters can review applications
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'job',
      type: 'relationship',
      relationTo: 'jobs',
      required: true,
      admin: {
        description: 'Position being applied for',
      },
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'currentLocation',
      type: 'text',
      required: false,
    },
    {
      name: 'totalExperience',
      type: 'text',
      required: false,
      admin: {
        description: 'e.g. 5.5 years',
      },
    },
    {
      name: 'resume',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Uploaded candidate resume file',
      },
    },
    {
      name: 'resumeUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'Direct fallback URL if uploaded directly',
      },
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'portfolioUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'coverLetter',
      type: 'textarea',
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'New',
      options: [
        { label: 'New Application', value: 'New' },
        { label: 'Under Review', value: 'Reviewing' },
        { label: 'Shortlisted for Interview', value: 'Shortlisted' },
        { label: 'Offered', value: 'Offered' },
        { label: 'Archived / Rejected', value: 'Rejected' },
      ],
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: {
        description: 'Recruiter assessment and screening notes',
      },
    },
  ],
};
