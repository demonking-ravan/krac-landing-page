export interface JobPost {
  id: string;
  title: string;
  slug: string;
  department: 'tech' | 'finance' | 'operations' | 'healthcare' | 'executive' | 'hr' | 'sales';
  departmentLabel: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  typeLabel: string;
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive';
  experienceLabel: string;
  salaryRange?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  status: 'published' | 'draft' | 'closed';
  publishedDate: string;
  featured?: boolean;
}

export interface ApplicationInput {
  jobId?: string;
  jobSlug?: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation?: string;
  totalExperience?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  coverLetter?: string;
  resumeFileName?: string;
  resumeFileBase64?: string;
}
