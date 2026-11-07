import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Compass,
  FileCheck2,
  TrendingUp,
  Target,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Kautilya Research and Consulting',
  description:
    'Discover Kautilya Research and Consulting - the research-driven executive search and workforce advisory firm transforming human capital across Asia-Pacific.',
};

export default function AboutPage() {
  const leadershipValues = [
    {
      title: 'Intellectual Rigor',
      description: 'We do not rely on surface-level keyword algorithms. Every candidate evaluation is grounded in structured domain assessment and industry peer benchmarking.',
      icon: Compass,
    },
    {
      title: 'Fiduciary Confidentiality',
      description: 'Retained executive mandates require discreet governance. We enforce institutional-grade non-disclosure protocols across all client and candidate interactions.',
      icon: ShieldCheck,
    },
    {
      title: 'Speed with Precision',
      description: 'We compress the executive search cycle from months to days through proprietary pre-mapped industry networks and agile recruitment sprints.',
      icon: Target,
    },
    {
      title: 'Long-Term Partnership',
      description: 'Over 98% of our annual retained revenue derives from ongoing client partnerships and multi-year workforce advisory agreements.',
      icon: Users,
    },
  ];

  const milestones = [
    { year: '2012', event: 'Inception of Kautilya Research and Consulting in Mumbai focusing on senior BFSI and Industrial talent.' },
    { year: '2016', event: 'Expansion of Technology & GCC Practice across Bengaluru and Hyderabad hubs.' },
    { year: '2019', event: 'Launched Turnkey Manpower & RPO Division handling 5,000+ volume placements annually.' },
    { year: '2023', event: 'Achieved ISO 9001:2015 certification for talent vetting and established cross-border APAC search corridors.' },
    { year: '2025+', event: 'Deployment of AI-augmented workforce intelligence pipelines for Fortune 500 enterprises.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* ================= HERO HEADER ================= */}
        <section className="relative py-16 lg:py-24 glow-mesh border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-800/60 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              Strategic Talent Governance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Rooted in Strategy.{' '}
              <span className="gradient-blue">Driven by Research.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
              Kautilya Research and Consulting was founded on a singular premise: executive talent acquisition should operate with the intellectual rigor of management consulting and the velocity of high-frequency engineering.
            </p>
          </div>
        </section>

        {/* ================= HERITAGE & PHILOSOPHY ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs uppercase font-bold tracking-widest text-brand-400">
                The Heritage
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Architecting Human Capital for the World&apos;s Most Demanding Leaders
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Drawing inspiration from ancient Indian scholar Chanakya (Kautilya), whose seminal treatise the <em>Arthashastra</em> laid down timeless fundamentals of statecraft, personnel governance, and strategic meritocracy, our firm applies disciplined research methodologies to modern talent acquisition.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether deploying a transformational Chief Executive for a private equity portfolio company or scaling hundreds of cloud architects for a new Global Capability Center, our partners work as strategic advisors to your board.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-600/30"
                >
                  <span>Connect with our Managing Partners</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h4 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Key Institutional Benchmarks
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">ISO 9001:2015 Audited Operations</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Formal compliance and documentation standards for all candidate vetting and background verification.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Pan-Asian Corridor Reach</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Established delivery networks across India (Mumbai, Bengaluru, NCR, Hyderabad, Pune) and APAC financial centers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Zero Conflict Retainer Policy</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Clear off-limits boundaries ensuring integrity and transparent fiduciary alignment with our client partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE ADVISORY VALUES ================= */}
        <section className="bg-slate-900/40 border-y border-slate-800/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <h2 className="text-xs uppercase font-bold tracking-widest text-brand-400">Principles of Governance</h2>
              <h3 className="text-3xl font-extrabold text-white">Our Operating Standards</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipValues.map((val, idx) => {
                const VIcon = val.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400">
                      <VIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= TIMELINE MILESTONES ================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-xs uppercase font-bold tracking-widest text-brand-400">Evolution</h2>
            <h3 className="text-3xl font-extrabold text-white">Milestones of Growth</h3>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <span className="text-2xl font-black text-brand-400 font-mono tracking-tight shrink-0 sm:w-28">
                  {m.year}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
