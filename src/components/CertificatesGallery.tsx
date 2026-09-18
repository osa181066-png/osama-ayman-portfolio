import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  X,
  FileCheck,
  Eye,
  Clock,
  Sparkles,
  Download,
} from 'lucide-react';
import { CERTIFICATES_DATA, ONGOING_TRAINING } from '../data/portfolioData';
import { Certificate } from '../types';

export const CertificatesGallery: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="py-24 bg-slate-900 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>05 / Verified Credentials</span>
          </div>
          <h2
            id="certificates-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Licenses & Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Accredited certificates in marketing, business, project management, data analysis and corporate programs.
          </p>
        </div>

        {/* 8 Featured Certificates Grid */}
        <div
          id="certificates-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {CERTIFICATES_DATA.map((cert, index) => (
            <div
              key={cert.id}
              id={`cert-card-${index + 1}`}
              className="rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Frame */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer border-b border-slate-800"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Hover Overlay with Preview button */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </span>
                  </div>

                  {/* Issuer Top Pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-950/90 text-blue-300 border border-slate-700/60 backdrop-blur-sm">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cert.badgeText}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Button & Skills */}
              <div className="p-5 pt-0 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CURRENT / ONGOING TRAINING SUBSECTION */}
        <div
          id="ongoing-training-subsection"
          className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-slate-950 border border-blue-500/40 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold mb-3">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                <span>CURRENT / ONGOING TRAINING</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                Digital Egypt Youth / DEIP (Rwad Misr Digital)
              </h3>

              <p className="text-xs font-mono text-blue-400 mb-3">
                Ministry of Communications and Information Technology (MCIT) • Active Cohort
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Currently participating in the flagship DEIP / Rwad Misr Digital initiative. This program reinforces practical market analysis, digital campaign benchmarking, and emerging business frameworks.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 lg:min-w-[280px]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                Active Training Focus Areas
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Digital Marketing Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Competitor Benchmarking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Data-Driven Decision Making</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Applied Business Simulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Certificate Viewer Lightbox / Modal */}
      {selectedCert && (
        <div
          id="cert-lightbox-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            id="cert-lightbox-content"
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-800 text-slate-100 flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-lg font-heading font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="p-6 bg-slate-950 flex flex-col items-center justify-center">
              <div className="max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-white">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-blue-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {selectedCert.fileUrl && (
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Open Certificate File</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
