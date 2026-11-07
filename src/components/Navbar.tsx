'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Briefcase, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  PhoneCall, 
  Building2,
  Lock
} from 'lucide-react';

interface NavbarProps {
  onOpenHireModal?: () => void;
}

export default function Navbar({ onOpenHireModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-900 flex items-center justify-center shadow-lg shadow-brand-500/20 border border-brand-400/30 group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif font-black text-xl text-white tracking-wider">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                  KAUTILYA
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-brand-400 px-1.5 py-0.5 rounded bg-brand-950/60 border border-brand-800/60">
                    Research & Consulting
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 tracking-wide font-medium hidden sm:block">
                  Where Political Intelligence Meets Strategic Execution
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-slate-800/80 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/admin"
                className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-md hover:bg-slate-800/50 transition-colors flex items-center gap-1.5 border border-slate-800"
                title="Payload CMS Admin"
              >
                <Lock className="w-3.5 h-3.5 text-brand-400" />
                <span>Admin</span>
              </Link>

              <button
                onClick={onOpenHireModal}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-brand-400 via-brand-600 to-indigo-600 group-hover:from-brand-500 group-hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-200 rounded-[10px] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-200" />
                  <span>Hire Talent</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Talent / Request Proposal</span>
              </button>

              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm"
              >
                <Lock className="w-3.5 h-3.5 text-brand-400" />
                <span>CMS Admin Portal</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
