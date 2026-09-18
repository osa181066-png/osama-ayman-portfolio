import React from 'react';
import { X, Award, CheckCircle, ExternalLink, Calendar, Building, Copy, Check } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="certificate-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="certificate-lightbox-dialog"
        className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl text-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
              Credential Verification Viewer
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Visual Image Placeholder */}
        <div className="relative p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col items-center text-center justify-center min-h-[260px] overflow-hidden">
          {/* Subtle Guilloche pattern simulation */}
          <div className="absolute inset-4 rounded-xl border-2 border-dashed border-blue-500/20 pointer-events-none" />
          <div className="absolute inset-6 rounded-lg border border-slate-700/40 pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-lg">
            <div className="inline-flex p-3 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 mb-1">
              <Award className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Official Credential Placeholder
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              {certificate.title}
            </h3>

            <p className="text-sm font-medium text-blue-300">
              Awarded to Osama Ayman
            </p>

            <p className="text-xs text-slate-400">
              Issued by {certificate.issuer}
            </p>
          </div>

          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
            Image Placeholder • Replaceable Asset
          </div>
        </div>

        {/* Details and Skills */}
        <div className="p-6 sm:p-8 space-y-5">
          <p className="text-slate-300 text-sm leading-relaxed">
            {certificate.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="block font-mono text-slate-400 mb-1">Issuing Authority</span>
              <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                {certificate.issuer}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="block font-mono text-slate-400 mb-1">Status & Date</span>
              <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {certificate.date}
              </span>
            </div>
          </div>

          {/* Credential ID if present */}
          {certificate.credentialId && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-xs">
                <span className="text-slate-400 block font-mono text-[11px]">Credential Reference</span>
                <span className="font-mono text-blue-400 font-semibold">{certificate.credentialId}</span>
              </div>
              <button
                onClick={handleCopyId}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          )}

          {/* Competencies Validated */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Competencies Validated
            </span>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-950/50 border border-blue-800/60 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder Replacement Guide Note for User */}
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-blue-900/40 text-xs text-slate-400">
            <span className="font-semibold text-blue-300 block mb-0.5">Note for Osama:</span>
            To replace this placeholder with an official image scan or certificate photo, simply update the image asset reference.
          </div>

          {/* Footer action */}
          <div className="pt-3 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
