import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner / Corporate Credentials */}
      <div className="border-b border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-950/80 border border-brand-800/40 flex items-center justify-center text-brand-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wider uppercase">ISO 9001:2015</h4>
                <p className="text-xs text-slate-400">Audited Talent Operations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-950/80 border border-brand-800/40 flex items-center justify-center text-brand-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wider uppercase">5+ Delivery Hubs</h4>
                <p className="text-xs text-slate-400">Mumbai, Bengaluru, NCR, SG</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-950/80 border border-brand-800/40 flex items-center justify-center text-brand-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Global Mandates</h4>
                <p className="text-xs text-slate-400">Cross-Border Executive Search</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-950/80 border border-brand-800/40 flex items-center justify-center text-brand-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Confidential Search</h4>
                <p className="text-xs text-slate-400">Strict Non-Disclosure Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-800 flex items-center justify-center border border-brand-400/30">
                <span className="font-serif font-black text-lg text-white">K</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                KAUTILYA <span className="text-brand-400 font-medium text-xs uppercase ml-1">Research & Consulting</span>
              </span>
            </Link>

            <p className="text-xs font-serif italic text-emerald-400">
              Where Political Intelligence Meets Strategic Execution.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Multidisciplinary political consulting and research organisation delivering integrated solutions across political strategy, election management, research, data analytics, media intelligence and grassroots operations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37h2.8z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Core Practices</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#services" className="hover:text-white transition-colors">Political Consulting & Strategy</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Opinion Polls & Research</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Data Analytics & Intelligence</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Ground Operations & Booth Mgmt</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Media & Digital Communication</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">War Room & Manpower Solutions</Link></li>
            </ul>
          </div>

          {/* Careers & Candidates */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Talent Portal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#careers" className="hover:text-white text-brand-400 font-medium transition-colors flex items-center gap-1.5">Live Openings <span className="text-[10px] bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded">Hiring</span></Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Political Consultants</Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Research Associates</Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Data Analysts</Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Ground Field Executives</Link></li>
              <li><Link href="/admin" className="hover:text-white text-xs text-slate-400 transition-colors">Payload CMS Admin</Link></li>
            </ul>
          </div>

          {/* Contact & Hubs */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>New Delhi & Regional Consulting Hubs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Careers@krac.co.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+91 7900595639</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Kautilya Research and Consulting Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Mandate</Link>
            <Link href="/about" className="hover:text-white transition-colors">Code of Ethics</Link>
            <Link href="/admin" className="text-slate-500 hover:text-slate-300">Staff Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
