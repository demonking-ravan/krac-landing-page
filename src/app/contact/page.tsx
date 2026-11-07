'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  User,
  Building,
  Globe2
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceRequired: 'executive-search',
    urgency: 'immediate',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setReferenceId(data.inquiryRef || `KRC-${Date.now().toString(36).toUpperCase()}`);
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Mumbai (Headquarters)',
      address: 'Level 8, Platina Tower, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra 400051',
      phone: '+91 (022) 6940-8800',
      email: 'mumbai@kautilyaresearch.com',
      hours: 'Mon - Fri: 09:00 - 19:00 IST',
    },
    {
      city: 'Bengaluru (Tech & Cloud Hub)',
      address: 'Tower B, RMZ Infinity, Old Madras Road, Indiranagar, Bengaluru, Karnataka 560038',
      phone: '+91 (080) 4920-3300',
      email: 'bengaluru@kautilyaresearch.com',
      hours: 'Mon - Fri: 09:00 - 19:00 IST',
    },
    {
      city: 'Delhi NCR (Industrial & Ops Hub)',
      address: 'Building 10, DLF Cyber City, Phase II, Gurugram, Haryana 122002',
      phone: '+91 (0124) 4780-1200',
      email: 'delhi@kautilyaresearch.com',
      hours: 'Mon - Fri: 09:00 - 19:00 IST',
    },
    {
      city: 'Singapore (APAC Cross-Border)',
      address: 'Level 34, Marina Bay Financial Centre Tower 1, Singapore 018981',
      phone: '+65 6812 7700',
      email: 'apac@kautilyaresearch.com',
      hours: 'Mon - Fri: 09:00 - 18:00 SGT',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* ================= HERO HEADER ================= */}
        <section className="relative py-14 lg:py-20 glow-mesh border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800/60 text-brand-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Inquiries & Talent Retainers</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Initiate a Retained Search or Workforce Consultation
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect with our Managing Partners to discuss strategic hires, large-scale turnkey staffing, or bespoke talent mapping engagements.
            </p>
          </div>
        </section>

        {/* ================= FORM & HUBS GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
                <div className="border-b border-slate-800 pb-5 mb-6">
                  <h3 className="text-2xl font-bold text-white">Client Engagement Form</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Please provide initial context on your organizational hiring requirement. A Senior Partner will contact you within 4 business hours.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-12 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Engagement Request Logged</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Kautilya Research and Consulting. An Executive Partner has been assigned to your requisition.
                    </p>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 inline-block text-xs font-mono text-brand-400">
                      Tracking Code: {referenceId}
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Full Legal Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alok Singhania"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Official Corporate Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                          <input
                            type="email"
                            required
                            placeholder="alok@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Organization / Firm *
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Apex Holdings Corp"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Direct Telephone / Mobile *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98111 22334"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                        >
                          <option value="executive-search">Executive Search (CXO & Board)</option>
                          <option value="bulk-manpower">Bulk Manpower & Turnkey Staffing</option>
                          <option value="staff-augmentation">Staff Augmentation & Contract Engineering</option>
                          <option value="rpo">Recruitment Process Outsourcing (RPO)</option>
                          <option value="hr-advisory">HR Advisory & Talent Benchmarking</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Deployment Timeline
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500"
                        >
                          <option value="immediate">Immediate Priority (&lt; 15 days)</option>
                          <option value="30days">Within 30 Days</option>
                          <option value="quarter">Strategic Pipeline (Next Quarter)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Mandate Scope & Brief Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Provide preliminary requirements: target seniority level, target industry, locations, estimated headcount, or specific technical competencies..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-brand-500 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-brand-600/30 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting Corporate Brief...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Mandate Requisition</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Office Hubs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-400">
                  Global Delivery Corridors
                </span>
                <h3 className="text-2xl font-bold text-white">Our Strategic Offices</h3>
                <p className="text-xs text-slate-400">
                  Direct regional presence providing localized market depth and pan-India talent access.
                </p>
              </div>

              <div className="space-y-4">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-2.5"
                  >
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-400" />
                      <span>{office.city}</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{office.address}</p>
                    <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-brand-300">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{office.phone}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        <span>{office.email}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-brand-950/40 border border-brand-800/40 space-y-2">
                <div className="flex items-center gap-2 text-brand-400 font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All employer inquiries are handled directly by Senior Managing Partners subject to non-disclosure agreements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
