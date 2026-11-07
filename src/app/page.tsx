'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  BarChart2,
  Database,
  Users,
  Sparkles,
  Shield,
  Layers,
  PhoneCall,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Search,
  MapPin,
  Upload,
  Send,
  Check,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Building2,
  Languages,
  Briefcase,
  FileCheck2,
} from 'lucide-react';
import { contentData, Language, CapabilityItem, ProjectItem, JobItem } from '@/lib/content';

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'surveys' | 'data' | 'manpower'>('all');
  const [jobDeptFilter, setJobDeptFilter] = useState<string>('all');
  const [jobSearch, setJobSearch] = useState<string>('');
  
  // Modals
  const [activeCapability, setActiveCapability] = useState<CapabilityItem | null>(null);
  const [activeApplyJob, setActiveApplyJob] = useState<{ title: string; dept: string } | null>(null);
  const [resumeFileName, setResumeFileName] = useState<string>('');
  
  // Forms & Toast
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);
  const [isSubmittingApply, setIsSubmittingApply] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; title: string; message: string } | null>(null);

  const t = useMemo(() => contentData[lang], [lang]);

  // Read language preference if stored
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('krac_lang') as Language;
      if (savedLang === 'en' || savedLang === 'hi') {
        setLang(savedLang);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    try {
      localStorage.setItem('krac_lang', nextLang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return t.projects.cards;
    return t.projects.cards.filter((p) => p.category === projectFilter);
  }, [projectFilter, t.projects.cards]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return t.careers.jobs.filter((j) => {
      const matchesDept = jobDeptFilter === 'all' || j.deptKey === jobDeptFilter;
      const term = jobSearch.toLowerCase().trim();
      const matchesSearch =
        !term ||
        j.title.toLowerCase().includes(term) ||
        j.desc.toLowerCase().includes(term) ||
        j.location.toLowerCase().includes(term);
      return matchesDept && matchesSearch;
    });
  }, [jobDeptFilter, jobSearch, t.careers.jobs]);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingEnquiry(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.get('fullName') || '',
          company: formData.get('orgName') || 'Individual / Confidential',
          designation: formData.get('designation') || '',
          email: formData.get('email') || '',
          phone: formData.get('phone') || '',
          serviceRequired: formData.get('serviceRequired') || 'General Consulting',
          message: `${formData.get('locationScope') ? `[Scope: ${formData.get('locationScope')}] ` : ''}${formData.get('projectDetails') || ''}`,
        }),
      });

      if (!response.ok) {
        // Fallback gracefully
      }
    } catch {
      // Fallback gracefully for offline or sandboxed dev
    } finally {
      setIsSubmittingEnquiry(false);
      form.reset();
      showToast(t.modals.toast.enquirySuccessTitle, t.modals.toast.enquirySuccessBody);
    }
  };

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingApply(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (activeApplyJob) {
      formData.append('jobTitle', activeApplyJob.title);
    }

    try {
      await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });
    } catch {
      // Fallback gracefully
    } finally {
      setIsSubmittingApply(false);
      setActiveApplyJob(null);
      setResumeFileName('');
      form.reset();
      showToast(t.modals.toast.applySuccessTitle, t.modals.toast.applySuccessBody);
    }
  };

  // Capability Pillar icon mapper
  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      case '02':
        return <BarChart2 className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      case '03':
        return <Database className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      case '04':
        return <Users className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      case '05':
        return <Sparkles className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      case '06':
        return <Shield className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
      default:
        return <Layers className="w-5 h-5 text-ink-400 group-hover:text-sage-700 transition" />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#FBFBF9] text-ink-900 ${lang === 'hi' ? 'font-devanagari' : 'font-sans'}`}>
      
      {/* 1. TOP STRIP */}
      <div className="bg-sage-50 border-b border-sage-200/60 py-2 px-4 text-center text-[12px] font-medium text-sage-800 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
        <span>{t.topStrip.announcement}</span>
        <span className="hidden md:inline text-sage-700/40">|</span>
        <a
          href="#careers"
          className="hidden md:inline font-semibold underline underline-offset-2 hover:text-sage-900 transition"
        >
          {t.topStrip.linkText}
        </a>
      </div>

      {/* 2. STICKY NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-cream-300 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-deepnavy-850 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <span className="font-sans font-extrabold tracking-tight text-lg text-ink-900 block leading-tight">
                {t.nav.brandName}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-ink-500 font-medium block">
                {t.nav.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-ink-600">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ink-900 transition flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-sage-100 text-sage-800 border border-sage-200">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-3 py-1.5 rounded-lg border border-cream-300 bg-white hover:bg-cream-200 text-xs font-semibold text-ink-800 flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
              title={lang === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
            >
              <Languages className="w-3.5 h-3.5 text-sage-700" />
              <span className="font-medium">{t.nav.langToggle}</span>
            </button>

            {/* Direct Phone */}
            <a
              href={`tel:${t.nav.phone.replace(/[^0-9]/g, '')}`}
              className="text-xs font-mono text-ink-600 hover:text-ink-900 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-cream-200 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.nav.phone}</span>
            </a>

            {/* Connect Button */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 text-white font-medium text-xs sm:text-sm tracking-wide transition shadow-sm flex items-center gap-2"
            >
              <span>{t.nav.connectBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1.5 rounded-lg border border-cream-300 bg-white text-xs font-semibold text-ink-800 flex items-center gap-1"
            >
              <Languages className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.nav.langToggle}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-cream-300 text-ink-700 hover:bg-cream-200 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBFBF9] border-b border-cream-300 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-ink-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs bg-sage-100 text-sage-800 font-semibold px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-4 border-t border-cream-300 space-y-3">
              <a
                href={`tel:${t.nav.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 text-sm text-ink-700 font-mono"
              >
                <PhoneCall className="w-4 h-4 text-sage-700" />
                <span>{t.nav.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 text-center rounded-lg bg-deepnavy-850 text-white font-medium text-sm"
              >
                {t.nav.connectBtn} &rarr;
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Sage Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200/80 text-sage-800 text-[11px] sm:text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-700"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Refined Headline */}
          <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl text-ink-900 tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="italic font-normal text-sage-800">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-ink-600 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            <strong className="font-semibold text-ink-900">{t.hero.p1Bold}</strong>
            {t.hero.p1Rest}
          </p>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-light leading-relaxed mb-4">
            {t.hero.p2}
          </p>

          <p className="text-xs sm:text-sm font-semibold tracking-wider text-sage-800 uppercase font-mono mb-10">
            {t.hero.taglineBold}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 text-white font-medium text-sm transition shadow-sm flex items-center justify-center gap-2"
            >
              <span>{t.hero.btnServices}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white hover:bg-cream-200 border border-cream-300 text-ink-800 font-medium text-sm transition shadow-2xs flex items-center justify-center gap-2"
            >
              <span>{t.hero.btnConnect}</span>
            </a>
          </div>

          {/* Trust Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-300 rounded-xl overflow-hidden border border-cream-300 card-clean text-left">
            {t.hero.metrics.map((m, idx) => (
              <div key={idx} className="p-6 bg-white hover:bg-cream-50 transition">
                <div className={`font-serif text-3xl sm:text-4xl ${idx === 1 ? 'text-sage-700' : 'text-ink-900'}`}>
                  {m.val}
                </div>
                <div className="text-[12px] text-ink-500 font-medium mt-1">{m.label}</div>
                <div className="text-[10px] text-sage-700 font-mono mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTRODUCTION / ABOUT US */}
      <section id="about" className="py-20 md:py-28 bg-[#F4F4EE]/60 border-y border-cream-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200">
                {t.about.badge}
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
                {t.about.heading}
                <span className="italic text-sage-800">{t.about.headingHighlight}</span>
              </h2>

              <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-light">
                {t.about.p1}
              </p>

              <p className="text-sm text-ink-600 leading-relaxed font-light">
                {t.about.p2}
              </p>

              {/* Core Philosophy Callout */}
              <div className="p-6 rounded-xl bg-white border border-cream-300 border-l-4 border-l-sage-700 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-sage-800 font-semibold block">
                  {t.about.philosophyLabel}
                </span>
                <p className="font-serif italic text-base sm:text-lg text-ink-900 leading-snug">
                  {t.about.philosophyQuote}
                </p>
              </div>
            </div>

            {/* Right Side: Structured Bento Cards */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Vision & Mission Card */}
              <div className="card-clean rounded-xl p-6 bg-white space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-sage-700 font-semibold">
                    {t.about.visionMissionBadge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sage-500"></span>
                </div>
                <h3 className="font-serif text-xl text-ink-900">
                  {t.about.visionMissionBadge}
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                  <strong className="text-ink-900 font-semibold">{t.about.visionTitle} </strong>
                  {t.about.visionText}
                </p>
                <div className="border-t border-cream-200 pt-3">
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                    <strong className="text-ink-900 font-semibold">{t.about.missionTitle} </strong>
                    {t.about.missionText}
                  </p>
                </div>
              </div>

              {/* 7 Core Values Card */}
              <div className="card-clean rounded-xl p-6 bg-white">
                <span className="text-xs font-mono uppercase tracking-wider text-ink-500 font-semibold block mb-3">
                  {t.about.valuesTitle}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-700 font-medium">
                  {t.about.values.map((val, idx) => {
                    const isLast = idx === t.about.values.length - 1;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 p-2.5 rounded-lg ${
                          isLast
                            ? 'sm:col-span-2 bg-sage-50 text-sage-900 border border-sage-200'
                            : 'bg-cream-100'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-sage-700 shrink-0" />
                        <span>{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE CAPABILITIES (7 PILLARS) */}
      <section id="services" className="py-20 md:py-28 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200 mb-4">
              {t.capabilities.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight">
              {t.capabilities.heading}
              <span className="italic text-sage-800">{t.capabilities.headingHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-600 mt-3 font-light">
              {t.capabilities.subhead}
            </p>
          </div>

          {/* 7 Pillars Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.capabilities.pillars.slice(0, 6).map((pillar) => (
              <div
                key={pillar.id}
                className="card-clean rounded-xl p-7 flex flex-col justify-between group hover:border-sage-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sage-700 bg-sage-100 px-2.5 py-1 rounded">
                      {pillar.num}
                    </span>
                    {getPillarIcon(pillar.num)}
                  </div>
                  <h3 className="font-serif text-xl text-ink-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed font-light mb-4">
                    {pillar.shortDesc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-ink-700 font-light border-t border-cream-300 pt-3">
                    {pillar.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-sage-700 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setActiveCapability(pillar)}
                  className="mt-6 pt-3 border-t border-cream-200 text-xs font-semibold text-sage-700 hover:text-sage-900 flex items-center justify-between transition cursor-pointer"
                >
                  <span>{t.capabilities.viewScopeBtn}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* 07 Highlight Card */}
            {t.capabilities.pillars[6] && (
              <div className="card-clean rounded-xl p-7 bg-sage-50/70 border-sage-200 md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-sage-800 bg-sage-200 px-2.5 py-0.5 rounded">
                      07
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sage-700">
                      {t.capabilities.highlightBadge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink-900 mb-2">
                    {t.capabilities.pillars[6].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-light mb-4">
                    {t.capabilities.pillars[6].shortDesc}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-ink-800 font-medium">
                    <div className="p-2.5 rounded-lg bg-white border border-sage-200">
                      <span className="block text-sage-800 font-bold">CATI Surveys</span>
                      <span className="text-[11px] text-ink-500 font-normal">Telephonic Interviewing</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-sage-200">
                      <span className="block text-sage-800 font-bold">CAPI Field Ops</span>
                      <span className="text-[11px] text-ink-500 font-normal">Tablet Personal Surveys</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-sage-200">
                      <span className="block text-sage-800 font-bold">Audit & QC</span>
                      <span className="text-[11px] text-ink-500 font-normal">GPS & Voice Verifications</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-sage-200">
                      <span className="block text-sage-800 font-bold">Bilingual Teams</span>
                      <span className="text-[11px] text-ink-500 font-normal">Regional Linguistic Depth</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 min-w-[200px]">
                  <button
                    onClick={() => setActiveCapability(t.capabilities.pillars[6])}
                    className="px-5 py-3 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 text-white font-medium text-xs text-center transition shadow-sm cursor-pointer"
                  >
                    {t.capabilities.highlightScopeBtn}
                  </button>
                  <a
                    href="#careers"
                    className="px-5 py-3 rounded-lg bg-white hover:bg-cream-200 border border-cream-300 text-ink-800 font-medium text-xs text-center transition"
                  >
                    {t.capabilities.highlightRosterBtn}
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. HIGH-CONTRAST DEEP NAVY BREAK */}
      <section className="py-20 bg-deepnavy-850 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deepnavy-700 text-sage-200 text-xs font-mono font-medium">
            {t.navyBanner.badge}
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {t.navyBanner.headingLine1} <br className="hidden sm:inline" />
            <span className="italic text-sage-200">{t.navyBanner.headingHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t.navyBanner.desc}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-lg bg-sage-500 hover:bg-sage-700 text-white font-medium text-xs sm:text-sm tracking-wide transition shadow-sm"
            >
              {t.navyBanner.btnBriefing}
            </a>
            <a
              href={`tel:${t.nav.phone.replace(/[^0-9]/g, '')}`}
              className="px-7 py-3.5 rounded-lg bg-deepnavy-700 hover:bg-deepnavy-800 text-white font-medium text-xs sm:text-sm transition border border-white/10"
            >
              {t.navyBanner.btnPhone}
            </a>
          </div>
        </div>
      </section>

      {/* 7. EXPERTISE SECTION */}
      <section id="expertise" className="py-20 md:py-28 bg-[#FBFBF9] border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200 mb-4">
              {t.expertise.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight">
              {t.expertise.heading}
              <span className="italic text-sage-800">{t.expertise.headingHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-600 mt-3 font-light">
              {t.expertise.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.expertise.cards.map((card, idx) => (
              <div key={idx} className="card-clean rounded-xl p-6 bg-white space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center font-mono text-xs font-bold">
                  {`0${idx + 1}`}
                </div>
                <h4 className="font-serif text-lg text-ink-900 font-semibold">{card.title}</h4>
                <p className="text-xs text-ink-600 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. METHODOLOGY / OUR APPROACH (6-Step Flow) */}
      <section id="methodology" className="py-20 md:py-28 bg-[#F4F4EE]/60 border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200 mb-4">
              {t.methodology.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight">
              {t.methodology.heading}
              <span className="italic text-sage-800">{t.methodology.headingHighlight}</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-ink-500 mt-3">
              {t.methodology.flow}
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.methodology.steps.map((st, idx) => (
              <div key={idx} className="card-clean rounded-xl p-6 bg-white space-y-2">
                <div className="text-xs font-mono font-bold text-sage-700">{st.num}</div>
                <h4 className="font-serif text-lg text-ink-900">{st.title}</h4>
                <p className="text-xs text-ink-600 leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROJECTS & EXPERIENCE */}
      <section id="projects" className="py-20 md:py-28 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200 mb-3">
                {t.projects.badge}
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight">
                {t.projects.heading}
                <span className="italic text-sage-800">{t.projects.headingHighlight}</span>
              </h2>
            </div>

            {/* Filter Pill Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-cream-300 rounded-lg overflow-x-auto no-scrollbar">
              {(['all', 'surveys', 'data', 'manpower'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                    projectFilter === cat
                      ? 'text-sage-800 bg-sage-100 font-semibold'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {t.projects.filterLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="card-clean rounded-xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-500 mb-3">
                    <span className="text-sage-700 font-semibold uppercase">{p.categoryLabel}</span>
                    <span>{p.scopeTag}</span>
                  </div>
                  <h4 className="font-serif text-lg text-ink-900 mb-2">{p.title}</h4>
                  <p className="text-xs text-ink-600 leading-relaxed font-light mb-4">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-cream-200 text-xs font-mono text-ink-500 flex items-center justify-between">
                  <span>{p.metricLabel}</span>
                  <span className="text-sage-700 font-medium">{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CAREERS PORTAL */}
      <section id="careers" className="py-20 md:py-28 bg-[#F4F4EE]/60 border-t border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200 mb-3">
              {t.careers.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight">
              {t.careers.heading}
              <span className="italic text-sage-800">{t.careers.headingHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-700 mt-2 font-medium">
              {t.careers.subheadBold}
            </p>
            <p className="text-xs sm:text-sm text-ink-600 mt-1 max-w-2xl mx-auto font-light">
              {t.careers.subheadLight}
            </p>
          </div>

          {/* Search & Department Filters */}
          <div className="card-clean rounded-xl p-4 bg-white mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                placeholder={t.careers.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-cream-100 border border-cream-300 text-xs text-ink-900 placeholder-ink-400 focus:outline-none focus:border-sage-500 font-sans"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto no-scrollbar">
              {t.careers.deptFilters.map((df) => (
                <button
                  key={df.key}
                  onClick={() => setJobDeptFilter(df.key)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                    jobDeptFilter === df.key
                      ? 'text-sage-800 bg-sage-100 font-semibold'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {df.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="card-clean rounded-xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-50 text-sage-800 border border-sage-200">
                      {job.dept}
                    </span>
                    <span className="text-xs text-ink-500">{job.type}</span>
                  </div>
                  <h4 className="font-serif text-lg text-ink-900 mb-1">{job.title}</h4>
                  <p className="text-xs text-ink-500 mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sage-700" />
                    <span>{job.location}</span>
                  </p>
                  <p className="text-xs text-ink-600 leading-relaxed font-light mb-4">
                    {job.desc}
                  </p>
                </div>
                <button
                  onClick={() => setActiveApplyJob({ title: job.title, dept: job.dept })}
                  className="w-full py-2.5 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 text-white font-medium text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>{t.careers.applyBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* General Talent Roster Pool */}
          <div className="mt-12 p-8 rounded-xl bg-cream-200/80 border border-cream-300 text-center max-w-2xl mx-auto">
            <h4 className="font-serif text-xl text-ink-900 mb-1">{t.careers.rosterTitle}</h4>
            <p className="text-xs text-ink-600 mb-5 font-light leading-relaxed">
              {t.careers.rosterDesc}
            </p>
            <button
              onClick={() => setActiveApplyJob({ title: 'General Professional Network', dept: 'Multidisciplinary' })}
              className="px-6 py-2.5 rounded-lg bg-white hover:bg-cream-100 border border-cream-300 text-xs font-semibold text-ink-900 transition shadow-2xs cursor-pointer"
            >
              {t.careers.rosterBtn}
            </button>
          </div>

        </div>
      </section>

      {/* 11. CONTACT & PROJECT ENQUIRY */}
      <section id="contact" className="py-20 md:py-28 bg-[#FBFBF9] border-t border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Meta */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold border border-sage-200">
                {t.contact.badge}
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 tracking-tight leading-tight">
                {t.contact.heading} <br />
                <span className="italic text-sage-800">{t.contact.headingHighlight}</span>
              </h2>

              <p className="text-sm text-ink-600 leading-relaxed font-light">
                {t.contact.subhead}
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                
                <a
                  href={`tel:${t.contact.phoneVal.replace(/[^0-9]/g, '')}`}
                  className="card-clean rounded-lg p-4 bg-white flex items-center gap-3.5 group block transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center group-hover:bg-sage-100 transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-ink-400 uppercase block">
                      {t.contact.phoneLabel}
                    </span>
                    <span className="text-sm font-semibold text-ink-900">{t.contact.phoneVal}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${t.contact.emailVal}`}
                  className="card-clean rounded-lg p-4 bg-white flex items-center gap-3.5 group block transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center group-hover:bg-sage-100 transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-ink-400 uppercase block">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-sm font-semibold text-ink-900">{t.contact.emailVal}</span>
                  </div>
                </a>

                <div className="card-clean rounded-lg p-4 bg-white flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-ink-400 uppercase block">
                      {t.contact.webLabel}
                    </span>
                    <span className="text-sm font-semibold text-ink-900">{t.contact.webVal}</span>
                  </div>
                </div>

                <div className="card-clean rounded-lg p-4 bg-white flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-ink-400 uppercase block">
                      {t.contact.hqLabel}
                    </span>
                    <span className="text-xs font-semibold text-ink-900">{t.contact.hqVal}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Project Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="card-clean rounded-2xl p-6 sm:p-8 bg-white border border-cream-300 shadow-sm">
                <h3 className="font-serif text-2xl text-ink-900 mb-1">{t.contact.formTitle}</h3>
                <p className="text-xs text-ink-500 mb-6 font-light">{t.contact.formSub}</p>

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.name}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder={t.contact.fields.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.org}
                      </label>
                      <input
                        type="text"
                        name="orgName"
                        placeholder={t.contact.fields.orgPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.designation}
                      </label>
                      <input
                        type="text"
                        name="designation"
                        placeholder={t.contact.fields.designationPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={t.contact.fields.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder={t.contact.fields.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-ink-700 mb-1">
                        {t.contact.fields.service}
                      </label>
                      <select
                        name="serviceRequired"
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                      >
                        <option value="" disabled>
                          {t.contact.fields.servicePlaceholder}
                        </option>
                        {t.contact.fields.serviceOptions.map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-700 mb-1">
                      {t.contact.fields.location}
                    </label>
                    <input
                      type="text"
                      name="locationScope"
                      required
                      placeholder={t.contact.fields.locationPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-700 mb-1">
                      {t.contact.fields.details}
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      required
                      placeholder={t.contact.fields.detailsPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 resize-none font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingEnquiry}
                    className="w-full py-3.5 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 disabled:opacity-60 text-white font-medium text-xs tracking-wider uppercase transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {isSubmittingEnquiry
                        ? t.contact.fields.submittingText
                        : t.contact.fields.submitBtn}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-white border-t border-cream-300 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-deepnavy-850 text-white font-serif font-bold flex items-center justify-center text-sm">
                  K
                </div>
                <span className="font-sans font-bold text-base text-ink-900">
                  {t.footer.brandName}
                </span>
              </div>
              <p className="text-xs font-serif italic text-sage-800">
                {t.footer.tagline}
              </p>
              <p className="text-xs text-ink-500 leading-relaxed max-w-sm font-light">
                {t.footer.desc}
              </p>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs font-mono font-semibold text-ink-900 uppercase">
                {t.footer.navHeading}
              </h5>
              <ul className="space-y-1.5 text-xs text-ink-600 font-light">
                {t.footer.navLinks.map((nl) => (
                  <li key={nl.href}>
                    <a href={nl.href} className="hover:text-ink-900 transition">
                      {nl.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs font-mono font-semibold text-ink-900 uppercase">
                {t.footer.servicesHeading}
              </h5>
              <ul className="space-y-1.5 text-xs text-ink-600 font-light">
                {t.footer.servicesList.map((srv, idx) => (
                  <li key={idx}>
                    <a href="#services" className="hover:text-ink-900 transition">
                      {srv}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs font-mono font-semibold text-ink-900 uppercase">
                {t.footer.contactHeading}
              </h5>
              <div className="space-y-1 text-xs text-ink-600 font-light leading-relaxed">
                {t.footer.contactLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-400 font-light gap-4">
            <div>{t.footer.copyright}</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-ink-700 transition">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-ink-700 transition">
                {t.footer.terms}
              </a>
              <a href="#" className="hover:text-ink-700 transition">
                {t.footer.disclaimer}
              </a>
              <a href="#" className="text-sage-700 hover:text-sage-900 font-medium transition">
                {t.footer.backToTop}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 13. MODAL: CAPABILITY SCOPE */}
      {activeCapability && (
        <div
          className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveCapability(null)}
        >
          <div
            className="card-clean max-w-xl w-full rounded-2xl p-6 sm:p-8 bg-white border border-cream-300 shadow-xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCapability(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-ink-400 hover:text-ink-800 hover:bg-cream-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-sage-700 uppercase">
                {t.modals.capability.badgePrefix} {activeCapability.num}
              </span>
              <h3 className="font-serif text-2xl text-ink-900 mt-1">
                {activeCapability.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light mb-4">
              {activeCapability.scopeDesc}
            </p>

            <div className="border-t border-cream-200 pt-3">
              <h5 className="text-xs font-mono font-semibold text-ink-900 uppercase mb-2.5">
                {t.modals.capability.deliverablesHeading}
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-ink-700 font-light">
                {activeCapability.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sage-700 font-bold">•</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-cream-200 flex justify-end">
              <a
                href="#contact"
                onClick={() => setActiveCapability(null)}
                className="px-5 py-2.5 rounded-lg bg-deepnavy-850 text-white text-xs font-medium hover:bg-deepnavy-900 transition flex items-center gap-1.5"
              >
                <span>{t.modals.capability.commissionBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 14. MODAL: APPLICATION SUBMISSION */}
      {activeApplyJob && (
        <div
          className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveApplyJob(null)}
        >
          <div
            className="card-clean max-w-lg w-full rounded-2xl p-6 sm:p-8 bg-white border border-cream-300 shadow-xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveApplyJob(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-ink-400 hover:text-ink-800 hover:bg-cream-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-sage-100 text-sage-800 font-semibold uppercase">
                {activeApplyJob.dept}
              </span>
              <h3 className="font-serif text-2xl text-ink-900 mt-1">
                {activeApplyJob.title}
              </h3>
              <p className="text-xs text-ink-500 font-light mt-0.5">
                {t.modals.apply.subhead}
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-ink-700 mb-1">
                  {t.modals.apply.nameLabel}
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder={t.modals.apply.namePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">
                    {t.modals.apply.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.modals.apply.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">
                    {t.modals.apply.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.modals.apply.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">
                    {t.modals.apply.expLabel}
                  </label>
                  <select
                    name="totalExperience"
                    defaultValue={t.modals.apply.expOptions[0]}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                  >
                    {t.modals.apply.expOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">
                    {t.modals.apply.locationLabel}
                  </label>
                  <input
                    type="text"
                    name="currentLocation"
                    required
                    placeholder={t.modals.apply.locationPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-700 mb-1">
                  {t.modals.apply.portfolioLabel}
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  placeholder={t.modals.apply.portfolioPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-700 mb-1">
                  {t.modals.apply.resumeLabel}
                </label>
                <div className="border border-dashed border-cream-400 hover:border-sage-500 rounded-lg p-3 text-center bg-cream-50 cursor-pointer transition">
                  <input
                    type="file"
                    id="resume-file-input"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResumeFileName(e.target.files[0].name);
                      }
                    }}
                  />
                  <label htmlFor="resume-file-input" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-5 h-5 text-sage-700 mb-1" />
                    <span className="text-xs text-ink-600 font-medium">
                      {resumeFileName ? `Attached: ${resumeFileName}` : t.modals.apply.resumePrompt}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-700 mb-1">
                  {t.modals.apply.noteLabel}
                </label>
                <textarea
                  name="coverLetter"
                  rows={2}
                  placeholder={t.modals.apply.notePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-cream-50 border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-sage-500 resize-none font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmittingApply}
                className="w-full py-3 rounded-lg bg-deepnavy-850 hover:bg-deepnavy-900 disabled:opacity-60 text-white font-medium text-xs tracking-wider uppercase transition shadow-sm cursor-pointer"
              >
                {isSubmittingApply ? t.modals.apply.submittingBtn : t.modals.apply.submitBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 15. TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="px-5 py-3.5 rounded-xl bg-white border border-sage-200 shadow-xl text-ink-900 flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
            <div>
              <h6 className="text-xs font-semibold text-ink-900">{toast.title}</h6>
              <p className="text-xs text-ink-500 font-light">{toast.message}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
