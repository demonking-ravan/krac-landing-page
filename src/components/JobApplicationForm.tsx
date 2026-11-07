'use client';

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { JobPost } from '@/lib/types';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  FileCheck,
  X
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full legal name (minimum 2 characters)'),
  email: z.string().email('Please provide a valid professional email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  currentLocation: z.string().min(2, 'Current city or location is required'),
  totalExperience: z.string().min(1, 'Please specify your total relevant experience'),
  linkedinUrl: z.string().url('Must be a valid URL (e.g. https://linkedin.com/in/...)').or(z.literal('')).optional(),
  portfolioUrl: z.string().url('Must be a valid URL').or(z.literal('')).optional(),
  coverLetter: z.string().max(2000, 'Cover note cannot exceed 2000 characters').optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface JobApplicationFormProps {
  job: JobPost;
}

export default function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      currentLocation: '',
      totalExperience: '',
      linkedinUrl: '',
      portfolioUrl: '',
      coverLetter: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      const validExtensions = ['.pdf', '.doc', '.docx'];
      const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

      if (!validExtensions.includes(fileExt) && !validTypes.includes(file.type)) {
        setFileError('Invalid format. Accepted file types: PDF, DOC, or DOCX only.');
        setSelectedFile(null);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setFileError('File exceeds maximum size limit of 10MB.');
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (values: FormValues) => {
    setServerError('');
    if (!selectedFile) {
      setFileError('Please attach your updated CV or resume (PDF/DOC/DOCX).');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('jobId', job.id);
      formData.append('jobSlug', job.slug);
      formData.append('jobTitle', job.title);
      formData.append('fullName', values.fullName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('currentLocation', values.currentLocation || '');
      formData.append('totalExperience', values.totalExperience || '');
      formData.append('linkedinUrl', values.linkedinUrl || '');
      formData.append('portfolioUrl', values.portfolioUrl || '');
      formData.append('coverLetter', values.coverLetter || '');
      formData.append('resume', selectedFile);

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Application submission failed.');
      }

      setApplicationRef(result.referenceId || `KRC-${Date.now().toString(36).toUpperCase()}`);
      setSubmissionSuccess(true);
      reset();
      setSelectedFile(null);
    } catch (err: any) {
      setServerError(err.message || 'An error occurred while transmitting your application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      {submissionSuccess ? (
        /* Success State */
        <div className="text-center py-10 space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Application Confirmed
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Dossier Transmitted to Search Committee
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Your credentials for <strong className="text-white">{job.title}</strong> have been secured in our candidate registry. Our Talent Lead will review your qualifications and contact you directly if there is an executive alignment.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 inline-block text-center space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Candidate Tracking Reference</span>
            <span className="text-sm font-mono font-bold text-brand-400 tracking-wider">
              {applicationRef}
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setSubmissionSuccess(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Submit Another Application or Update Profile
            </button>
          </div>
        </div>
      ) : (
        /* Application Form */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase font-semibold text-brand-400 tracking-wider">
                Direct Candidate Application
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">Apply for this Position</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Submit your verified professional portfolio. Confidentiality is strictly preserved under our non-disclosure code.
            </p>
          </div>

          {serverError && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Sharma"
                  {...register('fullName')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="vikram@domain.com"
                  {...register('email')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone & Current Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Direct Phone / WhatsApp <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  placeholder="+91 98200 12345"
                  {...register('phone')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Current Location (City, Country) <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Mumbai, India"
                  {...register('currentLocation')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.currentLocation ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.currentLocation && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.currentLocation.message}</p>
              )}
            </div>
          </div>

          {/* Total Experience & LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Total Relevant Experience <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. 8.5 Years"
                  {...register('totalExperience')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.totalExperience ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.totalExperience && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.totalExperience.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                LinkedIn Profile URL
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  {...register('linkedinUrl')}
                  className={`w-full bg-slate-950 border rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none placeholder-slate-600 transition-colors ${
                    errors.linkedinUrl ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors.linkedinUrl && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.linkedinUrl.message}</p>
              )}
            </div>
          </div>

          {/* Resume Upload Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Attach Resume / Executive CV (PDF, DOC, DOCX up to 10MB) <span className="text-rose-400">*</span>
            </label>

            {!selectedFile ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all hover:bg-slate-950/80 ${
                  fileError
                    ? 'border-rose-500 bg-rose-500/5'
                    : 'border-slate-700/80 hover:border-brand-500 bg-slate-950/40'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <UploadCloud className="w-7 h-7 text-brand-400 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">
                  Click to select file or drag & drop
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Supported formats: PDF, DOCX (Max 10MB)
                </p>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-brand-500/40 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400 shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-medium text-white truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for review
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {fileError && <p className="text-[11px] text-rose-400 mt-1">{fileError}</p>}
          </div>

          {/* Cover Note */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Candidate Brief or Cover Note (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Highlight notable career accomplishments, notice period, or specific leadership mandates..."
              {...register('coverLetter')}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-brand-500 placeholder-slate-600 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-brand-600/30 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Encrypting & Transmitting Dossier...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Candidate Dossier</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2.5">
              By submitting, your data is governed under our Non-Disclosure & ISO 9001:2015 privacy guidelines.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
