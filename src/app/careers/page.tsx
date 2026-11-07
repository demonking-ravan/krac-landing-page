'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HireTalentModal from '@/components/HireTalentModal';
import { sampleJobs } from '@/lib/sampleJobs';
import { JobPost } from '@/lib/types';
import {
  Search,
  MapPin,
  Briefcase,
  Building,
  Clock,
  Filter,
  ArrowRight,
  Sparkles,
  ChevronRight,
  RotateCcw,
  BadgeCheck,
  TrendingUp,
  X,
  Loader2
} from 'lucide-react';

function CareersContent() {
  const searchParams = useSearchParams();
  const initialDept = searchParams?.get('department') || 'all';

  const [jobs, setJobs] = useState<JobPost[]>(sampleJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExp, setSelectedExp] = useState('all');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  // Sync with searchParams if changed
  useEffect(() => {
    if (initialDept && initialDept !== 'all') {
      setSelectedDept(initialDept);
    }
  }, [initialDept]);

  // Try fetching live jobs from API if database connected
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('/api/jobs');
        if (res.ok) {
          const data = await res.json();
          if (data && data.jobs && data.jobs.length > 0) {
            setJobs(data.jobs);
          }
        }
      } catch {
        // Fallback to sampleJobs already loaded
      }
    }
    fetchJobs();
  }, []);

  const departments = [
    { label: 'All Disciplines', value: 'all' },
    { label: 'Technology & Cloud', value: 'tech' },
    { label: 'Banking & Finance', value: 'finance' },
    { label: 'Supply Chain & Ops', value: 'operations' },
    { label: 'Healthcare & Pharma', value: 'healthcare' },
    { label: 'Executive & C-Suite', value: 'executive' },
    { label: 'Human Resources', value: 'hr' },
    { label: 'Enterprise Sales', value: 'sales' },
  ];

  const types = [
    { label: 'All Contract Types', value: 'all' },
    { label: 'Full-time', value: 'full-time' },
    { label: 'Part-time', value: 'part-time' },
    { label: 'Contract', value: 'contract' },
    { label: 'Internship', value: 'internship' },
  ];

  const experienceLevels = [
    { label: 'All Experience Levels', value: 'all' },
    { label: 'Entry Level (0-2 yrs)', value: 'entry' },
    { label: 'Mid Level (3-6 yrs)', value: 'mid' },
    { label: 'Senior Level (7-10 yrs)', value: 'senior' },
    { label: 'Lead / Executive (10+ yrs)', value: 'executive' },
  ];

  const locations = [
    { label: 'All Locations', value: 'all' },
    { label: 'Bengaluru', value: 'bengaluru' },
    { label: 'Mumbai', value: 'mumbai' },
    { label: 'Delhi NCR / Gurugram', value: 'gurugram' },
    { label: 'Hyderabad', value: 'hyderabad' },
    { label: 'Remote', value: 'remote' },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search text match
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        job.title.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower) ||
        job.departmentLabel.toLowerCase().includes(searchLower) ||
        job.location.toLowerCase().includes(searchLower);

      // Dept match
      const matchesDept = selectedDept === 'all' || job.department === selectedDept;

      // Type match
      const matchesType = selectedType === 'all' || job.type === selectedType;

      // Exp match
      const matchesExp = selectedExp === 'all' || job.experienceLevel === selectedExp;

      // Location match
      const matchesLocation =
        selectedLocation === 'all' ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesDept && matchesType && matchesExp && matchesLocation;
    });
  }, [jobs, searchTerm, selectedDept, selectedType, selectedExp, selectedLocation]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDept('all');
    setSelectedType('all');
    setSelectedLocation('all');
    setSelectedExp('all');
  };

  const hasActiveFilters =
    searchTerm ||
    selectedDept !== 'all' ||
    selectedType !== 'all' ||
    selectedLocation !== 'all' ||
    selectedExp !== 'all';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      <Navbar onOpenHireModal={() => setIsHireModalOpen(true)} />

      <main className="flex-grow pt-24 pb-20">
        {/* ================= HERO & SEARCH HEADER ================= */}
        <section className="relative py-12 lg:py-16 glow-mesh border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800/60 text-brand-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Careers & Retained Mandates</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Shape Your Leadership Legacy with Premier Enterprises
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Explore curated career opportunities represented exclusively by Kautilya Research and Consulting across high-impact industry verticals.
              </p>
            </div>

            {/* Live Search & Filter Bar */}
            <div className="mt-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md space-y-4">
              {/* Primary Search Input */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search by job title, domain keywords, skills (e.g. Cloud Architect, Structured Finance, M&A)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 placeholder-slate-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Selects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Department */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Department
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    {departments.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Employment Type */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Contract Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    {types.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>
                        {loc.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Experience Level
                  </label>
                  <select
                    value={selectedExp}
                    onChange={(e) => setSelectedExp(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    {experienceLevels.map((exp) => (
                      <option key={exp.value} value={exp.value}>
                        {exp.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filter Indicators & Reset */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400">
                    Showing <strong className="text-brand-400 font-semibold">{filteredJobs.length}</strong> matching roles
                  </span>
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-medium"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear all filters</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= JOB LISTINGS GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredJobs.length === 0 ? (
            /* Empty State */
            <div className="py-20 text-center max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">No Matching Mandates Found</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We could not locate any open positions matching your specific criteria. Try loosening your filters or submit a general confidential application.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Reset Search Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Available Positions ({filteredJobs.length})
                </p>
                <span className="text-xs text-slate-500">Updated today</span>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-brand-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-brand-950/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
                  >
                    {/* Left: Job Meta & Details */}
                    <div className="space-y-3.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-semibold text-brand-300 bg-brand-950/80 border border-brand-800/60 px-2.5 py-1 rounded-md">
                          {job.departmentLabel}
                        </span>
                        <span className="text-[11px] font-medium text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                          {job.typeLabel}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md">
                          {job.experienceLabel}
                        </span>
                        {job.featured && (
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded uppercase tracking-wider">
                            Featured Mandate
                          </span>
                        )}
                      </div>

                      <div>
                        <Link href={`/careers/${job.slug}`}>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                            {job.title}
                          </h3>
                        </Link>
                        <p className="text-slate-400 text-sm line-clamp-2 mt-1 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Info Badges */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-400" />
                          <span>{job.location}</span>
                        </div>
                        {job.salaryRange && (
                          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>{job.salaryRange}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Posted {job.publishedDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex sm:flex-col lg:flex-col shrink-0 gap-2.5 sm:w-44">
                      <Link
                        href={`/careers/${job.slug}`}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-md shadow-brand-600/20 group/btn"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={`/careers/${job.slug}`}
                        className="flex-1 sm:flex-initial flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 text-xs font-medium transition-colors"
                      >
                        View Full Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ================= GENERAL APPLICATION BANNER ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Don&apos;t see your specific specialization?</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                We frequently execute confidential, unadvertised CXO and board searches. Submit your resume to our confidential talent repository for proactive placement.
              </p>
            </div>
            <Link
              href="/careers/senior-enterprise-ai-cloud-architect"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors whitespace-nowrap"
            >
              Submit Executive CV
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <HireTalentModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}

export default function CareersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
          <div className="flex items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-brand-400" />
            <span>Loading career portal...</span>
          </div>
        </div>
      }
    >
      <CareersContent />
    </Suspense>
  );
}
