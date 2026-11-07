import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'recruiter',
      options: [
        { label: 'Super Admin', value: 'admin' },
        { label: 'Talent Lead', value: 'lead' },
        { label: 'Recruiter', value: 'recruiter' },
      ],
    },
  ],
};
