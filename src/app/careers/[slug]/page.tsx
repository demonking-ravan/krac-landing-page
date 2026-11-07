import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobApplicationForm from '@/components/JobApplicationForm';
import { getJobBySlug, getAllJobs } from '@/lib/jobs';
import {
  MapPin,
  Briefcase,
  Building,
  Clock,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  ChevronRight,
  Share2,
  ArrowLeft,
  Sparkles,
  Users
} from 'lucide-react';

interface JobDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return {
      title: 'Position Not Found | Kautilya Research & Consulting',
      description: 'The requested recruitment opening could not be located.',
    };
  }

  return {
    title: `${job.title} | Careers at Kautilya Research & Consulting`,
    description: job.description.slice(0, 160),
    openGraph: {
      title: `${job.title} | Kautilya Research & Consulting`,
      description: job.description.slice(0, 160),
      type: 'article',
    },
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        {/* ================= BREADCRUMBS & HERO HEADER ================= */}
        <section className="border-b border-slate-800/80 bg-slate-900/40 glow-mesh py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers & Retained Mandates
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-brand-300 font-medium truncate max-w-xs">{job.title}</span>
            </nav>

            <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-brand-300 bg-brand-950/90 border border-brand-800/70 px-3 py-1 rounded-full">
                    {job.departmentLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
                    {job.typeLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-400 bg-slate-800/70 px-3 py-1 rounded-full">
                    {job.experienceLabel}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-400" />
                    <span className="text-slate-200">{job.location}</span>
                  </div>
                  {job.salaryRange && (
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>{job.salaryRange}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Published {job.publishedDate}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Mandates</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT & FORM GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Detailed Job Profile */}
            <div className="lg:col-span-7 space-y-10">
              {/* Mission / Overview */}
              <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-400" />
                  <span>Executive Mandate Overview</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-400" />
                    <span>Primary Strategic Responsibilities</span>
                  </h3>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Qualifications & Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>Qualifications & Candidate Profile</span>
                  </h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compensation & Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Remuneration & Leadership Perquisites</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Non-Disclosure Assurance */}
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Confidential Search Protocol:</strong> Kautilya Research and Consulting guarantees candidate anonymity. Resumes are only presented to client selection panels after mutual consent following preliminary partner discussions.
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Sticky Application Form */}
            <div className="lg:col-span-5 sticky top-24">
              <JobApplicationForm job={job} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
