import type { CollectionConfig } from 'payload';

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'type', 'experienceLevel', 'status', 'publishedDate'],
  },
  access: {
    read: () => true, // Publicly readable for candidates
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. senior-fullstack-engineer)',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'department',
      type: 'select',
      required: true,
      options: [
        { label: 'Technology & Engineering', value: 'tech' },
        { label: 'Banking & Financial Services', value: 'finance' },
        { label: 'Operations & Supply Chain', value: 'operations' },
        { label: 'Healthcare & Pharma', value: 'healthcare' },
        { label: 'Executive & C-Suite', value: 'executive' },
        { label: 'Human Resources', value: 'hr' },
        { label: 'Sales & Business Development', value: 'sales' },
      ],
      defaultValue: 'tech',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      defaultValue: 'Mumbai, India (Hybrid)',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
      defaultValue: 'full-time',
    },
    {
      name: 'experienceLevel',
      type: 'select',
      required: true,
      options: [
        { label: 'Entry Level (0-2 yrs)', value: 'entry' },
        { label: 'Mid Level (3-6 yrs)', value: 'mid' },
        { label: 'Senior Level (7-10 yrs)', value: 'senior' },
        { label: 'Lead / Executive (10+ yrs)', value: 'executive' },
      ],
      defaultValue: 'senior',
    },
    {
      name: 'salaryRange',
      type: 'text',
      admin: {
        description: 'e.g. ₹25,00,000 - ₹35,00,000 PA or Competitive',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'High-level role overview and mission',
      },
    },
    {
      name: 'responsibilities',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date(),
    },
  ],
};
